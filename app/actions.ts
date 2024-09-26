"use server";

import { cookies } from "next/headers";
import type { AuthProviderInfo } from "pocketbase";

export async function createAuthProviderCookie(data: AuthProviderInfo): Promise<boolean|Error> {
  try {
    const d = JSON.stringify(data);
    await cookies().set(process.env.POCKETBASE_COOKIE_NAME, d);
    return true;
  } catch (e) {
    console.error(e);
    if(e instanceof Error) {
      return e;
    }
    if(typeof e === "string") {
      return new Error(e);
    }
    return new Error("cookie set error")
  }
}