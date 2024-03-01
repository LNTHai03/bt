                                    /**/
// const x = 100;
// let result;

// if (x < 1000) {
//   result = "nhỏ hơn 1000";
// } else {
//   result = "lớn hơn hoặc bằng 1000";
// }

// const x = 100;
// const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
// console.log(result);
                                    /**/
// let variable1;
// let variable2 = "";

// if (variable1 !== null && variable1 !== undefined && variable1 !== "") {
//   variable2 = variable1;
// }
// console.log(variable2); 

// let variable1;
// let variable2 = variable1 || "";
// console.log(variable2); 

//                                     /**/
// function loopWithScientificNotation() {
//   for (let i = 0; i < 1e5; i++) {
//   }
// }
// loopWithScientificNotation();

//                                     /**/
// const x = 1 ,y = 2;

// const obj = {
//     x: x,
//     y: y,
// };
//                                     /**/
// Rút gọn định nghĩa function (Sử dụng arrow function)
// function sayHello(name) { console.log('Hello', name); }
// setTimeout(function() { console.log('Loaded'); }, 2000);
// list.forEach(function(item) { console.log(item); });

// sayHello = name => console.log('Hello', name);
// setTimeout(() => console.log('Loaded'), 2000);
// list.forEach(item => console.log(item));
// // Implicit return (ẩn return đi bằng arrow function)
// function getValue(ratio) { 
//     return ratio * 6.9; 
// }
// getValue = ratio => ratio * 6.9;                                    
//                                     /**/
//  // Set default value for parameter in function
// function getValue(a, b, c) {
//     if (a === undefined) a = 3;
//     if (b === undefined) b = 4;
//     return a * b + c;
//   }
  
//   getValue = (a, b = 3, c = 4) => (a * b + c);
//                                      /**/                                   
// const welcome = 'You have logged in as ' + first + ' ' + last + '. ';
// const welcome = `You have logged in as ${first} ${last}.`;

// const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t' 
// + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t' 
// + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t' 
// + 'veniam, quis nostrud exercitation ullamco laboris\n\t' 
// + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t' 
// + 'irure dolor in reprehenderit in voluptate velit esse. \n\t';

// const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.`;
//                                     /**/
// const action = require('lib/action');
// const service = require('lib/service');

// const form = this.props.form;
// const errors = this.props.errors;
// const entity = this.props.entity;
// const controller = this.props.controller;
// const component = this.props.component;

// // Destructuring Assignment	
// import { action, service } from 'lib';
// const { form, errors, entity, controller, component } = this.props;
//                                     /**/   
// // joining arrays  
// const odd = [1, 3, 5];
//  const nums = [2 , 4 , 6] . concat (odd) ;
// // cloning arrays 
// const arr = [1, 2, 3, 4];
//  const arr2 = arr. slice()

// // joining arrays
//  const odd = [1, 3, 5 ];
//   const nums = [2 , 4 , 6, . . . odd];
// // cloning arrays
//  const arr = [1, 2, 3, 4];
// const arr2 = [ . . . arr];
// // 
// const odd = [1, 3, 5 ]; const nums = [2, ... odd, 4 , 6];
//                                     /**/
// // Constraint Param
// function sample(param1) {
//     if (param1 === undefined) {
//         throw new Error('Thiếu tham số!');
//     }
//     return param1;
// }

// mandatory = () => { throw new Error('Thiếu tham số!'); }
// sample = (param1 = mandatory()) => param1;
//                                     /**/
// // Find() in arrays
// const employees = [
//     { name: 'Emp A', age: 25 },
//     { name: 'Emp B', age: 28 },
//     { name: 'Emp C', age: 35 }
// ];

// const name = 'Emp A';
// emp = employees.find(item => item.name === name);

// function findEmp(name) {
//     for (let i = 0; i < employees.length; ++i) {
//         if (employees[i].name === name) {
//             return employees[i];
//         }
//     }
// }

// const name = 'Emp A';
// emp = findEmp(name);
//                                     /**/
// Object[key]
// function validate(fullName) {
//     if (!fullName.firstName) return false;
//     if (!fullName.lastName) return false;
//     return true;
// }

// console.log(validate({ firstName: 'Duy', lastName: 'Buffet' })); // true
//                                     /**/
// // Object[key]
// const rule = {
//     firstName: { required: true },
//     lastName: { required: true }
// };

// const validate = (rule, values) => {
//     for (prop in rule) {
//         if (rule[prop].required) {
//             if (!values[prop]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(validate(rule, { firstName: 'Duy' })); // false
// console.log(validate(rule, { firstName: 'Duy', lastName: 'Buffet' })); // true
//                                         /**/
//                                         // Bitwise NOT double
// Math.floor(6.9) === 6 // true
// ~~6.9 === 6 // true
