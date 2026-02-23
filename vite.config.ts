import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-upc",
  project: "travel-agency",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  // authToken: process.env.SENTRY_AUTH_TOKEN,
  // authToken: import.meta.env.SENTRY_AUTH_TOKEN,
  authToken:
    "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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
      tsconfigPaths(),
    ],
    ssr: {
      noExternal: [/@syncfusion/],
    },
    // server: {
    //   host: "127.0.0.1",
    //   port: 5173,
    // },
  };
});
