import { customer } from "../../types";

export const customerSearch = async (
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<customer.CustomerSearchResult> => {
  const searchResult = {
    customers: [
      {
        firstName: "Jim",
        lastName: "Crispy",
        company: {
          name: "Crispy Co.",
          customers: [],
        },
      },
    ],
  };
  return searchResult;
};
