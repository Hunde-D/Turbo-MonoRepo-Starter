import { config } from "dotenv";
import { createServer } from "./server";
config({ path: ".env" });
const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
