// PROTOTYPE
// console.log("START SCIRPT");

// let arr=[2,4,5,6,7,8];

// // const newArr=arr.map((x) =>{x*2});

// // console.log(newArr);

// function doubleData(x){
//     return x*x;
// }

// Array.prototype.mapReplica = function(logic) {
//      let outputArray=[]
//      for(let i=0;i<this.length;i++){
//          outputArray.push(logic(this[i]));
//         // outputArray.push(logic(arr[i]));
//      }
//      return outputArray;
// }
// const myPrototype=arr.mapReplica(doubleData);
// console.log(myPrototype);

//FILTER

// const words=["spray","elite","destruction","present"];
// const result=words.map((word) => word.length>6);
// console.log(result);

// Array.prototype.filterReplica = function (logic) {
//     const outputArray = [];
//     for (let i = 0; i < this.length; i++) {
//     if (logic(this[i])) {
//         outputArray.push(this[i]);
//     }
// }
//     return outputArray;
// };
// function isEven(x) {
//     return x % 2 === 0;
// }
// const myFilter = arr.filterReplica(isEven);
// console.log(myFilter);

//reduce 
// param1-callback
// param2-initialValue
//accumulator- store resulting value
const array1=[1,2,3,4];
const initialValue=0;
const sumWithInitial=array1.reduce(
    (accumulator,currentValue) => accumulator+currentValue,
    initialValue,
    )
console.log(sumWithInitial);

