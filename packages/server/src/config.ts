import { AppConfig } from "./types";

const config: AppConfig = {
  CUSTOMER_DB_ENDPOINT: process.env["CUSTOMER_DB_ENDPOINT"] || "",
};

export default config;
