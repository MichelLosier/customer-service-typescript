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
    errors: [CustomerSearchResultError]
  }

  "Represents an error from a customer search"
  type CustomerSearchResultError {
    "The type of error encountered"
    type: CustomerSearchResultErrorType!
    "Message with additional detail on the error"
    message: String!
  }

  "Enumerates the error types from a customer search"
  enum CustomerSearchResultErrorType {
    MAX_RECURSIVE_SELECTION_DEPTH
  }

  input CustomerSearchCriteria {
    "Partial match to first or last name"
    name: String
  }
`;

export default customer;
