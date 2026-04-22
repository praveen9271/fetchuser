require("dotenv").config();
const http = require("http");

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Manish" },
  { id: 2, name: "Manraj" },
  { id: 3, name: "Praveen" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
  }
});

server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});