import { CustomerSearchResult, CustomerSearchResultError, CustomerSearchResultErrorType } from "../../types/customer";
import { AppContext } from "../../types/app";
import { isValidMaxSelectionDepth } from "../utils/validation";

export const customerSearch = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<CustomerSearchResult> => {
  const maxSelectionPath = ["searchCustomers", "customers", "company", "customers", "company"];

  if (!isValidMaxSelectionDepth(info.fieldNodes, maxSelectionPath)) {
    console.log("max selection violated");
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

  const customers = await context.customers.getCustomers();
  const searchResult = {
    customers: customers,
  };

  return searchResult;
};
