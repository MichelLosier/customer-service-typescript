import { CustomerDataSource, Customer } from "../types/customer";
import { DatabaseClient } from "../types/databases";

export default class CustomerRepository implements CustomerDataSource {
  private db: DatabaseClient<Customer>;

  constructor(db: DatabaseClient<Customer>) {
    this.db = db;
  }

  async getCustomers(): Promise<Customer[]> {
    const limit = 25;
    return await this.db.findMany({
      include: {
        company: {
          include: {
            customers: true,
          },
        },
      },
      take: limit,
    });
  }
}
