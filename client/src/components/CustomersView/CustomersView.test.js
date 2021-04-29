import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CustomersView from "./CustomersView";
import {
  mockCustomerService,
  mockGetCustomersResponseWithQueryError,
  mockGetCustomersResponseWithSearchError,
  mockGetCustomersResponse,
} from "./CustomersView.mocks";

import { createMemoryHistory } from "history";
import { Router, Route } from "react-router";

describe("CustomersView", () => {
  describe("Error Handling", () => {
    test("It should display the error message of a query level error", async () => {
      const customerService = mockCustomerService(mockGetCustomersResponseWithQueryError);
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <Route
            path="*"
            render={({ history, location }) => {
              return <CustomersView customerService={customerService} history={history} location={location} />;
            }}
          />
        </Router>
      );
      await screen.findByText(mockGetCustomersResponseWithQueryError.errors[0].message);
    });

    test("It should display the error message of a search level error", async () => {
      const customerService = mockCustomerService(mockGetCustomersResponseWithSearchError);
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Route
            path="*"
            render={({ history, location }) => {
              return <CustomersView customerService={customerService} history={history} location={location} />;
            }}
          />
        </Router>
      );

      await screen.findByText(mockGetCustomersResponseWithSearchError.data.searchCustomers.errors[0].message);
    });
  });

  describe("Search", () => {
    test("Search field input should update history, and be received back through location the prop", async () => {
      const history = createMemoryHistory();
      const customerService = mockCustomerService(mockGetCustomersResponse);
      render(
        <Router history={history}>
          <Route
            path="*"
            render={({ history, location }) => {
              return <CustomersView customerService={customerService} history={history} location={location} />;
            }}
          />
        </Router>
      );

      const searchField = await screen.findByRole("searchbox");

      const mockInput = "banana";
      userEvent.type(searchField, mockInput);
      const searchParams = new URLSearchParams(history.location.search).get("search");
      expect(searchParams).toBe(mockInput);
    });

    test("Search field input should trigger a customerService query with expected criteria", async () => {
      const history = createMemoryHistory();
      const customerService = mockCustomerService(mockGetCustomersResponse);
      const querySpy = jest.fn(customerService.getCustomers);
      customerService.getCustomers = querySpy;
      render(
        <Router history={history}>
          <Route
            path="*"
            render={({ history, location }) => {
              return <CustomersView customerService={customerService} history={history} location={location} />;
            }}
          />
        </Router>
      );

      const searchField = await screen.findByRole("searchbox");

      const mockInput = "banana";
      userEvent.type(searchField, mockInput);

      await waitFor(
        () => {
          expect(querySpy).toHaveBeenCalledWith({
            name: mockInput,
          });
        },
        {
          timeout: 2000,
        }
      );
    });
  });
});
