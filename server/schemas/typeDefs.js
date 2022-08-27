const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Contact {
    _id: ID
    contactname: String
    mobile: Int
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    updateContact(contactname: String!,mobile:Int!): Contact
  }
  `;

module.exports = typeDefs;