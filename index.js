//include http, fs and url module
var http = require('http'),
    fs = require('fs');
 
var dirdir = 'PATH_TO_INDEX.JS';

//create http server listening on port 80
http.createServer(function (req, res) {
    //use the url to parse the requested url and get the image name
    var urlq = req.url;
    var urlqs = urlq.substring(1);
 
    //read the image using fs and send the image content back in the response
    fs.readFile(dirdir + urlqs, function (err, content) {
        if (err) {
            //if the file don't exist, redirect mc to optifine website.
            res.writeHead(301, { "Location": "http://s.optifine.net" + req.url});
            res.end();
            
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/png'});
            res.end(content);
        }
    });
}).listen(3333);
console.log("Server running at http://localhost:3333/");