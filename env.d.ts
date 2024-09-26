namespace NodeJS {
  interface ProcessEnv {
    POCKETBASE_URL: string; // the pocketbase base url "http://127.0.0.1:8090" (server side)
    NEXT_PUBLIC_POCKETBASE_URL: string; // the pocketbase base url "http://127.0.0.1:8090" (client side)
    POCKETBASE_COOKIE_NAME: string; // the cookie name to save the clicked authprovider at the nextjs signin page (/app/auth/signin/page.tsx)
  }
}