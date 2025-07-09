// Higher order function
// function calculate(logicFunction,a,b){
//     return logicFunction(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }
// console.log(add,3,5);
// console.log(sub,8,5);

function studentDetails(name,fees){
    const emiAmount=emi(fees);
    return welcome(name,fees,emiAmount);
}
function emi(fees){
    return fees/10;
}
function welcome(name,fees,emiAmount){
    return `${name} with fees of ${fees} and emi of ${emiAmount}`;
}

console.log(studentDetails("Sargam",40000));

//setTimeOut