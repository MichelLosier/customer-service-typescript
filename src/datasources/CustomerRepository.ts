import { CustomerDataSource, BaseCustomer } from "../types/customer";
import { BaseCompany } from "../types/company";
import { PrismaClient } from "@prisma/client";

export default class CustomerRepository implements CustomerDataSource {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async getCustomers(): Promise<BaseCustomer[]> {
    const limit = 25;
    return await this.db.customer.findMany({
      take: limit,
    });
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
