import { gql } from "@apollo/client";

export const SearchCustomersAndIncludeCompanyName = gql`
  query SearchCustomersAndIncludeCompanyNames($name: String, $companyName: String) {
    getAllCompanies {
      errors {
        type
        message
      }
      companies {
        name
      }
    }
    searchCustomers(criteria: { name: $name, filter: { companyName: $companyName } }) {
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
