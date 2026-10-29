
// let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     city: "Tbilisi",
//     departments: 4,
//     budget: 120000,
//     active: true,
//     projects: 8
// };

// let keys = Object.keys(company);
// console.log(keys);


// let values = Object.values(company);
// console.log(values);

// console.log(keys.length);


// console.log(values.length);


// for (let key of keys) {
//     console.log(key);
// }

// for (let value of values) {
//     console.log(value);
// }


// let numbers = values.filter(value => typeof value === "number");
// console.log(numbers);


// let total = numbers.reduce((sum, number) => sum + number, 0);
// console.log(total);
// //////////////////////


// let company = {
//     name: "TechVision",
//     employees: 45,
//     founded: 2015,
//     budget: 120000,
//     marketing: 15000,
//     development: 45000,
//     design: 12000,
//     support: 8000,
//     active: true
// };

// for (let key in company) {
//     console.log(key, company[key]);
// }


// let count = 0;

// for (let key in company) {
//     if (typeof company[key] === "number") {
//         count++;
//     }
// }

// console.log(count);


// let total = 0;

// for (let key in company) {
//     if (typeof company[key] === "number") {
//         total += company[key];
//     }
// }

// console.log(total);


// let keyCount = 0;

// for (let key in company) {
//     if (key.length > 6) {
//         keyCount++;
//     }
// }

// console.log(keyCount);
