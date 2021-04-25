import { CustomerDataSource } from "../types/customer";

export interface AppConfig {
  CUSTOMER_DB_ENDPOINT: string;
}

export interface AppContext {
  customers: CustomerDataSource;
}
