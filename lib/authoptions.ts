import type { NextAuthOptions } from "next-auth";

import type { OAuthConfig } from "next-auth/providers/oauth";
import type { AuthProviderInfo } from "pocketbase";
import { cookies } from "next/headers";

import type {
  PocketBaseProfile,
  PocketBaseTokenSetParameters,
} from "@/types/next-auth";
import { PocketBaseAuthErrorType } from "@/types/errors";
import { pocketbase, redirectURI } from "./pocketbasessr";

const pocketbaseAuthConfig: OAuthConfig<PocketBaseProfile> = {
  id: "pocketbase",
  name: "pocketbase",
  type: "oauth",
  version: "2.0",
  checks: ["none"],
  authorization: {
    url: process.env.POCKETBASE_URL,
    params: {
      scope: "*",
    },
  },
  clientId: "xx",
  clientSecret: "kll",
  token: {
    // (1) the request function is called after the redirect from the oauth provider and nextjs redirect
    async request(context) {
      // the return token object
      const tokens: PocketBaseTokenSetParameters = {};

      // try to validate the `params.code` form pocketbase, the `cooke` with the authprovider, and to login at pocketbase with the oauth2 code
      try {
        // check that the `params.code` exists; the `params.code` is the returned authorization code from the oauth provider which is handled at the redirect uri `/api/auth/[...nextauth]/route.tsx`
        const { code: authorizationCode } = context.params;
        if (typeof authorizationCode === "undefined") {
          tokens.error = PocketBaseAuthErrorType.AUTHORIZATIONCODEMISSING;
          throw new Error(tokens.error);
        }

        // check that the pocketbase cookie with the authprovider exists
        const cookie = cookies().get(process.env.POCKETBASE_COOKIE_NAME);
        if (typeof cookie === "undefined") {
          tokens.error = PocketBaseAuthErrorType.COOKIEMISSING;
          throw new Error(tokens.error);
        }
        const authProvider: AuthProviderInfo = JSON.parse(cookie.value);
        // Delete cookie
        cookies().delete(process.env.POCKETBASE_COOKIE_NAME);

        // authenticate at pocketbase with the provider and the oauth code (response)
        const userModelResponse = await pocketbase
          .collection("users")
          .authWithOAuth2Code(
            authProvider.name,
            authorizationCode,
            authProvider.codeVerifier,
            redirectURI
          );
        tokens.pocketbase = userModelResponse;
        return { tokens };
      } catch (e) {
        console.error(e);
        if (tokens.error === null) {
          tokens.error = PocketBaseAuthErrorType.UNKNOWNERROR;
        }
        return { tokens };
      }
    },
  },
  userinfo: {
    // (2) userinfo request is called after the token request
    request(context) {
      // extend the `token`
      const tokens: PocketBaseTokenSetParameters =
        context.tokens as PocketBaseTokenSetParameters;

      if (typeof tokens.error !== "undefined") {
        return {
          error: tokens.error,
          pocketbase: undefined,
        };
      }

      if (typeof tokens.pocketbase === "undefined") {
        return {
          error: PocketBaseAuthErrorType.POCKETBASEMISSING,
          pocketbase: undefined,
        };
      }

      // return the pocketbase user model
      return {
        pocketbase: tokens.pocketbase,
        error: undefined,
      };
    },
  },
  // (3) profile is called after the userinfo request
  profile: (profile) => {
    // the preprocessing callbacks `token` and/or `userinfo` has thrown an error; cancel the authentication flow and send back an error
    if (typeof profile.error !== "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: profile.error,
      };
    }

    // check that the object's `pocketbase` exists; if not return an error
    // TODO: check how to return just an error and not an additional placeholder `id`
    if (typeof profile.pocketbase === "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: PocketBaseAuthErrorType.POCKETBASEMISSING,
      };
    }
    const pbRecord = profile.pocketbase;
    if (typeof pbRecord.token === "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: PocketBaseAuthErrorType.USERTOKENMISSING,
      };
    }
    if (typeof pbRecord.record === "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: PocketBaseAuthErrorType.USERRECORDMISSING,
      };
    }
    if (typeof pbRecord.record.id === "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: PocketBaseAuthErrorType.USERIDMISSING,
      };
    }
    if (typeof pbRecord.record.email === "undefined") {
      return {
        id: "123", // just placeholder to return a `valid` profile id
        email: "123",
        token: "123",
        error: PocketBaseAuthErrorType.EMAILMISSING,
      };
    }
    // return the `profile`
    return {
      id: pbRecord.record.id,
      email: pbRecord.record.email,
      token: pbRecord.token,
      pocketbase: pbRecord,
    };
  },
};
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, // Secret for Next-auth, without this JWT encryption/decryption won't work
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
    error: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [pocketbaseAuthConfig],
  // the callbacks are called after the providers authentication flow
  callbacks: {
    // (1) checks tha the user is allowed to sign in
    async signIn({ user }) {
      if (typeof user.error !== "undefined") {
        console.log("nextauth callback signIn - error: ", user.error);
        throw new Error(user.error);
      }
      return true;
    },
    // (2) requested after the signin; the `user` is the result of `OAuthConfig.profile`; add the user information to the token
    async jwt({ token, user }) {
      // the `user` is only valid for the first call after signin
      if (typeof user !== "undefined") {
        token = { ...user, ...token };
      }
      return token;
    },
    // (3) callback is called whenever a session is checked; assign the token's information/properties to the session
    async session({ session, token }) {
      session = { ...token, ...session };
      return session;
    },
    // (-) called anytime the user is redirected to a callback URL (e.g. on signin or signout)
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};
