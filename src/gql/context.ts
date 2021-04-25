import { AppContext } from "../types/app";
import { customerDBClient } from "../databases";
import { CustomerRepository } from "../datasources";

const context: AppContext = {
  customers: new CustomerRepository(customerDBClient.customer),
};

export default context;
