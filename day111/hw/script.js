
// let student = {
//     name: "Giorgi",
//     math: 85,
//     english: 92,
//     physics: 74,
//     chemistry: 88,
//     history: 60
// };

// let count80 = 0;
// let sum = 0;
// let lowest = Infinity;
// let lowestSubject = "";
// let count70 = 0;

// for (let key in student) {
//     console.log(key, student[key]);

//     if (typeof student[key] === "number") {
//         if (student[key] >= 80) {
//             count80++;
//         }

//         sum += student[key];

//         if (student[key] < lowest) {
//             lowest = student[key];
//             lowestSubject = key;
//         }

//         if (student[key] < 70) {
//             count70++;
//         }
//     }
// }

// console.log("80 ან მეტი ქულა:", count80);
// console.log("ქულების ჯამი:", sum);
// console.log("ყველაზე დაბალი ქულა:", lowest);
// console.log("საგანი:", lowestSubject);
// console.log("70-ზე ნაკლები ქულა:", count70);
// ///////////////////////////////////////////
// javascript
// let products = {
//     laptop: 2500,
//     phone: 1800,
//     headphones: 250,
//     keyboard: 150,
//     monitor: 900,
//     mouse: 80
// };

// let count = 0;
// let sum = 0;
// let highest = 0;
// let expensiveProduct = "";
// let expensiveProducts = {};

// for (let key in products) {
//     console.log(key, products[key]);

//     sum += products[key];

//     if (products[key] > 500) {
//         count++;
//         expensiveProducts[key] = products[key];
//     }

//     if (products[key] > highest) {
//         highest = products[key];
//         expensiveProduct = key;
//     }
// }

// console.log("500 ლარზე ძვირი პროდუქტი:", count);
// console.log("საერთო ღირებულება:", sum);
// console.log("ყველაზე ძვირი პროდუქტი:", expensiveProduct);
// console.log("ფასი:", highest);
// console.log("ძვირადღირებული პროდუქტები:", expensiveProducts);

// ///////////////////////////////////////////

// let user = {
//     username: "Goga123",
//     age: 19,
//     city: "Tbilisi",
//     score: 450,
//     active: true,
//     gamesPlayed: 35
// };

// let numberCount = 0;
// let longKeys = 0;
// let numericInfo = {};
// let sum = 0;

// for (let key in user) {
//     console.log(key, user[key]);

//     if (key.length > 5) {
//         longKeys++;
//     }

//     if (typeof user[key] === "number") {
//         numberCount++;
//         numericInfo[key] = user[key];
//         sum += user[key];
//     }
// }

// console.log("რიცხვითი მნიშვნელობების რაოდენობა:", numberCount);
// console.log("5 სიმბოლოზე გრძელი გასაღებები:", longKeys);
// console.log("რიცხვითი ობიექტი:", numericInfo);
// console.log("რიცხვითი მნიშვნელობების ჯამი:", sum);

// ///////////////////////////////////////////

// let exam = {
//     Nika: 95,
//     Ana: 68,
//     Giorgi: 82,
//     Mariam: 45,
//     Luka: 73,
//     Saba: 30,
//     Elene: 88
// };

// let passed = 0;
// let failed = 0;
// let highest = -Infinity;
// let highestStudent = "";
// let sum = 0;
// let count = 0;

// for (let key in exam) {
//     console.log(key, exam[key]);

//     if (exam[key] >= 70) {
//         console.log("ჩააბარა");
//         passed++;
//     } else {
//         console.log("ვერ ჩააბარა");
//         failed++;
//     }

//     if (exam[key] > highest) {
//         highest = exam[key];
//         highestStudent = key;
//     }

//     sum += exam[key];
//     count++;
// }

// console.log("ჩაბარებული:", passed);
// console.log("ვერჩაბარებული:", failed);
// console.log("ყველაზე მაღალი ქულა:", highest);
// console.log("მოსწავლე:", highestStudent);
// console.log("საშუალო არითმეტიკული:", sum / count);

// ///////////////////////////////////////////

// let student = {
//     math: 85,
//     english: 92,
//     physics: 67,
//     chemistry: 78,
//     history: 55,
//     biology: 90
// };

// let subjects = Object.keys(student);
// let scores = Object.values(student);

// let count80 = 0;
// let sum = 0;
// let highest = -Infinity;
// let highestSubject = "";

