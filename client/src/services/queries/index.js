import { gql } from "@apollo/client";

export const SearchCustomersAndIncludeCompanyName = gql`
  query SearchCustomersAndIncludeCompanyNames {
    searchCustomers {
      errors {
        type
        message
      }
      customers {
        firstName
        lastName
        company {
          name
        }
      }
    }
  }
`;
