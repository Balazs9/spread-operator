// node spread-operator.js to run the file


// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);
arr2.push(4);
console.log(arr2);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log(arr3);
console.log(arr4);

// copying an object

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};

console.log(obj1);
console.log(obj2);
console.log(obj3);

// copying only part of an object/array

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);