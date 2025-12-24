// let personName='hari';
// const type='54';
// console.log(personName.at(-1));
// console.log(personName.charAt(2));
// console.log(personName.concat(' ram').concat(' jee'));
// console.log(type.trim().length)
// console.log(personName.includes('am'));
// console.log(personName.endsWith('ri'));
// console.log(personName.repeat(7));
// console.log(personName.replaceAll('hari','Shyam'));
// console.log(personName.slice(1,-2));
// console.log(personName.substring(0,3));
// console.log(personName.startsWith('h'));
// console.log(personName.split('a'));

// Given const name = "Asha", age = 27; build a template string that produces:
// Asha is 27 years old.
// const name='Asha';
// age=27;
// result=`${name} is ${age} years old.`
// console.log(result);

// Using const x = 5, y = 3; craft a template string that shows:
// 5 + 3 = 8
// const x=5 , y=3;
// result=`${x} + ${y} = ${x+y}`;
// console.log(result);

// const temperature = 20;
// const value = 2;
// const pizza = 'pizza';
// const  pasta = 'pasta';

// Write a program that produces this output by using all of them:

// The temperature is 20C
// 2 plus 2 makes 4
// I like pizza and pasta
// const temperature = 20;
// const value = 2;
// const pizza = 'pizza';
// const  pasta = 'pasta';
// result=`The temperature is ${20}C`;
// console.log(result);
// sum=`${value} plus ${value} makes 4.`;
// console.log(sum);
// like=`I like ${pizza} and ${pasta}.`
// console.log(like);


// const price = '1000';
// const m = Number(price);
// console.log(typeof price);

// const price = '1000';
// const m = Number(price);
// console.log(m + m);

// const price = 'sadjkbas';
// const m = Number(price);
// //console.log(m);
// console.log(Number.isNaN(m));

// const price = 900.165272365;
// console.log( price.toFixed(2));

// Given a string `"Hello JavaScript"`, extract only the word `"JavaScript"` using a string method.
// const string='Hello JavaScript';
// console.log(string.substring(6,16));

// Convert the string `"frontend developer"` into uppercase.
// const role='frontend developer';
// console.log(role.toUpperCase());


// Check whether the string `"React is great"` contains the word `"great"`.
// const reactopinion='React is great';
// console.log(reactopinion.includes('great'));

// Replace the word `"bad"` with `"good"` in the string `"JavaScript is bad"`.
// const jsopinion='JavaScript is bad';
// console.log(jsopinion.replaceAll('bad','good'));

// Trim the extra spaces from the string `"   learn js now   "`.
// const str='   learn  js  now  ';
// console.log(str.trim());

// Take the string `"abcdefg"` and return the character at index 3.
// const characters='abcdefg';
// console.log(characters.charAt(3));

// Find the index of the first occurrence of `"a"` in `"banana"`.
// const fruit='banana';
// console.log(fruit.indexOf('a'));

// Split the string `"apple,banana,grapes"` into an array.
// const fruits='apple,banana,grapes';
// console.log(fruits.split(','));

// Using string methods, reverse the string `"hello"`.
// const data='hello';
// console.log(data.split('').reverse().join(''));

// Check if the string `"Welcome"` starts with `"Wel"`.
// const wel='Welcome';
// console.log(wel.startsWith('Wel'));

// Check if the string `"JavaScript"` ends with `"Script"`.
// const js='JavaScript';
// console.log(js.endsWith('Script'));

// Count how many times letter `"a"` appears in `"programming"`.
// const word='programming';
// console.log(word.split('a').length-1);

// Remove all spaces from `"I am learning JS"`.
// const x='I am learning JS';
// console.log(x.split(' ').join(''));

// Capitalize the first letter of `"javascript"` using string methods.
// const language = "javascript";
// console.log( language.charAt(0).toUpperCase() + language.slice(1)); 

// const rating = 7.49;

// console.log(Math.ceil(rating));
// console.log(Math.floor(rating));
// console.log(Math.round(rating));

// console.log(Math.cbrt(64));
// console.log(Math.sqrt(4));
// console.log(Math.max(11, 33, 77, 8, 9, 44));
// console.log(Math.min(11, 33, 77, 8, 9, 44));
// console.log(Math.pow(9,2));


