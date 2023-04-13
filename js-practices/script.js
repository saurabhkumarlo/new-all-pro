// let i = 0;
// while (i < 9) {
//   console.log(`the vlaue i ${i}`);
//   i++;
// }

// console.log(`the vlaue i ${i}`);

// let

// for(let i=0;i<=9;i++){
// console.log(`this is i ${i}`);
// }

// console.log("Helllo Boy and this is");

// for(let i=0;i<=10;i++){
//     if(i===4){
//         continue;
//     }
// console.log(`this is i ${i}`);
// }

// const fruits = ["apple", "mango", "grapesh", "banana"];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "mango") {
//     continue;
//   }
//   console.log(fruits[i]);
// }

// let fruits = ["apple", "mango", "banana", "papaya"];

// console.log(fruits);

// fruits[1] = "Hello Boy";

// console.log(fruits);

// let names = ["saurabh", "kumar", "prince", "hero"];
// console.log(names);
// names[1] = "Hello Boy";

// console.log(names);

// let names = ["saurabh", "kumar", "prince", "hero"];

// const popElement = names.unshift("rakesh");
// console.log(popElement);
// console.log(names);

// const array1 = ["item1", "item2", "item3"];
// const array2 = [];
// for (let array of array1) {
//   array2.push(array.toUpperCase());
// }

// console.log(array2);
// let newNames = names.slice(0);
// let newNames = [].concat(names);
// let newNames = [...names]
// console.log(newNames);
// console.log(newNames === names);

// const array1 = ["item1", "item2", "item3", "item4"];
// const arrray2 = [];

// for (array of array1) {
//   arrray2.push(array.toUpperCase());
// }

// console.log(arrray2);

// const array1 = ["item1", "item2", "item3"];

// for (let array of array1) {
//   //   console.log(array1[array]);
//   console.log(array.length);
// }

// const person = {
//   name: "Saurabh",
//   age: 12,
//   hobbeis: ["abc", "def", "ghi"],
// };

// person.gender = "male";

// console.log(person["name"]);

// const person = {
//   name: "Saurabh",
//   age: 12,
//   "person hobbies": ["abe", "Fvd", "DFf"],
// };

// const key = "email";

// person[key] = "saurabh@gmail.com";

// console.log(person);

// const perosn = {
//   name: "Saurabh",
//   age: 12,
//   person_hobbies: ["A", "B", "C", "D"],
// };

// const keys = "email"
// perosn[keys] = "Saurabh@gmail.com"
// console.log(perosn);
// for (let key in perosn) {
//   console.log(perosn[key]);
// }

// const perosn = {
//   name: "Saurabh",
//   age: 12,
//   song: ["Abc", "Def", "Ghi"],
// };

// console.log(perosn);

// console.log(Object.keys(perosn));

// for(let key of Object.keys(perosn)){
//     console.log(key);
//     console.log(perosn[key]);
// }

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// console.log(obj);

// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// const input2 = { a: 2, e: 12, f: 6, d: 10 };

// const output = {d:10,e:12}


// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);

// const newObj = {...["abg","dfjbk"]}

// console.log(newObj);

// const users = [
//   { userId: 1, firstName: "saurabh", gender: "male" },
//   { userId: 2, firstName: "another", gender: "female" },
//   { userId: 3, firstName: "kkkkk", gender: "male" },
// ];

// for (let user of users) {
//   console.log(user.gender);
// }

// const [{firstName:helloboy}, , {gender}] = users;

// console.log(helloboy);
// console.log(gender);

// function addTwoNum(a, b) {
//   return a + b;
// }

// const myFunc = addTwoNum(1, 2);
// console.log(myFunc);

// function oddEven(number) {
//   return number %  2 == 0;
// }

// const myfunc = oddEven(10);
// console.log(myfunc);

// function findTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// const myArray = [2, 5, 6, 7, 65, 4, 4, 3, 34];
// const ans = findTarget(myArray, 34);
// console.log(ans);

//

// const myFunc = () => {
//   console.log("Hello Boy");
//   const anotherFunc = (num1, num2) => num1 + num2;

//   console.log(anotherFunc(2, 3));
// };

// myFunc();

// const myFunc = () => {
//   const abc = "Hello Boy";
//   const anotherFunc = () => {
//     console.log(`this is ${abc}`);
//   };
//   anotherFunc();
// };

// myFunc();

// const addAllNum = (...numbers) => {
//   let total = 1;
//   for (let number of numbers) {
//     total = total * number;
//   }

//   return total;
// };

// const ans = addAllNum(3,2);
// console.log(ans);

 // 6080604052600a60005534801561001557600080fd5b50610133806100256000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80630c55699c14603757806360fe47b1146051575b600080fd5b603d6069565b604051604891906090565b60405180910390f35b606760048036038101906063919060d5565b606f565b005b60005481565b8060008190555050565b6000819050919050565b608a816079565b82525050565b600060208201905060a360008301846083565b92915050565b600080fd5b60b5816079565b811460bf57600080fd5b50565b60008135905060cf8160ae565b92915050565b60006020828403121560e85760e760a9565b5b600060f48482850160c2565b9150509291505056fea26469706673582212203146f7239b1aff79b4f8b50a821ee10b024a04e698d4e6047eae328e5842dd1f64736f6c63430008120033

//  [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_x",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "set",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "x",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]