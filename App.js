var http = require("http");
var port = 8080;
var hostname = 'localhost';
var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h2>Hello World</h2>");
});
server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});