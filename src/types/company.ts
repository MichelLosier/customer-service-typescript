import { Customer } from "./customer";

export interface BaseCompany {
  name: string;
}

export interface Company extends BaseCompany {
  customers: Customer[];
}
