'use strict';

/**
 * message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({strapi}) => {
    return {
        async findOne(ctx) {

            try {

                const {id} = ctx.params;
                const {user:{username}} = ctx.state;
                const messages = await strapi.entityService.findMany('api::message.message', {
                    populate: '*',
                });

                const filteredMessages = messages.filter(m => {

                    return (m?.sender?.username === username && m?.receiver?.username === id) || 
                    (m?.sender?.username === id && m?.receiver?.username === username)
                });

                return filteredMessages;
                
            } catch (error) {
                ctx.internalServerError('Internal Server Error');
            }
        }
    }
});
