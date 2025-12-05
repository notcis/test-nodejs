import "dotenv/config";
import { createServer } from "http";
import app from "./app.js";

const PORT = process.env.PORT || process.env.APP_PORT || 3000;

const server = createServer(app);
server.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT}`);
});
