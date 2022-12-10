module.exports = {

    beforeCreate(event) {

        const { data, where, select, populate } = event.params;

        try {

            console.log(data, 'beforeCreate data')

        } catch (error) {

            console.log(error, 'error');
        }
    }

    

};
