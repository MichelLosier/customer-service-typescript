import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SearchCustomersAndIncludeCompanyName } from "./queries";

const apolloClient = new ApolloClient({
  uri: `${window.location.origin}/graphql`,
  cache: new InMemoryCache(),
});

class CustomerService {
  constructor() {
    this.client = apolloClient;
  }

  async getCustomers() {
    const response = await this.client
      .query({
        query: SearchCustomersAndIncludeCompanyName,
      })
      .catch((error) => {
        console.error(`Error fetching customers: ${error.message}`);
        throw error;
      });
    return response;
  }
}

const customerService = new CustomerService();

export default customerService;
