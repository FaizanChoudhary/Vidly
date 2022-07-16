// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://19f7a577a084465eb1af86607ed1abcc@o1304004.ingest.sentry.io/6543680",
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
