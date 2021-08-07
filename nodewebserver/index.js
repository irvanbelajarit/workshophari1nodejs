const http = require("http");
const fs = require("fs");
const path = require("path");

const { runInNewContext } = require("vm");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   //res.write("hello world webserver node");

//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("file tidak ditemukan");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// });

server.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}...`);
});
