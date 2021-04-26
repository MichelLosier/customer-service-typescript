import { CustomerDataSource, BaseCustomer } from "../types/customer";
import { DatabaseClient } from "../types/databases";

export default class CustomerRepository implements CustomerDataSource {
  private db: DatabaseClient<BaseCustomer>;

  constructor(db: DatabaseClient<BaseCustomer>) {
    this.db = db;
  }

  async getCustomers(): Promise<BaseCustomer[]> {
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
