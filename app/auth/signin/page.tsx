// app/auth/signin/page.tsx

/* 
Sign in page server side rendering
- Request all auth methods from pocketbase collection "user" (default)
- Render the signin buttons with a client component which creates a cookie
- Extract the query params from the url for any error in the nextauth flow
*/

import AuthLink from "@/components/auth/AuthLink";
import { pocketbase, redirectURI } from "@/lib/pocketbasessr";
import Link from "next/link";
import type { AuthProviderInfo } from "pocketbase";

export default async function SigninPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let errorMessage: string | undefined = undefined;
  let authMethods: Array<AuthProviderInfo> = [];
  try {
    const authMethodsList = await pocketbase
      .collection("users")
      .listAuthMethods();
    authMethods = [...authMethodsList.authProviders];
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "string") {
      errorMessage = err;
    }
  }

  if (typeof searchParams.error !== "undefined") {
    errorMessage = searchParams.error as string;
  }
  return (
    <div className="flex flex-col gap-12 items-center justify-center min-h-dvh w-full font-[family-name:var(--font-geist-sans)]">
      
      
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl justify-center">
          Sign in
        </h2>
        <div className="flex gap-4 items-center flex-col">
          {authMethods.map((a) => (
            <AuthLink key={a.name} redirectURI={redirectURI} authProvider={a} />
          ))}
        </div>
        {authMethods.length === 0 && (
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <span className="text-pink-400">
              No configured authentication providers
            </span>
          </div>
        )}
        {errorMessage && (
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <span className="text-pink-400">{errorMessage}</span>
          </div>
        )}
        <div className="flex items-center"><Link href="/" prefetch={false} className="font-semibold text-gray-600 hover:text-gray-800">Back</Link></div>

    </div>
  );
}
