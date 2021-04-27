import { gql } from "apollo-server";

const root = gql`
  type Query {
    "Search for customers"
    searchCustomers: CustomerSearchResult
  }
`;

export default root;
