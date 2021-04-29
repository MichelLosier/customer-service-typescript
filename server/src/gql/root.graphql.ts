import { gql } from "apollo-server";

const root = gql`
  type Query {
    "Search for customers"
    searchCustomers(criteria: CustomerSearchCriteria): CustomerSearchResult
  }
`;

export default root;
