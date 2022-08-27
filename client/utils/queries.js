import { gql } from '@apollo/client';

export const QUERY_CONTACTS= gql`
query Contacts {
contacts {
    _id
    contactname
    mobile
  }
}
`;