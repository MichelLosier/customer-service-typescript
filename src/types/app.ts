import { CustomerDataSource } from "../types/customer";
import { CompanyDataSource } from "../types/company";

export interface AppConfig {
  CUSTOMER_DB_ENDPOINT: string;
}

export interface AppContext {
  customers: CustomerDataSource;
  companies: CompanyDataSource;
}
