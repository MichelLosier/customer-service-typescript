import { BaseCustomer } from "../../types/customer";
import { GetAllCompaniesResult } from "../../types/company";
import { QueryErrorType } from "../../types/graphql";
import { AppContext } from "../../types/app";
import { isValidMaxSelectionDepth } from "../utils/validation";

export const companyCustomers = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<BaseCustomer[] | null> => {
  const companies = await context.companies.getCompanyCustomers(parent.id);
  return companies;
};

export const getAllCompanies = async (
  parent: any,
  args: any,
  context: AppContext,
  info: any
): Promise<GetAllCompaniesResult> => {
  const maxSelectionPath = ["getAllCompanies", "companies", "customers", "company"];

  if (!isValidMaxSelectionDepth(info.fieldNodes, maxSelectionPath)) {
    return {
      companies: [],
      errors: [
        {
          type: QueryErrorType.MAX_RECURSIVE_SELECTION_DEPTH,
          message: "Max recursive selection reached. Modify your query to reduce unneccessary recursion.",
        },
      ],
    };
  }

  const companies = await context.companies.getCompanies();
  return {
    companies: companies,
  };
};
