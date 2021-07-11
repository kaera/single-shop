const http = require("http");
const data = require("./api/phone_feed");

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(data));
});
server.listen(5000);
