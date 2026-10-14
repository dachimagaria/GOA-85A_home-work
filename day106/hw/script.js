// 1)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 2)
let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"];
let longFruits = fruits.filter((fruit) => fruit.length > 4);
console.log(longFruits);

// 3)
let numbers2 = [-5, 10, -3, 0, 8, -1, 15];
let positiveNumbers = numbers2.filter((num) => num >= 0);
console.log(positiveNumbers);

// 4)
let names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"];
let aNames = names.filter((name) => name.startsWith("ა"));
console.log(aNames);

// 5)
let list = [0, "გამარჯობა", "", null, undefined, "JS", false];
let truthyList = list.filter((item) => item);
console.log(truthyList);

// 6)
let numbers3 = [5, 12, 45, 8, 20, 100, 33];
let rangeNumbers = numbers3.filter((num) => num >= 10 && num <= 50);
console.log(rangeNumbers);

// 7)
let words = ["apple", "banana", "cherry", "date", "avocado"];
let aWords = words.filter((word) => word.includes("a"));
console.log(aWords);

// 8)
let list2 = [10, "ვაშლი", true, 25, "მსხალი", false, 50];

let stringList = list2.filter((item) => typeof item === "string");
let numberList = list2.filter((item) => typeof item === "number");
let booleanList = list2.filter((item) => typeof item === "boolean");

console.log(stringList);
console.log(numberList);
console.log(booleanList);
