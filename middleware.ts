// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NAVIGATION_ITEMS } from "./data/navigation";

// middleware is applied to all routes, use conditionals to select

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/signin",
    newUser: "/auth/signup",
    verifyRequest: "/auth/verify",
  },
  callbacks: {
    authorized: ({ req, token }) => {
      // all pages for `auth` (signin, signup, etc.) should be accessible
      if (req.nextUrl.pathname.startsWith("/auth")) {
        return true;
      }
      // the api route `/api/cookie` should be requested by the authlinks for setting the cookie
      if (req.nextUrl.pathname.startsWith("/api/cookies")) {
        return true;
      }
      // access the navigation object and check if it should be protected (`item.auth===true`)
      if (
        typeof NAVIGATION_ITEMS[`${req.nextUrl.pathname}`] !== "undefined" &&
        NAVIGATION_ITEMS[`${req.nextUrl.pathname}`].auth === true &&
        token === null
      ) {
        console.log("---");
        console.log("pathname: ", req.nextUrl.pathname);
        console.log("token: ", token);
        return false;
      }
      
      return true;
    },
  },
});
