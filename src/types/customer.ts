import { Company } from "./company";

export interface Customer {
  firstName: string;
  lastName: string;
  company: Company;
}

export interface CustomerSearchResult {
  customers: Customer[];
}
