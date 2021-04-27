import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import CustomersView from "./CustomersView";
import {
  mockCustomerService,
  mockGetCustomersResponseWithQueryError,
  mockGetCustomersResponseWithSearchError,
} from "./CustomersView.mocks";

describe("CustomersView", () => {
  describe("Error Handling", () => {
    test("It should display the error message of a query level error", async () => {
      const customerService = mockCustomerService(mockGetCustomersResponseWithQueryError);
      render(<CustomersView customerService={customerService} />);
      await screen.findByText(mockGetCustomersResponseWithQueryError.errors[0].message);
    });

    test("It should display the error message of a search level error", async () => {
      const customerService = mockCustomerService(mockGetCustomersResponseWithSearchError);
      render(<CustomersView customerService={customerService} />);

      await screen.findByText(mockGetCustomersResponseWithSearchError.data.searchCustomers.errors[0].message);
    });
  });
});