// const random = Math.floor(Math.random() * 5) + 1;
// console.log(random);

// let random = Math.floor(Math.random() * 50) + 1;



// if (random < 20) random += 20
// console.log(random);

// const random = Math.floor(Math.random() * 20) + 30;
// console.log(random);

// creating object car , bank, house, laptop, animal, product

// for car
// const car = {
//   carName: "Toyota",
//   model: "2022",
//   manufacturer: "Toyota Motors",
//   carInfo: function () {
//     console.log(
//       `The ${this.carName} is manufactured by ${this.manufacturer} in year ${this.model}`
//     );
//   },
// };
// car.carInfo();


// // for bank
// const bank = {
//   bankName: "Nepal Bank Limited",
//   type: "commercial",
//   established: "1994 BS",
//   bankInfo: function () {
//     console.log(
//       `${this.bankName} is a ${this.type} bank, established in ${this.established}`
//     );
//   },
// };
// bank.bankInfo();


// // for house
// const house = {
//   houseType: "Apartment",
//   rooms: 4,
//   location: "Kathmandu",
//   houseInfo: function () {
//     console.log(
//       `This ${this.houseType} has ${this.rooms} rooms and is located in ${this.location}`
//     );
//   },
// };
// house.houseInfo();


// // for laptop
// const laptop = {
//   brand: "Dell",
//   ram: "16GB",
//   processor: "Intel i7",
//   laptopInfo: function () {
//     console.log(
//       `The ${this.brand} laptop comes with ${this.ram} RAM and ${this.processor} processor`
//     );
//   },
// };
// laptop.laptopInfo();


// // for animal
// const animal = {
//   animalType: "Dog",
//   name: "Buddy",
//   age: 3,
//   animalInfo: function () {
//     console.log(
//       `${this.name} is a ${this.animalType} and is ${this.age} years old`
//     );
//   },
// };
// animal.animalInfo();


// // for product
// const product = {
//   productName: "Headphones",
//   price: 2500,
//   category: "Electronics",
//   productInfo: function () {
//     console.log(
//       `The product ${this.productName} costs Rs ${this.price} and belongs to ${this.category}`
//     );
//   },
// };
// product.productInfo();

// const a = 90;
// const b = 100;

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);
// console.log(b % a);


// const result = 90 + (90 - 100);

// console.log(result);
// let a = 90;

// // a = a + 1;
//  ++a;
// console.log(a);

// const b = ++a;


// console.log(b);
// const a = 90;
// const b = 100;


// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);
// const a = 90;
// const b = 100;


// console.log(a > b || a < b || a === b);
// console.log(a > b && a < b && a === b);
// let age = 20;
// const check = age < 20 ? "Junior" : age > 50 ? "Senior" : "regular";
// console.log(check);
// const age = 110;

// if (age > 90) {
//   console.log('hello world');
// } else if (age > 70) {
//   console.log('hello');
// } else if (age > 110) {
//   console.log('hello');
// } else if (age > 120) {
//   console.log('hello');
// } else {
//   console.log('hello');
// }
// Define two integer variables
// let netSalary = 5000;
// let expenses = 3000;

// // Compare netSalary and expenses
// if (netSalary > expenses) {
//   console.log(`You have saved $${netSalary - expenses} this month`);
// } else if (expenses > netSalary) {
//   console.log(`You have lost $${expenses - netSalary} this month`);
// } else {
//   console.log("Your balance hasn't changed");
// }
// const pos = 3;


// switch (pos) {

//   case 100:
//     console.log('hello jee khjhjkh bkjh');

//     break;

//   case 2:
//     console.log('hello jee');

//     break;

//   case 3:
//     console.log('hello jee');

//     break;

//   default:
//     console.log('hello jee');
//     break;

// }
// const number1 = 100;
// const number2 = 100;
// const calc = "add";

