import { PrismaClient } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

const mockCompanyNames = [
  "Door Knobs Inc.",
  "Fantastic Plants Ltd.",
  "Amalgamated Puppy Treats",
  "Luxury Kitty Campers Inc.",
  "AAA Marbles",
  "Crispy Snacks and Soft Drinks Co.",
  "Zippy Automotive",
  "LightCity Manufacturing",
  "Bitmetric Labs",
  "Microdynamics",
];

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

  const customers = [];
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
