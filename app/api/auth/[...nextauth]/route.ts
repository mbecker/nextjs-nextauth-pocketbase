// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import type { NextRequest } from "next/server";

import { authOptions } from "@/lib/authoptions";

interface RouteHandlerContext {
  params: { nextauth: string[] };
}

const handler = async (req: NextRequest, context: RouteHandlerContext) => {
  return NextAuth(req, context, authOptions);
};

export { handler as GET, handler as POST };
