import { gql } from "apollo-server";

const customer = gql`
  "Represents a customer"
  type Customer {
    "The id of the customer"
    id: ID!
    "Represents a customer first name"
    firstName: String!
    "Represents a customer last name"
    lastName: String!
    "Represents the company a customer is associated with"
    company: Company!
  }

  "Represents the result of a customer search"
  type CustomerSearchResult {
    "The customers found from a search result"
    customers: [Customer]
    "The known errors producted in the search query"
    errors: [QueryError]
  }

  input CustomerSearchCriteria {
    "Partial match to customer first or last name"
    name: String
    "Additional Criteria to filter by"
    filter: CustomerSearchCriteriaFilter
  }

  "Represents the criteria to filter by in a customer search"
  input CustomerSearchCriteriaFilter {
    "Filter customers to only those associated with the company name"
    companyName: String
  }
`;

export default customer;
