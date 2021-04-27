import { BaseCompany, Company } from "./company";

export interface BaseCustomer {
  firstName: string;
  lastName: string;
}

export interface Customer extends BaseCustomer {
  company: Company;
}

export interface CustomerSearchResult {
  customers: BaseCustomer[];
  errors?: CustomerSearchResultError[];
}

export interface SearchCustomersArgs {
  criteria: CustomerSearchCriteria;
}

export interface CustomerSearchCriteria {
  name?: string;
}

export interface CustomerDataSource {
  getCustomers(criteria?: CustomerSearchCriteria): Promise<BaseCustomer[]>;
  getCustomerCompany(customerId: number): Promise<BaseCompany | null>;
}

export interface CustomerSearchResultError {
  type: CustomerSearchResultErrorType;
  message: string;
}

export enum CustomerSearchResultErrorType {
  MAX_RECURSIVE_SELECTION_DEPTH = "MAX_RECURSIVE_SELECTION_DEPTH",
}
