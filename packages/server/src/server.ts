import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const PORT = 6001;

app.listen({ port: PORT }, () => {
  console.log(`Customer Service running at http://localhost:${PORT}`);
});
