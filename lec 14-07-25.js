//Node js : Javascript runtime environment
// we can integrate node.js wth any c++ program
// browser v8 engine local storage,session storage and setTimeout
// Node.js v8 engine - also have a library libuv can't connect database
// database extract through http methods
//pop3 response of mail
//udp used in video call and game stream 

console.log("SCRIPT JS");
const {sumOfTwo,xy}=require("./sumOfTwo");
//CALCULATOR
//console.log(xy);
//var xy=3000;
function sumOfTwo(a,b){
    console.log(a+b);
    return a+b;
}


function mulOfTwo(a,b){
    console.log(a*b);
    return a*b;
}


function divOfTwo(a,b){
    console.log(a/b);
    return a/b;
}
console.log("XY",xy);
sumOfTwo(10,20);
mulOfTwo(10,20);
divOfTwo(10,20);