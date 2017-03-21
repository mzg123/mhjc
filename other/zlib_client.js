const zlib = require('zlib');
const http = require('http');
const fs = require('fs');
const request = http.get({ host: '10.0.130.129',
    path: '/',
    port: 1337,
    headers: { 'Accept-Encoding': 'gzip,deflate' } });
request.on('response', (response) => {
    var output = fs.createWriteStream('example.com_index.html');

    switch (response.headers['content-encoding']) {
        // or, just use zlib.createUnzip() to handle both cases
        case 'gzip':
            response.pipe(zlib.createGunzip()).pipe(output);
            break;
        case 'deflate':
            response.pipe(zlib.createInflate()).pipe(output);
            break;
        default:
            response.pipe(output);
            break;
    }
});