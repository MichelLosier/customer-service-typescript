import { PrismaClient } from "@prisma/client";
import faker from "faker";
import { mockCompanyNames, mockCustomers } from "../src/tests/mocks";
import { BaseCustomer } from "../src/types/customer";

const prisma = new PrismaClient();

const getRandom = (arr: any[]) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

async function main() {
  const companies = await Promise.all(
    mockCompanyNames.map(async (companyName) => {
      return await prisma.company.upsert({
        where: { name: companyName },
        update: {},
        create: {
          name: companyName,
        },
      });
    })
  );

  const mockCustomersWithCompanies = mockCustomers.map((mockCustomer: any) => {
    mockCustomer.companyId = getRandom(companies).id;
    return mockCustomer;
  });

  const customers = [...mockCustomersWithCompanies];
  for (let i = 0; i < 1000; i++) {
    customers.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      companyId: getRandom(companies).id,
    });
  }

  await Promise.all(
    customers.map(async (customer) => {
      await prisma.customer.create({
        data: customer,
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
