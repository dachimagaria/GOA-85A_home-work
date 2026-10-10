// // 1)
// let prices1 = [25, 40, 15, 80, 100, 35];

// let newPrices1 = prices1.map((price) => price + 20);

// console.log(newPrices1);

// // 2)
// let scores2 = [45, 72, 91, 38, 64, 87];

// let newScores2 = scores2.map((score) => (score < 50 ? score + 10 : score));

// console.log(newScores2);

// // 3)
// let names3 = ["nika", "ana", "gio", "mariam", "luka"];

// let newNames3 = names3.map((name) => name.toUpperCase());

// console.log(newNames3);

// // 4)
// let numbers4 = [2, 5, 7, 10, 12];

// let newNumbers4 = numbers4.map((number) => number * number);

// console.log(newNumbers4);

// // 5)
// let numbers5 = [12, 7, 20, 15, 8, 31, 44];

// numbers5.forEach((number) => {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// });

// // 6)
// let prices6 = [100, 250, 80, 450, 120];

// prices6.forEach((price) => {
//   console.log("Product price: " + price);
// });

// // 7)
// let scores7 = [95, 67, 42, 81, 55, 30];

// scores7.forEach((score) => {
//   if (score >= 80) {
//     console.log(score + " - Excellent");
//   } else if (score >= 60) {
//     console.log(score + " - Good");
//   } else if (score >= 50) {
//     console.log(score + " - Average");
//   } else {
//     console.log(score + " - Failed");
//   }
// });

// // 8)
// let prices8 = [100, 200, 350, 80, 500];

// let newPrices8 = prices8.map((price) => price + 50);

// newPrices8.forEach((price) => {
//   console.log("New price: " + price);
// });

// // 9)
// let scores9 = [45, 60, 72, 38, 90];

// let newScores9 = scores9.map((score) => (score < 50 ? score + 15 : score));

// newScores9.forEach((score) => {
//   console.log("Score: " + score);
// });

// // 10)
// let names10 = ["nika", "ana", "gio", "mariam", "luka"];

// let newNames10 = names10.map((name) => name.toUpperCase());

// newNames10.forEach((name) => {
//   console.log("Student: " + name);
// });

// // 11)
// let numbers11 = [12, 5, 20, 7, 30, 11, 8];

// let results11 = numbers11.map((number) => {
//   return number % 2 === 0 ? number * 2 : number * 3;
// });

// results11.forEach((number) => {
//   console.log("Result: " + number);
// });

// //12
// let prices = [120, 450, 80, 300, 50, 700];

// let newPrices = prices.map((price) => {
//   if (price < 100) {
//     return price + 20;
//   } else if (price <= 500) {
//     return price + 50;
//   } else {
//     return price + 100;
//   }
// });

// newPrices.forEach((price, index) => {
//   console.log(`${prices[index]} → ${price}`);
// });

// //13
// let numbers = [5, 12, 25, 8, 40, 17];

// let results = numbers.map((number) => {
//   if (number < 10) {
//     return "Small";
//   } else if (number <= 20) {
//     return "Medium";
//   } else {
//     return "Large";
//   }
// });

// results.forEach((result) => {
//   console.log(result);
// });

// //14
// let numbers = [10, 25, 4, 18, 33, 7, 40];

// let results = numbers.map((number) => {
//   if (number > 20) {
//     return number - 5;
//   } else if (number < 20) {
//     return number + 5;
//   } else {
//     return number * 2;
//   }
// });

// results.forEach((number) => {
//   console.log(`Number: ${number}`);
// });

// //15
// let numbers = [5, 12, 30, 7, 21, 40, 9, 18];

// let results = numbers.map((number) => {
//   let result;

//   if (number < 10) {
//     result = number + 10;
//   } else if (number <= 20) {
//     result = number * 2;
//   } else {
//     result = number - 5;
//   }

//   if (result % 2 === 0) {
//     result += 2;
//   } else {
//     result += 1;
//   }

//   return {
//     original: number,
//     final: result,
//   };
// });

// results.forEach((item) => {
//   console.log(`Original number: ${item.original}`);
//   console.log(`Final result: ${item.final}`);
// });
