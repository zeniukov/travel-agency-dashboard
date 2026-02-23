import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
Sentry.init({
  dsn: "https://1a7e6408bd84925e4d94762c74bb6f40@o4510884038508544.ingest.us.sentry.io/4510884142448640",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // Enable logs to be sent to Sentry
  enableLogs: true,
  // Add our Profiling integration
  integrations: [nodeProfilingIntegration()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#tracesSampleRate
  tracesSampleRate: 1.0,
  // Enable profiling for a percentage of sessions
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#profileSessionSampleRate
  profileSessionSampleRate: 1.0,
});
