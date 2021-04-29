import { CustomerSearchResult, CustomerSearchResultErrorType, SearchCustomersArgs } from "../../types/customer";
import { BaseCompany } from "../../types/company";
import { AppContext } from "../../types/app";
import { isValidMaxSelectionDepth } from "../utils/validation";

export const searchCustomers = async (
  parent: any,
  args: SearchCustomersArgs,
  context: AppContext,
  info: any
): Promise<CustomerSearchResult> => {
  const maxSelectionPath = ["searchCustomers", "customers", "company", "customers", "company"];

  if (!isValidMaxSelectionDepth(info.fieldNodes, maxSelectionPath)) {
    return {
      customers: [],
      errors: [
        {
          type: CustomerSearchResultErrorType.MAX_RECURSIVE_SELECTION_DEPTH,
          message: "Max recursive selection reached. Modify your query to reduce unneccessary recursion.",
        },
      ],
    };
  }

  const customers = await context.customers.getCustomers(args.criteria);
  const searchResult = {
    customers: customers,
  };

  return searchResult;
};

export const customerCompany = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<BaseCompany | null> => {
  const company = await context.customers.getCustomerCompany(parent.id);
  return company;
};
