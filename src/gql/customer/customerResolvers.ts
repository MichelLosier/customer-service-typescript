import { CustomerSearchResult } from "../../types/customer";
import { AppContext } from "../../types/app";

export const customerSearch = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<CustomerSearchResult> => {
  const customers = await context.customers.getCustomers();
  const searchResult = {
    customers: customers,
  };
  return searchResult;
};
