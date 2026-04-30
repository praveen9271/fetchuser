import dotenv from "dotenv";
import http from "http";
import users from "./users.js";

dotenv.config({ path: new URL(".env", import.meta.url) });

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
