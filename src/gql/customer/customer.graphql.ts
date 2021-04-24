import { gql } from "apollo-server";

const customer = gql`
  "Represents a customer"
  type Customer {
    "Represents a customer first name"
    firstName: String!
    "Represents a customer last name"
    lastName: String!
    "Represents the company a customer is associated with"
    company: Company!
  }

  "Represents the result of a customer search"
  type CustomerSearchResult {
    "The customers"
    customers: [Customer]
  }
`;

export default customer;