// switch (calc) {
//   case "add":
//     console.log(`${number1}+${number2}=${number1 + number2}`);
//     break;
//   case "sub":
//     console.log(`${number1}-${number2}=${number1 - number2}`);
//     break;
//   case "mul":
//     console.log(`${number1}*${number2}=${number1 * number2}`);
//     break;
//   default:
//     console.log(`error occurred!!!`);
// }
// let age = 90;


// // age = age + 100;
// age /= 100;


// // console.log(age);
// let age = 90;


// // age = age + 100;
// age **= 4;
// console.log(age);
// const persons = ['ram', 'shyam', 'hari'];

// console.log(persons[5]);
// const persons = ['ram', 'shyam', 'hari'];
// persons[0] = 'rita';

// console.log(persons);

// const persons = ['ram', 'shyam', 'hari'];
// // //  persons[0] = 'rita';
// // //  persons.push('lio', 'mio');
// // // persons.pop();
// // // persons.shift();
// // persons.unshift('rio');
// // console.log(persons);

// console.log(persons.at(0));
// console.log(persons.concat('t', 's', 'l'));
// console.log(persons.copyWithin(2, 1))
// console.log(persons.fill(90, 1));
// let i = 0;
// let sum = 0;
// while (i < 10) {
//   i++;
//   const value = i + i;
//   sum += value;
//   console.log(sum);
// }
// let i = 0;

// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i); // even number
//   }
//   i++;
// }
// let i = 0;

// while (i <= 10) {
//   if (i % 2 !== 0) {
//     console.log(i); // Odd Number
//   }
//   i++;
// }

// // Write a function that takes a number and a callback. The callback should check whether the number is even or odd.
// function checkEvenOdd(num){
//     if(num%2===0){
//         console.log("The number is even");
//     }else{
//         console.log("The number is odd");
//     }
// }
// function processNumber(number,callback){
//     callback(number);
// }
// processNumber(7, checkEvenOdd);

// // Create a function calculate(a, b, callback) that performs addition, subtraction, multiplication, or division based on the callback passed.
// function calculate(a,b,callback){
//     return callback(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// console.log(calculate(10,5,add));
// console.log(calculate(10,5,subtract));
// console.log(calculate(10,5,multiply));
// console.log(calculate(10,5,divide));

// //Write a function that accepts a string and a callback. The callback should return the string in uppercase.
// // Callback function
// function processString(text, callback) {
//   return callback(text);
// }
// function toUpperCaseCallback(str) {
//   return str.toUpperCase();
// }

// console.log(processString("hello world", toUpperCaseCallback));
// const persons=['ram', 'shyam', 'hari'];

// persons.forEach((per,i)=>{
// console.log(per);
// console.log(i);
// });
// const g=(func)=>{
//     func(11,22);
// }
// g((a,b)=>{

// })
// const numbers = [11, 22, 33, 44, 55, 66, 77];

// let total = 0;

// numbers.forEach(num,i) {
//   total = num + total;
//   i++;
// };

// console.log("Total:", total);
// let total = 0;
// numbers.forEach(num => total += num);
// console.log("Total:", total);
// const numbers = [11, 22, 33, 44, 55, 66, 77];
// numbers[numbers.length - 1] = 100;
// console.log(numbers);
// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.reduce((n, i) => {
//   return n > 33;
// });

// console.log(nN);
// const numbers = [11, 22, 33];

// const nN = numbers.reduce((a, b) => {
//   // 11, 22
//   // 33, 33

//   return a + b;
// });

// console.log(nN);
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   color: "White",
//   price: 2500000,
//   isAutomatic: true
// };

// console.log(car.brand);

// const product = {
//   name: "Wireless Mouse",
//   brand: "Logitech",
//   price: 1200,
//   category: "Electronics",
//   inStock: true
// };

// console.log(product.price);

// const computer = {
//   brand: "Dell",
//   processor: "Intel i5",
//   ram: "16GB",
//   storage: "512GB SSD",
//   price: 95000
// };

// console.log(computer.processor);

// const house = {
//   type: "Apartment",
//   rooms: 3,
//   location: "Kathmandu",
//   price: 12000000,
//   hasParking: true
// };

// console.log(house.location);

// const age=90;

// const func=()=>{
//   const age=100;
//   console.log(age);
// }
// func();