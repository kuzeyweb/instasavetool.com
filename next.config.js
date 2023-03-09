const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  i18n :{
    localeDetection: false,
  },
  env: {
    NEXT_APP_PUBLIC_URL: process.env.NEXT_APP_PUBLIC_URL,
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  },
});
