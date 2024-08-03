# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

you will also need to set up firebase

make a new firebase project

copy the config object and paste it in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    `nuxt-vuefire`,
  ],

  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: ...,
      authDomain: ...,
      projectId: ...,
      storageBucket: ...,
      messagingSenderId: ...,
      appId: ...,
      measurementId: ... 
    },
  },
})
```
You will also need to set up authentication to google (this project relies on redirects) and a firestore database, which can be set up in the firebase console. You will also need to download the service account JSON which can be accessed in the service account tab of your project settings and clicking `generate new private key` save the JSON file and create a copy, rename the copy to `service-account.json` and putting it in the root directory.

then add a `.env` file in the root directory and add the following

```
GOOGLE_APPLICATION_CREDENTIALS=service-account.json
```

your app should now be ready to run into development mode...

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
