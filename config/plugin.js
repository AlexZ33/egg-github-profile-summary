'use strict';

// Static server
exports.static = true;

// Security
exports.security = true;

// CORS
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

//Vue
exports.vue = {
  enable: true,
  package: 'egg-view-vue',
};
