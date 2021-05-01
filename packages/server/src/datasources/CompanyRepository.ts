import { CompanyDataSource, BaseCompany } from "../types/company";
import { BaseCustomer } from "../types/customer";
import { PrismaClient } from "@prisma/client";

export default class CompanyRepository implements CompanyDataSource {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  //Prisma dataloader groups findUnique queries
  async getCompanyCustomers(companyId: number): Promise<BaseCustomer[] | null> {
    return this.db.company
      .findUnique({
        where: { id: companyId || undefined },
      })
      .customers();
  }

  async getCompanies(): Promise<BaseCompany[]> {
    return this.db.company.findMany({
      orderBy: {
        name: "desc",
      },
    });
  }
}
