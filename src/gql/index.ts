import root from "./root.graphql";
import { company } from "./company";
import { customer, customerResolvers } from "./customer";
export { default as context } from "./context";

const resolvers = {
  Query: {
    searchCustomers: customerResolvers.customerSearch,
  },
};

export const graph = {
  typeDefs: [root, company, customer],
  resolvers: resolvers,
};
