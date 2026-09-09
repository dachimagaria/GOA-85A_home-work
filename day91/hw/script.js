let songs = ["Song A", "Song B", "Song C"];

songs.push("Song D", "Song E");

let deletedSong = songs.pop();

songs.push("Song F");

console.log(songs);
console.log(deletedSong);

/////////////////////////

let scores = [45, 67, 89, 34, 72];

scores.push(91, 56);

scores.pop();

console.log(scores);
console.log(scores.length);

/////////////////////////

let students = ["Nika", "Gio", "Luka", "Ana"];

students.shift();

students.unshift("Dato", "Saba");

console.log(students);

/////////////////////////

let messages = ["Hello", "How are you?", "Goodbye"];

messages.shift();

messages.unshift("Important!");

messages.unshift("Warning!");

messages.push("See you!");

messages.pop();

console.log(messages);

/////////////////////////

let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"];

let firstThree = products.slice(0, 3);

let lastThree = products.slice(3);

let phoneToWatch = products.slice(1, 4);

console.log(firstThree);
console.log(lastThree);
console.log(phoneToWatch);
console.log(products);

/////////////////////////

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let firstArray = numbers.slice(2, 6);

let secondArray = numbers.slice(4);

console.log(firstArray);
console.log(secondArray);
console.log(numbers);

/////////////////////////

let colors = ["red", "blue", "green", "yellow", "black"];

colors.splice(2, 1);

colors.splice(2, 0, "purple");

colors.splice(3, 1, "orange");

console.log(colors);

/////////////////////////

let numbers2 = [5, 10, 15, 20, 25, 30];

numbers2.splice(2, 2, 100, 200);

numbers2.splice(4, 1);

console.log(numbers2);

/////////////////////////

let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

let newFruits = fruits.toSpliced(2, 1, "watermelon");

console.log(fruits);
console.log(newFruits);

/////////////////////////

let numbers3 = [10, 20, 30, 40, 50];

numbers3.splice(2, 1, 100);

console.log(numbers3);

let numbers4 = [10, 20, 30, 40, 50];

let newNumbers = numbers4.toSpliced(2, 1, 100);

console.log(numbers4);
console.log(newNumbers);

/////////////////////////

let data1 = [10, 20, 30];
let data2 = "Hello";
let data3 = 100;
let data4 = ["A", "B"];

console.log("data1 is array:", Array.isArray(data1));
console.log("data2 is not array:", !Array.isArray(data2));
console.log("data3 is not array:", !Array.isArray(data3));
console.log("data4 is array:", Array.isArray(data4));

/////////////////////////

let sentence = "JavaScript is very interesting";

let words = sentence.split(" ");

console.log(words);
console.log(words.length);
console.log(words[0]);
console.log(words[words.length - 1]);

/////////////////////////

let students2 = "Nika,Gio,Luka,Ana,Saba";

let studentsArray = students2.split(",");

console.log(studentsArray[0]);
console.log(studentsArray[1]);
console.log(studentsArray[2]);
console.log(studentsArray[3]);
console.log(studentsArray[4]);


/////////////////////////

let words2 = ["HTML", "CSS", "JavaScript", "React"];

let firstText = words2.join(" - ");

let secondText = words2.join(" | ");

console.log(firstText);
console.log(secondText);

/////////////////////////

let numbers5 = ["555", "12", "34", "56"];

let result = numbers5.join("-");

console.log(result);

/////////////////////////

let boys = ["Nika", "Gio", "Luka"];
let girls = ["Ana", "Mariam", "Sali"];

let allStudents = boys.concat(girls);

console.log(allStudents);

/////////////////////////

let morning = ["Math", "English"];
let afternoon = ["History", "Physics"];
let evening = ["Programming", "Design"];

let schedule = morning.concat(afternoon, evening);

console.log(schedule);

/////////////////////////

let cart = ["Phone", "Laptop", "Mouse"];

cart.push("Keyboard");

cart.unshift("USB Cable");

cart.pop();

cart.shift();

cart.splice(2, 1, "Headphones");

let firstTwo = cart.slice(0, 2);

let extraProducts = ["Webcam", "Microphone"];

let finalCart = cart.concat(extraProducts);

let finalText = finalCart.join(" | ");

console.log(cart);
console.log(firstTwo);
console.log(finalCart);
console.log(finalText);

/////////////////////////

let data = "apple,banana,orange,kiwi,mango";

let fruits2 = data.split(",");

console.log(Array.isArray(fruits2));

fruits2.push("watermelon");

fruits2.unshift("strawberry");

fruits2.pop();

fruits2.shift();

fruits2.splice(2, 1, "peach");

let middleFruits = fruits2.slice(1, 4);

let newFruits2 = fruits2.toSpliced(1, 1);

let extraFruits = ["grape", "melon"];

let finalFruits = fruits2.concat(extraFruits);

let finalResult = finalFruits.join(" | ");

console.log(fruits2);
console.log(middleFruits);
console.log(newFruits2);
console.log(finalResult);

