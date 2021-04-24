import root from "./root.graphql";
import { company } from "./company";
import { customer, customerResolvers } from "./customer";

const resolvers = {
  Query: {
    searchCustomers: customerResolvers.customerSearch,
  },
};

const graph = {
  typeDefs: [root, company, customer],
  resolvers: resolvers,
};

export default graph;
