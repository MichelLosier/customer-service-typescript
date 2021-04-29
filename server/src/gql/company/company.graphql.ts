import { gql } from "apollo-server";

const company = gql`
  "Represents a company customers can be associated with"
  type Company {
    "Represents the name of the company"
    name: String!
    "Collection of customers associated with the company"
    customers: [Customer]
  }

  "Represents the result of a get all companies query"
  type GetAllCompaniesResult {
    companies: [Company]
    errors: [QueryError]
  }
`;

export default company;
