// let company = {
//     name: "TechVision",
//     founded: 2010,

//     headquarters: {
//         country: "Georgia",
//         city: "Tbilisi",

//         address: {
//             street: "Chavchavadze",
//             building: {
//                 number: 25,
//                 floors: 8,

//                 departments: {
//                     firstFloor: {
//                         name: "Reception",
//                         employees: 4
//                     },

//                     fifthFloor: {
//                         name: "Development",
//                         employees: 35,

//                         manager: {
//                             name: "Giorgi",
//                             age: 32,

//                             contact: {
//                                 email: "giorgi@techvision.com",
//                                 phone: "555123456"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },

//     projects: {
//         project1: {
//             name: "Website",
//             budget: 15000,

//             team: {
//                 leader: "Nika",
//                 members: 8,

//                 technology: {
//                     frontend: "React",
//                     backend: "Node.js",
//                     database: "MongoDB"
//                 }
//             }
//         },

//         project2: {
//             name: "Mobile App",
//             budget: 25000,

//             team: {
//                 leader: "Ana",
//                 members: 12,

//                 technology: {
//                     frontend: "React Native",
//                     backend: "Python",
//                     database: "PostgreSQL"
//                 }
//             }
//         }
//     }
// };

// // გამოტანა
// // 1
// console.log(company.name);
// console.log(company.founded);

// // 2
// console.log(company.headquarters.city);
// console.log(company.headquarters.country);

// // 3
// console.log(company.headquarters.address.building.number);
// console.log(company.headquarters.address.building.floors);

// // 4
// console.log(company.headquarters.address.building.departments.firstFloor.name);
// console.log(company.headquarters.address.building.departments.firstFloor.employees);

// // 5
// console.log(company.headquarters.address.building.departments.fifthFloor.name);
// console.log(company.headquarters.address.building.departments.fifthFloor.employees);

// // 6
// console.log(company.headquarters.address.building.departments.fifthFloor.manager.name);
// console.log(company.headquarters.address.building.departments.fifthFloor.manager.age);

// // 7
// console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email);
// console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.phone);

// // 8
// console.log(company.projects.project1.name);
// console.log(company.projects.project1.budget);
// console.log(company.projects.project1.team.leader);

// // 9
// console.log(company.projects.project2.team.members);
// console.log(company.projects.project2.team.technology.database);

// // 10
// console.log(company.projects.project2.team.technology.frontend);
// console.log(company.projects.project2.team.technology.backend);
// console.log(company.projects.project2.team.technology.database);


// //შეცვლა 

// // 11
// company.name = "TechWorld";

// // 12
// company.headquarters.city = "Batumi";

// // 13
// company.headquarters.address.building.number = 40;
// company.headquarters.address.building.floors = 10;

// // 14
// company.headquarters.address.building.departments.firstFloor.employees = 7;

// // 15
// company.headquarters.address.building.departments.fifthFloor.name = "Software Development";

// // 16
// company.headquarters.address.building.departments.fifthFloor.manager.age = 35;

// // 17
// company.headquarters.address.building.departments.fifthFloor.manager.contact.phone = "599123456";

// // 18
// company.projects.project1.budget = 20000;

// // 19
// company.projects.project2.team.leader = "Giorgi";
// company.projects.project2.team.members = 15;

// // 20
// company.projects.project1.team.technology.frontend = "Vue.js";
// company.projects.project1.team.technology.database = "MySQL";

// // 21
// company.employees = 150;

// // 22
// company.headquarters.postalCode = "0108";

// // 23
// company.headquarters.address.building.hasElevator = true;

// // 24
// company.headquarters.address.building.departments.firstFloor.phone = "0322000000";

// // 25
// company.headquarters.address.building.departments.fifthFloor.budget = 50000;

// // 26
// company.headquarters.address.building.departments.fifthFloor.manager.salary = 6000;

// // 27
// company.headquarters.address.building.departments.fifthFloor.manager.contactInfo.linkedIn = "giorgi-techvision";

// // 28
// company.projects.project1.team.designer = "Mariam";

// // 29
// company.projects.project2.technology.testing = "Jest";

// // 30
// company.projects.project2.status = "In Progress";

// // 31
// delete company.founded;

// // 32
// delete company.headquarters.country;

// // 33
// delete company.headquarters.address.building.floors;

// // 34
// delete company.headquarters.address.building.departments.firstFloor.employees;

// // 35
// delete company.headquarters.address.building.departments.fifthFloor.manager.age;

// // 36
// delete company.headquarters.address.building.departments.fifthFloor.manager.contactInfo.phone;

// // 37
// delete company.projects.project1.technology.database;

// // 38
// delete company.projects.project2.team.members;

