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

// regular function call

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum:", sum);

// extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log(sum2);

// functions using rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum+=i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum:" , sum3);

// destructuring array

let ages = [30, 26, 27];
// let john = ages[0];
// let marry = ages[1];
// let joe = ages[2];
let [john, marry, joe] = ages;
console.log(john, marry, joe);


// destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    marta: 'accountant'
};
let {mike, jill, marta} = jobs;
console.log(mike, jill, marta);

// destructuring subsets

let languages = ["english", "german", "japanese", "hungarian", "italian"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [,,marryNative, marrySecondary] = languages;
console.log(marryNative, marrySecondary);

let languages2 = {
    firstLanguage: "japanese",
    secondLanguage: "english",
    thirdLanguage: "german",
    fourthLanguage: "hungarian",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// using rest parameter syntax

let fruits = ["apple", "orange", "pear", "banana", "peach"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    sara: "pasta",
    dean: "vegetables",
    andrea: "chicken"
};
let { brian, sara, ...rest} = favouriteFoods;
console.log(brian);
console.log(rest);

// map() method
    // using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for ( let num of nums) {
    results.push(num * 2);
}
console.log(results);

    // using map method

const multByTwo = function (num) {
    return num *2;
}

const mapResult = nums.map(multByTwo);
console.log(mapResult);

const result = nums.map(num=>num*2);
console.log(result);

// with subjects

const students = [
    {
        id: 1,
        name: 'mark',
        profession: 'developer',
        skill: 'javascript'
    },
    {
        id: 2,
        name: 'ariel',
        profession: 'developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'jason',
        profession: 'designer',
        skill: 'CSS'
    }
];
const studentWithId = students.map(student=>[student.name, student.id]);
console.log(studentWithId);


/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

let filterPeople = people.filter(person=> person.age >= 21 );
console.log(filterPeople);

let paulPeople = people.filter(person=> person.name==='Paul')[0];
console.log(paulPeople);
  
  
  // Complex Filtering
  const students2 = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];
  let hasFiveYearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(hasFiveYearsExp).length > 0;
  
  const candidate = students2.filter(hasStrongSkills);
  console.log(candidate);
  const name = candidate.map(student=>student.name);
  console.log(name);