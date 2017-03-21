const zlib = require('zlib');
const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    var raw = fs.createReadStream('zip.js');
    var acceptEncoding = request.headers['accept-encoding'];
    if (!acceptEncoding) {
        acceptEncoding = '';
    }

    // Note: this is not a conformant accept-encoding parser.
    // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3  deflate
    if (acceptEncoding.match(/\bdeflate\b/)) {
        response.writeHead(200, { 'Content-Encoding': 'deflate' });
        raw.pipe(zlib.createDeflate()).pipe(response);
    } else if (acceptEncoding.match(/\bgzip\b/)) {
        response.writeHead(200, { 'Content-Encoding': 'gzip' });
        raw.pipe(zlib.createGzip()).pipe(response);
    } else {
        response.writeHead(200, {});
        raw.pipe(response);
    }
}).listen(1337,'10.0.130.129');