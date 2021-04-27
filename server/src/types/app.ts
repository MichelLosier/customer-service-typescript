import { CustomerDataSource } from "./customer";
import { CompanyDataSource } from "./company";

export interface AppConfig {
  CUSTOMER_DB_ENDPOINT: string;
}

export interface AppContext {
  customers: CustomerDataSource;
  companies: CompanyDataSource;
}
