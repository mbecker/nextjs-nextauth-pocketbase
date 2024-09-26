<div align="center">
  <h1 align="center">nextjs nextauth pocketbase</h1>
</div>
<div align="center">
  <a href="https://nextjs-nextauth-pocketbase.vercel.app/">nextjs-nextauth-pocketbase.vercel.app</a>
</div>
<br/>
This repository is a proof of concept how to integrate the tech stack nextjs, nextauth (frontend) and pocketbase (backend).

The backend pocketbase should be repsonible to authenticate the user via OAuth providers and / or credentials.

Pocketbase return the user's authentication token.

The user's token authenticates all request to pocketbase.

## Demo

(https://nextjs-nextauth-pocketbase.vercel.app/)[https://nextjs-nextauth-pocketbase.vercel.app/]

## Support

Please submit issues and / or PRs to improve this project. Thanks!

## Techstack

- [Nextjs](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Pocketbase](https://pocketbase.io/)
- Design from [papermark](https://github.com/mfts/papermark?tab=readme-ov-file)

## TODOS

- [ ] Update README withe more detailed instructions
- [ ] Add inline comments
- [ ] Delete authprovider cookie after signin process
- [ ] Add credentials signin
- [ ] Add signup process
- [ ] Redirect after signin to the previous page
- [ ] Singleton pocketbase for authenticated user (is it possible for ssr and client?)

## Getting Started

### Pocketbase + OAuth provider

1. Download and start pocketbase

```bash
# download and start pocketbase
pocketbase serve
```

2. Open UI and configure OAuth provider with clientID and clientSecret

```bash
# Open http://localhost:8090/_/#/settings/auth-providers
# Configure OAuth provider with clientID and clientSecret
````

3. Configure the redirect uri at your oauth provider

The oauth provider redirects to this url which is an api route from nextauth

```bash
# the oauth provider's callback: http://localhost:3000/api/auth/callback/pocketbase
```


### nextjs

1. Create nextjs project, add nextauth, start pocketbase, configure OAuth provider(s) in pocketbase

```bash
# https://nextjs.org/docs/getting-started/installation
npx create-next-app@latest [project-name] [options]
# enter project path
cd [project-name]
# install nextauth: https://next-auth.js.org/getting-started/example
npm install next-auth --save
# install pocketbase javascript client
npm install pocketbase --save
```

2. Add environment parameters with typescript support for nextjs

The environment parameters are used in the NexAuth OAuth configuration to request the authentication process at pocketbase.

```bash
# in the [project-name] root path
touch env.d.ts
```

File: env.d.ts
```typescript
namespace NodeJS {
  interface ProcessEnv {
    POCKETBASE_URL: string; // the pocketbase base url "http://127.0.0.1:8090" (server side)
    NEXT_PUBLIC_POCKETBASE_URL: string; // the pocketbase base url "http://127.0.0.1:8090" (client side)
    POCKETBASE_COOKIE_NAME: string; // the cookie name to save the clicked authprovider at the nextjs signin page (/app/auth/signin/page.tsx)
  }
}
````

Include the file `env.d.ts`in the file `tsconfig.json`:
```json
...
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "env.d.ts"],
...
```

3. Create the file `.env` and add the envirionment parameters

```bash
touch .env
````

File: .env
```env
POCKETBASE_COOKIE_NAME="authprovider"
POCKETBASE_URL=http://127.0.0.1:8090
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090

NEXTAUTH_SECRET=my_ultra_secure_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_NEXTAUTH_URL=http://localhost:3000
```

4. Create a helper for pocketbase server side

```bash
mkdir lib
touch lib/pocketbasessr.ts
````

5. Create the nextauth api route which handles the callback from the oauth provider

```bash
mkdir -p "app/api/[...nextauth]"
touch "app/api/[...nextauth]/route.ts"
```

5. Create the signin page

```bash
mkdir -p "app/auth/signin"
touch app/auth/signin/page.tsx
```

6. Create the component AuthLink to render signin buttons for each oauth provider

Renders the authentication method (oauth provider) from pocketbase as a client component. If the user clicks on a button, a serer side action is called to create a cookie to store the authentication information (code, name)

```bash
mkdir -p "components/auth"
touch components/auth/AuthLink.tsx"
```

6. Create the server side action to save a cookie

Saves a cookie with the given authentication provider by clicking the signin button in (4)

```bash
touch app/action.ts
````

7. Add the next authentication options with a custom oauth provider (pocketbase)

The nextauth configuration is a custom oauth provider for pocketbase.

```bash
touch lib/authoptions.ts
```

8. ... missing instructions -- to be added...