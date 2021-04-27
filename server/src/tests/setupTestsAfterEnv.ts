import { customerDBClient } from "../databases";

afterAll(() => {
  customerDBClient.$disconnect();
});
