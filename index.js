const fs = require("fs");
const http = require("http");

var path = require('path');

const komikos = (port,templatePath,callback) => {
    http.createServer(function(req, res) {
        var stream = fs.createReadStream(path.join(templatePath, req.url));
        stream.on('error', function() {
            if (fs.existsSync(path.join(templatePath, "404.html"))) {
                fs.createReadStream(path.join(templatePath, "404.html")).pipe(res);
            } else {
                res.write("<h1>404</h1>default 404 error");
                res.end();
            }
        });
        stream.pipe(res);
    }).listen((port), callback);
}

module.exports = komikos