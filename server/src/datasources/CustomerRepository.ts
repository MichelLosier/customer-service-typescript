import { CustomerDataSource, BaseCustomer, CustomerSearchCriteria } from "../types/customer";
import { BaseCompany } from "../types/company";
import { PrismaClient } from "@prisma/client";

export default class CustomerRepository implements CustomerDataSource {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async getCustomers(criteria?: CustomerSearchCriteria): Promise<BaseCustomer[]> {
    const limit = 25;

    const query: any = {
      where: {},
      take: limit,
    };

    const nameMatchCondition = (name: string) => {
      return {
        OR: [
          {
            firstName: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: name,
              mode: "insensitive",
            },
          },
        ],
      };
    };

    if (criteria?.name) {
      Object.assign(query.where, nameMatchCondition(criteria.name));
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
