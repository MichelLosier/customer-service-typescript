import { BaseCustomer, Customer } from "./customer";
import { QueryError } from "./graphql";

export interface BaseCompany {
  name: string;
}

export interface Company extends BaseCompany {
  customers: Customer[];
}

export interface CompanyDataSource {
  getCompanyCustomers(companyId: number): Promise<BaseCustomer[] | null>;
  getCompanies(): Promise<BaseCompany[]>;
}

export interface GetAllCompaniesResult {
  companies: BaseCompany[];
  errors?: QueryError[];
}
