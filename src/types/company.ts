import { BaseCustomer, Customer } from "./customer";

export interface BaseCompany {
  name: string;
}

export interface Company extends BaseCompany {
  customers: Customer[];
}

export interface CompanyDataSource {
  getCompanyCustomers(companyId: number): Promise<BaseCustomer[] | null>;
}
