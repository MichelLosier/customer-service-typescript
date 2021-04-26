import { AppContext } from "../types/app";
import { customerDBClient } from "../databases";
import { CompanyRepository, CustomerRepository } from "../datasources";

const context: AppContext = {
  customers: new CustomerRepository(customerDBClient),
  companies: new CompanyRepository(customerDBClient),
};

export default context;
