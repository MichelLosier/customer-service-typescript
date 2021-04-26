import root from "./root.graphql";
import { company, companyResolvers } from "./company";
import { customer, customerResolvers } from "./customer";
export { default as context } from "./context";

const resolvers = {
  Query: {
    searchCustomers: customerResolvers.customerSearch,
  },
  Customer: {
    company: customerResolvers.customerCompany,
  },
  Company: {
    customers: companyResolvers.companyCustomers,
  },
};

export const graph = {
  typeDefs: [root, company, customer],
  resolvers: resolvers,
};
