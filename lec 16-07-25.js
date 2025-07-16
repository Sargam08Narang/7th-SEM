// const { pbkdf2Sync } = require('crypto');

// console.log("START SCRIPT");

// var a = 200;
// console.log(a);

// const key2 = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// console.log("Derived Key (hex):", key2.toString('hex'));

//we can increase thread pool size in mac not in windows
//Terminal Set UV_THREAD POOL_SIZE=10

//libuv default size is 4
//node js is single threaded . event- driven architecture

// SetImmediate and processNextTick

// processNextTick fires immediately 
// SetImmediate-follows iteraton or tic of the event loop

// var a=200;
// console.log(a);

// function hello(){
//     console.log("HELLO");
// }
// hello();

// var b=300;
// setImmediate(() =>{
//     console.log("SET IMMEDIATE");
// });
// console.log(b);
// console.log("END SCRIPT");

// process.nextTick(()=>{
//     console.log("This is nextTick");
// });

const https = require('node:https');
const { readFile } = require('node:fs');

https.get('https://encrypted.google.com/', (res) => {
    console.log("This is an API data");
});

setImmediate(() => {
    console.log("SET IMMEDIATE");
});

process.nextTick(() => {
    console.log("This is nextTick");
});

console.log("HELLO");

readFile('/etc/passwd', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File data:", data.toString());
    }
});
