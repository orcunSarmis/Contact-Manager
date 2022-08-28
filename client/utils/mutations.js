import { gql } from '@apollo/client';

export const UPDATE_CONTACT = gql`
mutation updateContact($contactname: String!, $mobile: Int!) {
    updateContact(contactname: $contactname, mobile: $mobile) {
    token
    contact {
      _id
      contactname
      mobile
    }
  }
}`;

export const ADD_CONTACT = gql`
mutation addContact($contactname: String!, $mobile: Int!){
  addContact(contactname: $contactname, mobile: $mobile) {
    contact {
      _id
      contactname
      mobile
    }
  }
}`;

export const REMOVE_CONTACT = gql`
  mutation removeContact($contactId: ID!) {
    removeContact(contactId: contactId) {
      _id
      contactname
      mobile
    }
  }`;