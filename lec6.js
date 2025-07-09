console.log("START SCRIPT");

// async function fetchDataProducts(){
//     const data=await fetch('https://dummyjson.com/products');
//     const finalData=await data.json();
//     console.log(finalData);
// }

// fetchDataProducts();

// const promise =new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve ("I will complete assignment by 1 pm");
//     },3000)
// });

// async function checkAssignment(){
//     const assignmentData= await promise;
//     console.log(assignmentData);

// }
// checkAssignment();

// DOM- Document Object Model -hierichal structure
// Event capturing and event bubbling
// Event capturing-goes from top to bottom 
// Event bubbling-goes from bottom to top

//call(),apply() and bind()
//immediate invoke function
//we pass arguements normally
function admissionProcess(studentName, studentClass){
    console.log(` Hi ${studentName}, from Class :${studentClass}`);
}

const student1={
    studentName:"Sargam",
    studentClass:"G5",
}
const student2={
    studentName:"Shivi",
    studentClass:"G5",
}
admissionProcess(student1);
//apply() 
//we pass arguements normally

// bind()
// we call the function manually
// we do not pass array of arguments
const b1=admissionProcess.bind(student1,["Sargam","G5"]);
const b2=admissionProcess.bind(student2,["Shivi","G5"]);
