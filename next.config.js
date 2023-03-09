const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  i18n :{
    localeDetection: false
  }
});
