import PocketBase from "pocketbase";

const pocketbase = new PocketBase(process.env.POCKETBASE_URL);
// if (process.env.NODE_ENV === "development") pocketbase.autoCancellation(false);
pocketbase.autoCancellation(false);

const redirectURI = `${process.env.NEXTAUTH_URL}/api/auth/callback/pocketbase`;
export { pocketbase, redirectURI };
