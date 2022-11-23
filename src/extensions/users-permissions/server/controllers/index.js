'use strict';


const auth = require('./auth');
const user = require('@strapi/plugin-users-permissions/server/controllers/user');
const role = require('@strapi/plugin-users-permissions/server/controllers/role');
const permissions = require('@strapi/plugin-users-permissions/server/controllers/permissions');
const settings = require('@strapi/plugin-users-permissions/server/controllers/settings');
const contentmanageruser = require('@strapi/plugin-users-permissions/server/controllers/content-manager-user');

module.exports = {
  auth,
  user,
  role,
  permissions,
  settings,
  contentmanageruser,
};
