'use strict';

/**
 * message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({strapi}) => {
    return {
        async create(ctx) {
            try {

                const {user} = ctx.state;
                const {text, receiver} = ctx?.request?.body;

                // const message = await strapi.entityService.create('api::message.message', {
                //     data: {
                //         text,
                //         sender: user.id,
                //         receiver
                //     },
                //     populate: '*'
                // });

                const response = await strapi.service('api::message.message').create({
                    data: {
                        text,
                        sender: user.id,
                        receiver
                    }, 
                    populate: '*' 
                });

                return response;
                
            } catch (error) {
                ctx.internalServerError('Internal Server Error');
            }
        },
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
