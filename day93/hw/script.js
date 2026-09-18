let prices = [120, 45, 300, 80, 150, 25, 400];

let sum = 0;

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    prices[i] -= 20;
  } else if (prices[i] >= 50 && prices[i] <= 100) {
    prices[i] -= 10;
  }

  sum += prices[i];
}

console.log("საბოლოო ჯამი:", sum);

for (let i = prices.length - 1; i >= 0; i--) {
  console.log(prices[i]);
}

/////////////////////////////////

let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  ",
];

let count = 0;

for (let i = 0; i < messages.length; i++) {
  messages[i] = messages[i].trim().toLowerCase();

  if (messages[i].includes("javascript")) {
    console.log("JavaScript message found");
    count++;
  }
}

console.log("რაოდენობა:", count);

for (let i = messages.length - 1; i >= 0; i--) {
  if (messages[i].length > 15) {
    console.log(messages[i]);
  }
}

/////////////////////////////////

let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

let oddSum = 0;
let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log("ლუწი:", numbers[i]);
  } else {
    oddSum += numbers[i];
  }

  if (numbers[i] > max) {
    max = numbers[i];
  }

  if (numbers[i] < min) {
    min = numbers[i];
  }

  if (numbers[i] > 10 && numbers[i] < 25) {
    console.log("Special number");
  }
}

console.log("კენტი რიცხვების ჯამი:", oddSum);
console.log("უდიდესი:", max);
console.log("უმცირესი:", min);

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 3 === 0) {
    console.log("3-ის ჯერადი:", numbers[i]);
  }
}

/////////////////////////////////

let names = ["  goga ", "NIKA", "  ana  ", "Giorgi", "  mariam"];

let countNames = 0;

for (let i = 0; i < names.length; i++) {
  names[i] = names[i].trim();

  names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();

  if (names[i].toLowerCase().includes("a")) {
    countNames++;
  }

  if (names[i].toLowerCase() === "goga") {
    console.log("Hello Goga!");
  }
}

console.log("ასო a-ს შემცველი სახელები:", countNames);

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

/////////////////////////////////

let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

let sumScores = 0;
let avarage;
let failedStudents = 0;
let maxScore = scores[0];
let minScore = scores[0];
let highScores = [];
let moreThanAvarageScoreCount = 0;

for (let i = 0; i < scores.length; i++) {
  sumScores += scores[i];

  if (scores[i] > maxScore) {
    maxScore = scores[i];
  }

  if (scores[i] < minScore) {
    minScore = scores[i];
  }
}

avarage = sumScores / scores.length;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 90) {
    console.log(scores[i], "Excellent");
  } else if (scores[i] >= 70) {
    console.log(scores[i], "Good");
  } else if (scores[i] >= 50) {
    console.log(scores[i], "Passed");
  } else {
    console.log(scores[i], "Failed");
    failedStudents++;
  }

  if (scores[i] > 80) {
    highScores.push(scores[i]);
  }

  if (scores[i] > avarage) {
    moreThanAvarageScoreCount++;
  }
}

console.log("ჯამი:", sumScores);
console.log("საშუალო:", avarage);
console.log("ჩაჭრილების რაოდენობა:", failedStudents);
console.log("უმაღლესი ქულა:", maxScore);
console.log("უმცირესი ქულა:", minScore);
console.log("80-ზე მაღალი ქულები:", highScores);
console.log("საშუალოზე მაღალი ქულების რაოდენობა:", moreThanAvarageScoreCount);

for (let i = scores.length - 1; i >= 0; i--) {
  console.log(scores[i]);
}

/////////////////////////////////

let studentNames = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

let studentScores = [85, 42, 96, 67, 51, 73];

let failedCount = 0;
let totalScore = 0;
let highestScore = studentScores[0];
let highestName = studentNames[0];
let highScoresSum = 0;

for (let i = 0; i < studentNames.length; i++) {
  studentNames[i] = studentNames[i].trim();

  studentNames[i] =
    studentNames[i][0].toUpperCase() + studentNames[i].slice(1).toLowerCase();

  totalScore += studentScores[i];

  if (studentScores[i] >= 90) {
    console.log(studentNames[i], "Excellent");
  } else if (studentScores[i] >= 75) {
    console.log(studentNames[i], "Very Good");
  } else if (studentScores[i] >= 60) {
    console.log(studentNames[i], "Good");
  } else if (studentScores[i] >= 50) {
    console.log(studentNames[i], "Passed");
  } else {
    console.log(studentNames[i], "Failed");
    failedCount++;
  }

  if (studentScores[i] > 80) {
    highScoresSum += studentScores[i];
  }

  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
    highestName = studentNames[i];
  }
}

let averageScore = totalScore / studentScores.length;

console.log("ჩაჭრილები:", failedCount);
console.log("80-ზე მაღალი ქულების ჯამი:", highScoresSum);
console.log("უმაღლესი ქულის მქონე:", highestName);
console.log("უმაღლესი ქულა:", highestScore);
console.log("საშუალო ქულა:", averageScore);

for (let i = studentNames.length - 1; i >= 0; i--) {
  console.log(studentNames[i], studentScores[i]);
}

/////////////////////////////////

let products = [
  "Laptop",
  "Phone",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Headphones",
];

let pricesProducts = [2500, 1800, 80, 150, 900, 300];

let quantities = [3, 5, 20, 12, 4, 8];

let totalSales = 0;
let productsOver10 = 0;
let sales = [];

for (let i = 0; i < products.length; i++) {
  let salesAmount = pricesProducts[i] * quantities[i];

  sales.push(salesAmount);
  totalSales += salesAmount;

  if (salesAmount > 5000) {
    console.log(products[i], "High sales");
  } else if (salesAmount >= 1000) {
    console.log(products[i], "Medium sales");
  } else {
    console.log(products[i], "Low sales");
  }

  if (quantities[i] > 10) {
    productsOver10++;
  }
}

console.log("საერთო გაყიდვები:", totalSales);
console.log("10-ზე მეტი რაოდენობით გაყიდული პროდუქტები:", productsOver10);

for (let i = products.length - 1; i >= 0; i--) {
  console.log(products[i], sales[i]);
}
