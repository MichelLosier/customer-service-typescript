import app from "../../app";
import supertest from "supertest";
import queries from "./queries";
import { Customer, CustomerSearchResultErrorType } from "../../types/customer";

describe("/graphql: searchCustomers", () => {
  it("should provide a list of 25 customers", async () => {
    const payload = {
      query: queries.searchCustomers.searchCustomers,
    };

    const response = await supertest(app).post("/graphql").send(payload);

    expect(response.status).toEqual(200);
    const { customers } = response.body.data.searchCustomers;
    expect(customers.length).toBe(25);
  });

  it("should provde the company of each customer if queried", async () => {
    const payload = {
      query: queries.searchCustomers.searchCustomersWithCompany,
    };

    const response = await supertest(app).post("/graphql").send(payload);

    expect(response.status).toEqual(200);
    const { customers } = response.body.data.searchCustomers;

    customers.forEach((customer: Customer) => {
      expect(customer.company.name).toBeTruthy();
    });
  });

  it("Selecting max recursive depth should return an error", async () => {
    const payload = {
      query: queries.searchCustomers.searchCustomersFullDepth,
    };

    const response = await supertest(app).post("/graphql").send(payload);

    expect(response.status).toEqual(200);
    const { customers, errors } = response.body.data.searchCustomers;

    customers.forEach((customer: Customer) => {
      expect(customers.length).toBe(0);
      expect(errors[0].type).toBe(CustomerSearchResultErrorType.MAX_RECURSIVE_SELECTION_DEPTH);
    });
  });
});
