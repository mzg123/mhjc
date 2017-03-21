const dns = require('dns');

//dns.lookup('nodejs.org', (err, addresses, family) => {
//    console.log('addresses:', addresses);
//});


//dns.resolve4('nodejs.org', (err, addresses) => {
//    if (err) console.log (err);
//
//    console.log(`addresses: ${JSON.stringify(addresses)}`);
//
//    addresses.forEach((a) => {
//        dns.reverse(a, (err, hostnames) => {
//            if (err) {
//                console.log (err);
//            }
//            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//        });
//    });
//});


dns.lookupService('127.0.0.1', 11, (err, hostname, service) => {
    console.log(hostname, service);
    // Prints: localhost ssh
});