import dotenv from "dotenv";
dotenv.config();
import { customerDBClient } from "../databases";

afterAll(() => {
  customerDBClient.$disconnect();
});
