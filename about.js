import fs from "fs";
import url from "url";
import http from "http";

http
  .createServer((req, res) => {
    
    const q = url.parse(req.url, true);

    const fileName = "." + q.pathname;

    console.log(fileName);
    console.log(req.headers.pathname);

    fs.readFile(fileName, (err, file) => {
      if (err) {
        res.writeHead(400, { "Content-Type": "text/html" });
        return res.end("404 page not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(file);
        return res.end();
      }
    });
  })
  .listen(60000, console.log("Welcome"));
