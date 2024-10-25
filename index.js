const fs = require("fs");
const http = require("http");

const config = JSON.parse(fs.readFileSync("./config.json"));

var basePath = config.templatesFolder;
var path = require('path');

http.createServer(function(req, res) {
    var stream = fs.createReadStream(path.join(basePath, req.url));
    stream.on('error', function() {
        if (fs.existsSync(path.join(basePath, "404.html"))) {
            fs.createReadStream(path.join(basePath, "404.html")).pipe(res);
        } else {
            res.write("<h1>404</h1>default 404 error");
            res.end();
        }
    });
    stream.pipe(res);
}).listen((config.port), () => {
    console.log(config.message);
    console.log("running at http://localhost:"+config.port);
});