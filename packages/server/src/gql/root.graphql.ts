import { gql } from "apollo-server";

const root = gql`
  type Query {
    "Search for customers"
    searchCustomers(criteria: CustomerSearchCriteria): CustomerSearchResult
    "List all customer companies"
    getAllCompanies: GetAllCompaniesResult
  }

  "Represents a known typed error from a query"
  interface QueryError {
    "The type of error encountered"
    type: QueryErrorType!
    "Message with additional detail on the error"
    message: String!
  }

  "Base implementation of QueryError"
  type BasicQueryError implements QueryError {
    "The type of error encountered"
    type: QueryErrorType!
    "Message with additional detail on the error"
    message: String!
  }

  "Enumerates the known error types for queries"
  enum QueryErrorType {
    MAX_RECURSIVE_SELECTION_DEPTH
  }
`;

export default root;
