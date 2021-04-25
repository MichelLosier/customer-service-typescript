import { Company } from "./company";

export interface Customer {
  firstName: string;
  lastName: string;
}

export interface CustomerSearchResult {
  customers: Customer[];
}

export interface CustomerDataSource {
  getCustomers(): Promise<Customer[]>;
}
