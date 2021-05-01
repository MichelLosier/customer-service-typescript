import { BaseCompany, Company } from "./company";
import { QueryError } from "./graphql";

export interface BaseCustomer {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Customer extends BaseCustomer {
  company: Company;
}

export interface CustomerSearchResult {
  customers: BaseCustomer[];
  errors?: QueryError[];
}

export interface SearchCustomersArgs {
  criteria: CustomerSearchCriteria;
}

export interface CustomerSearchCriteria {
  name?: string;
  filter?: CustomerSearchCriteriaFilter;
}

export interface CustomerSearchCriteriaFilter {
  companyName?: string;
}

export interface CustomerDataSource {
  getCustomers(criteria?: CustomerSearchCriteria): Promise<BaseCustomer[]>;
  getCustomerCompany(customerId: number): Promise<BaseCompany | null>;
}
