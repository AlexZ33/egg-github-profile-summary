'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { api ,home} = controller;
  router.get('/', home.index);
  router.get('/api', api.index);
};
