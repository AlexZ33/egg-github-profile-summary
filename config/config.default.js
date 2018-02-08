'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1518084734516_1425';

  // add your config here
  config.middleware = [];

  //vue
  config.view = {
    defaultViewEngine: 'vue',
    mapping: {
      '.js': 'vue',
    },
  };


  config.vue = {
    cache: {
      max: 1000,
      maxAge: 1000 * 3000 * 24 * 7,
    },
  };

  return config;
};
