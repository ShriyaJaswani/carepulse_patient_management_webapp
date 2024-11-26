// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f394bc3afcacf6e9524c61fd12c7f1e6@o4508365772816384.ingest.de.sentry.io/4508365775306832",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
