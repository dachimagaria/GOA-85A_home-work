//////////////////////////////////////////////////////////////////////////////////

let numbers = [12, 45, 7, 23, 89, 34, 16, 50];

numbers[0] = 100;
numbers[7] = 200;
numbers[2] = numbers[2] + 10;
numbers[4] = numbers[4] / 2;
numbers[3] = 16;
numbers[6] = 23;

console.log(numbers);

//////////////////////////////////////////////////////////////////////////////////
let numbers1 = [15, 8, 42, 8, 31, 42, 19, 8];

numbers1[1] = 80;
numbers1[2] = 420;
numbers1[7] = 800;
numbers1[1] = 80 + 5;

console.log(numbers1);

//////////////////////////////////////////////////////////////////////////////////

let fruits = ["apple", "banana", "orange", "kiwi", "mango", "peach"];
let index = 3;

fruits[index] = "watermelon";
console.log(fruits);

//////////////////////////////////////////////////////////////////////////////////

let names = ["rezi", "gega", "dachi"];

let num = "1";

num = Number(num);
console.log(names[num]);

//////////////////////////////////////////////////////////////////////////////////

let students = ["Giorgi", "Nika", "Saba", "Luka", "Dato", "Ana"];
let position = 4;
let newName = "Goga";

if (position <= students.length) {
  students[position - 1] = newName;
} else {
  console.log("Invalid position");
}

console.log(students);

///////////////////////////////////////////////////////////

let colors = ["red", "blue", "green", "yellow", "black", "white"];

colors[2] = "purple";
colors[4] = "pink";
colors[6] = "red";
colors = colors.slice(1);
console.log(colors);

///////////////////////////////////////////////////////

let numbers2 = [5, 10, 15, 20, 25, 30, 35, 40];

numbers2[1] = numbers2[1] * 10;
numbers2[2] = numbers2[2] * 10;
numbers2[3] = numbers2[3] * 10;
numbers2[4] = numbers2[4] * 10;
numbers2[5] = numbers2[5] * 10;

console.log(numbers2);
///////////////////////////////////////////////////////////
let numbers3 = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numbers3.length; i++) {
  if (i % 2 === 0) {
    numbers3[i] = numbers3[i] * 2;
  } else {
    numbers3[i] = numbers3[i] + 5;
  }
}

console.log(numbers3);
