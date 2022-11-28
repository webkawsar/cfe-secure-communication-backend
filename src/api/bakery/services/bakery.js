'use strict';

/**
 * bakery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bakery.bakery');
