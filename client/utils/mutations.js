import { gql } from '@apollo/client';

export const UPDATE_CONTACT = gql`
mutation UpdateContact($contactname: String!, $mobile: Number!) {
    updateContact(contactname: $contactname, mobile: $mobile) {
    token
    contact {
      _id
      contactname
      mobile
    }
  }
}`