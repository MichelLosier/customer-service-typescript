import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerList from "./CustomerList";

describe("CustomerList", () => {
  test("when provided a list of customers it renders a list", () => {
    const customersMock = [
      {
        firstName: "John",
        lastName: "Keats",
        company: {
          name: "Puppy Co.",
        },
      },
      {
        firstName: "Lila",
        lastName: "Bloom",
        company: {
          name: "Kitty Co.",
        },
      },
    ];

    const { getByText } = render(<CustomerList customers={customersMock} />);

    customersMock.forEach((customer) => {
      getByText(`${customer.firstName} ${customer.lastName}`);
      getByText(`${customer.company.name}`);
    });
  });
});
