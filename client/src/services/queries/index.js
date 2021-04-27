import { gql } from "@apollo/client";

export const SearchCustomersAndIncludeCompanyName = gql`
  query SearchCustomersAndIncludeCompanyNames($name: String) {
    searchCustomers(criteria: { name: $name }) {
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
