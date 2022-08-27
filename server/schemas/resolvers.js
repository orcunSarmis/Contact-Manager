const { AuthenticationError } = require('apollo-server-express');
const { Contact } = require('../models');

const resolvers = {

    Query: {
        contacts: async () => {
            return Contact.find();
        },

    }
};

module.exports = resolvers;