// console.log("საგნები:", subjects);
// console.log("ქულები:", scores);
// console.log("საგნების რაოდენობა:", subjects.length);

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] >= 80) {
//         count80++;
//     }

//     sum += scores[i];

//     if (scores[i] > highest) {
//         highest = scores[i];
//         highestSubject = subjects[i];
//     }
// }

// console.log("80 ან მეტი ქულა:", count80);
// console.log("ქულების ჯამი:", sum);
// console.log("ყველაზე მაღალი ქულა:", highest);
// console.log("საგანი:", highestSubject);

// ///////////////////////////////////////////

// let employees = {
//     Nika: 2500,
//     Ana: 3200,
//     Luka: 1800,
//     Mariam: 4000,
//     Saba: 2200,
//     Elene: 3500
// };

// let names = Object.keys(employees);
// let salaries = Object.values(employees);

// let count3000 = 0;
// let sum = 0;
// let lowest = Infinity;
// let highest = -Infinity;
// let highestEmployee = "";

// console.log("სახელები:", names);
// console.log("ხელფასები:", salaries);
// console.log("თანამშრომლების რაოდენობა:", names.length);

// for (let i = 0; i < salaries.length; i++) {
//     if (salaries[i] > 3000) {
//         count3000++;
//     }

//     sum += salaries[i];

//     if (salaries[i] < lowest) {
//         lowest = salaries[i];
//     }

//     if (salaries[i] > highest) {
//         highest = salaries[i];
//         highestEmployee = names[i];
//     }
// }

// console.log("3000 ლარზე მეტი ხელფასი:", count3000);
// console.log("საშუალო ხელფასი:", sum / salaries.length);
// console.log("ყველაზე დაბალი ხელფასი:", lowest);
// console.log("ყველაზე მაღალი ხელფასის მქონე:", highestEmployee);
// console.log("ყველაზე მაღალი ხელფასი:", highest);

// ///////////////////////////////////////////

// let user = {
//     username: "Shadow123",
//     age: 21,
//     city: "Tbilisi",
//     score: 750,
//     active: true,
//     gamesPlayed: 45,
//     premium: false
// };

// let keys = Object.keys(user);
// let values = Object.values(user);

// let longKeys = 0;
// let numberCount = 0;
// let booleanCount = 0;
// let numberInfo = {};

// console.log("გასაღებები:", keys);
// console.log("მნიშვნელობები:", values);

// for (let key of keys) {
//     if (key.length > 5) {
//         longKeys++;
//     }
// }

// for (let key in user) {
//     if (typeof user[key] === "number") {
//         numberCount++;
//         numberInfo[key] = user[key];
//     }

//     if (typeof user[key] === "boolean") {
//         booleanCount++;
//     }
// }

// console.log("5 სიმბოლოზე გრძელი გასაღებები:", longKeys);
// console.log("რიცხვითი მნიშვნელობები:", numberCount);
// console.log("Boolean მნიშვნელობები:", booleanCount);
// console.log("რიცხვითი ობიექტი:", numberInfo);

// ///////////////////////////////////////////

// let company = {
//     marketing: 12000,
//     development: 35000,
//     design: 9000,
//     support: 7000,
//     sales: 18000,
//     research: 15000
// };

// let departments = Object.keys(company);
// let budgets = Object.values(company);

// let total = 0;
// let count15000 = 0;
// let highest = -Infinity;
// let highestDepartment = "";
// let lowest = Infinity;
// let lowestDepartment = "";

// console.log("განყოფილებები:", departments);
// console.log("ბიუჯეტები:", budgets);

// for (let i = 0; i < budgets.length; i++) {
//     total += budgets[i];

//     if (budgets[i] >= 15000) {
//         count15000++;
//     }

//     if (budgets[i] > highest) {
//         highest = budgets[i];
//         highestDepartment = departments[i];
//     }

//     if (budgets[i] < lowest) {
//         lowest = budgets[i];
//         lowestDepartment = departments[i];
//     }
// }

// console.log("მთლიანი ბიუჯეტი:", total);
// console.log("15000 ლარი ან მეტი:", count15000);
// console.log("ყველაზე დიდი ბიუჯეტის განყოფილება:", highestDepartment);
// console.log("ბიუჯეტი:", highest);
// console.log("ყველაზე პატარა ბიუჯეტის განყოფილება:", lowestDepartment);
// console.log("ბიუჯეტი:", lowest);