// // 39
// delete company.projects.project1.budget;

// // 40
// delete company.projects.project2.technology.backend;



//1
// let player = {
//     name: "Shadow",
//     health: 100,
//     energy: 80,
//     level: 1,

//     showInfo() {
//         console.log(this.name);
//         console.log(this.health);
//         console.log(this.energy);
//         console.log(this.level);
//     },

//     takeDamage(amount) {
//         this.health -= amount;
//     },

//     heal(amount) {
//         this.health += amount;
//     },

//     levelUp() {
//         this.level++;
//     },

//     useEnergy(amount) {
//         this.energy -= amount;
//     }
// };

// player.takeDamage(20);
// player.heal(10);
// player.levelUp();
// player.useEnergy(15);
// player.showInfo();



// 2
// let bankAccount = {
//     owner: "Goga",
//     balance: 1500,
//     currency: "GEL",

//     showBalance() {
//         console.log(this.owner, this.balance, this.currency);
//     },

//     deposit(amount) {
//         this.balance += amount;
//     },

//     withdraw(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount;
//         } else {
//             console.log("Not enough money!");
//         }
//     },

//     showInfo() {
//         console.log(this.owner);
//         console.log(this.balance);
//         console.log(this.currency);
//     }
// };

// bankAccount.deposit(500);
// bankAccount.withdraw(200);
// bankAccount.showBalance();
// bankAccount.showInfo();


// 3

// let product = {
//     name: "Laptop",
//     price: 2500,
//     quantity: 10,

//     showInfo() {
//         console.log(this.name);
//         console.log(this.price);
//         console.log(this.quantity);
//     },

//     calculateTotal() {
//         return this.price * this.quantity;
//     },

//     sell(amount) {
//         if (amount <= this.quantity && amount > 0) {
//             this.quantity -= amount;
//         } else {
//             console.log("Not enough products!");
//         }
//     },

//     restock(amount) {
//         if (amount > 0) {
//             this.quantity += amount;
//         }
//     },

//     changePrice(newPrice) {
//         if (newPrice > 0) {
//             this.price = newPrice;
//         }
//     }
// };

// product.sell(2);
// product.restock(5);
// product.changePrice(2300);
// product.showInfo();
// console.log(product.calculateTotal());

//4

// let car = {
//     brand: "BMW",
//     model: "M5",
//     speed: 0,
//     fuel: 60,

//     showInfo() {
//         console.log(this.brand);
//         console.log(this.model);
//         console.log(this.speed);
//         console.log(this.fuel);
//     },

//     accelerate(amount) {
//         this.speed += amount;
//     },

//     brake(amount) {
//         this.speed -= amount;

//         if (this.speed < 0) {
//             this.speed = 0;
//         }
//     },

//     drive(distance) {
//         let fuelNeeded = distance / 10;

//         if (distance < 0) {
//             console.log("Invalid distance!");
//         } else if (this.fuel >= fuelNeeded) {
//             this.fuel -= fuelNeeded;
//         } else {
//             console.log("Not enough fuel!");
//         }
//     }
// };

// car.accelerate(50);
// car.brake(20);
// car.drive(100);
// car.showInfo();

//5

// let student = {
//     name: "Nika",
//     scores: [85, 90, 70, 100],

//     showScores() {
//         console.log(this.scores);
//     },

//     addScore(score) {
//         this.scores.push(score);
//     },

//     calculateAverage() {
//         let sum = 0;

//         for (let score of this.scores) {
//             sum += score;
//         }

//         return sum / this.scores.length;
//     },

//     getHighestScore() {
//         return Math.max(...this.scores);
//     },

//     getLowestScore() {
//         return Math.min(...this.scores);
//     }
// };

// student.addScore(95);
// student.showScores();
// console.log(student.calculateAverage());
// console.log(student.getHighestScore());
// console.log(student.getLowestScore());


//6

// let player = {
//     name: "Shadow",
//     health: 100,
//     attack: 25,

//     showInfo() {
//         console.log(this.name);
//         console.log(this.health);
//         console.log(this.attack);
//     },

//     attackEnemy(enemy) {
//         enemy.health -= this.attack;

//         if (enemy.health < 0) {
//             enemy.health = 0;
//         }
//     }
// };

// let enemy = {
//     name: "Dragon",
//     health: 150,
//     attack: 20,

//     showInfo() {
//         console.log(this.name);
//         console.log(this.health);
//         console.log(this.attack);
//     },

//     attackPlayer(player) {
//         player.health -= this.attack;

//         if (player.health < 0) {
//             player.health = 0;
//         }
//     }
// };

// player.attackEnemy(enemy);
// enemy.attackPlayer(player);

// player.showInfo();
// enemy.showInfo();






