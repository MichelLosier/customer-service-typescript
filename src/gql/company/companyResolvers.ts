import { BaseCustomer } from "../../types/customer";
import { AppContext } from "../../types/app";

export const companyCustomers = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<BaseCustomer[] | null> => {
  const companies = await context.companies.getCompanyCustomers(parent.id);
  return companies;
};
