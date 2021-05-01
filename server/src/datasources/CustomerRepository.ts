import { CustomerDataSource, BaseCustomer, CustomerSearchCriteria } from "../types/customer";
import { BaseCompany } from "../types/company";
import { PrismaClient } from "@prisma/client";

import queryFragments from "./queryFragments";

export default class CustomerRepository implements CustomerDataSource {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async getCustomers(criteria?: CustomerSearchCriteria): Promise<BaseCustomer[]> {
    let defaultLimit = 25;
    const { nameMatchCondition, filterCondition } = queryFragments.customer;

    const query: any = {
      where: {},
      take: defaultLimit,
    };

    if (criteria?.name) {
      Object.assign(query.where, nameMatchCondition(criteria.name));
    }

    if (criteria?.filter?.companyName) {
      Object.assign(query.where, filterCondition(criteria.filter.companyName));
    }

    return await this.db.customer.findMany(query);
  }

  //Prisma dataloader groups findUnique queries
  async getCustomerCompany(customerId: number): Promise<BaseCompany | null> {
    return this.db.customer
      .findUnique({
        where: { id: customerId || undefined },
      })
      .company();
  }
}
