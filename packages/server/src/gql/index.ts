import root from "./root.graphql";
import { company, companyResolvers } from "./company";
import { customer, customerResolvers } from "./customer";
export { default as context } from "./context";

const resolvers = {
  Query: {
    searchCustomers: customerResolvers.searchCustomers,
    getAllCompanies: companyResolvers.getAllCompanies,
  },
  Customer: {
    company: customerResolvers.customerCompany,
  },
  Company: {
    customers: companyResolvers.companyCustomers,
  },
  QueryError: {
    __resolveType: () => "BasicQueryError", // false is temporary until a type actually extends from this interface
  },
};

export const graph = {
  typeDefs: [root, company, customer],
  resolvers: resolvers,
};
