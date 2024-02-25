// const x = 100;
// let result;

// if (x < 1000) {
//   result = "nhỏ hơn 1000";
// } else {
//   result = "lớn hơn hoặc bằng 1000";
// }

const x = 100;
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result);

// let variable1;
// let variable2 = "";

// if (variable1 !== null && variable1 !== undefined && variable1 !== "") {
//   variable2 = variable1;
// }
// console.log(variable2); 

let variable1;
let variable2 = variable1 || "";
console.log(variable2); 

