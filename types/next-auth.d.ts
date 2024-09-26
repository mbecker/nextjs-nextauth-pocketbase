// @/types/next-auth

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

import type { TokenSetParameters } from "openid-client";
import type { RecordAuthResponse, RecordModel } from "pocketbase";

export interface PocketBaseTokenSetParameters extends TokenSetParameters {
  error?: PocketBaseAuthErrorType;
  pocketbase?: RecordAuthResponse<RecordModel>;
}

export interface PocketBaseProfile {
  pocketbase?: RecordAuthResponse<RecordModel>;
  error?: PocketBaseAuthErrorType;
}

export interface PocketBaseUser extends DefaultUser {
  id: string;
  error?: PocketBaseAuthErrorType;
  name?: string | null;
  email: string;
  image?: string | null;
  token: string;
  pocketbase?: RecordAuthResponse<RecordModel>;
}

declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends PocketBaseUser {}
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Session extends PocketBaseUser {}
  /** The OAuth profile returned from your provider */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Profile extends PocketBaseProfile {}
}
declare module "next-auth/jwt" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface JWT extends PocketBaseUser {}
}
