const { AuthenticationError } = require('apollo-server-express');
const { Contact } = require('../models');

const resolvers = {

    Query: {
        contacts: async () => {
            return Contact.find();
        },
        contact: async (parent, args, context) => {
            if (context.contact) {
                const contactData = await Contact.findOne({_id: context.contact._id, 
                    contactname: context.contact.contactname, 
                    mobile: context.contact.mobile});
                
                return contactData;
            }
        }

    },

    Mutation: {
        addContact: async (parent, { contactname, mobile }) => {
            const contact = await Contact.create({ contactname, mobile });
            return {contact};
        },
    }
};

module.exports = resolvers;