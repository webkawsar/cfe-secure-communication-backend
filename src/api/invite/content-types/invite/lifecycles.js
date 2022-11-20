module.exports = {

    async afterCreate(event) {

        const { result } = event;

        try {

            await strapi.plugins["email"].services.email.send({
            to: `${result.email}`,
            subject: "Invitation to sign up",
            html: `
                <h2>Hey Guys!</h2>
                <p>You are invited to sign up for the CFE Secure Communication web application.</p>
                <P>Please click the below link and complete your sign-up process by using a token.</P>
                <h2>Your token is: ${result.token}</h2>
                <a href="https://facebook.com">Click the link</a>
                <h4>Thanks.</h4>
            `,
            });

        } catch (error) {

            console.log(error, 'error');
        }
    }

};
