// 1
let number = 100;
let count = 0;

for (let i = 1; i <= number; i++) {
  console.log(i);

  if (i % 3 === 0) {
    console.log("3-ის ჯერადი:", i);
    count++;
  }
}

console.log("რაოდენობა:", count);

// 2
const numbers2 = [-5, 10, -2, 8, 0, 15, -7];

let positive = 0;
let negative = 0;
let zeros = 0;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    positive++;
  } else if (numbers2[i] < 0) {
    negative++;
  } else {
    zeros++;
  }
}

console.log("დადებითი:", positive);
console.log("უარყოფითი:", negative);
console.log("ნულები:", zeros);

// 3
const secretNumber = 7;
let guess = 1;

while (guess !== secretNumber) {
  guess++;
}

console.log("Correct number");

// 4
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

let j = 11;

do {
  console.log(j);
  j++;
} while (j <= 10);

// 5
function analyzeNumbers(numbers) {
  let sum = 0;
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return {
    sum: sum,
    even: even,
    odd: odd,
  };
}

console.log(analyzeNumbers([1, 2, 3, 4, 5, 6]));

// 6
const prices = [100, 250, 80, 400, 150];

function calculateDiscount(percent) {
  for (let i = 0; i < prices.length; i++) {
    let newPrice = prices[i] - (prices[i] * percent) / 100;
    console.log(newPrice);
  }
}

calculateDiscount(20);

// 7
function findDivisors(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

findDivisors(12);

// 8
function countVowels(text) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));

// 9
const numbers3 = [4, 8, 12, 25, 30, 40, 50];

for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] > 20) {
    console.log(numbers3[i]);
    break;
  }
}

// 10
function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

let sum = 100;

console.log(calculateSum(5));
console.log(sum);

// 11
const text = "JavaScript is fun and JavaScript is powerful";

function analyzeText(text) {
  let aCount = 0;
  let spaces = 0;
  let vowels = "aeiou";

  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);

    if (text[i].toLowerCase() === "a") {
      aCount++;
    }

    if (text[i] === " ") {
      spaces++;
    }

    if (vowels.includes(text[i].toLowerCase())) {
      console.log("ხმოვანი:", text[i]);
    }

    if (text[i] === " ") {
      console.log("პირველი გამოტოვება:", i);
      break;
    }
  }

  console.log("a ასოების რაოდენობა:", aCount);
  console.log("გამოტოვებების რაოდენობა:", spaces);

  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  console.log("უკუღმა:", reversed);
}

analyzeText(text);

// 12
function numberGame(secretNumber) {
  let guess = 1;
  let attempts = 0;

  while (true) {
    attempts++;

    if (guess === secretNumber) {
      console.log("You found it!");
      break;
    }

    if (guess < secretNumber) {
      guess++;
    }
  }

  return attempts;
}

console.log(numberGame(7));

// 13
let multiple3 = 0;
let multiple5 = 0;
let multipleBoth = 0;
let sum2 = 0;
let biggest7 = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 3 === 0) {
    multiple3++;
  }

  if (i % 5 === 0) {
    multiple5++;
  }

  if (i % 3 === 0 && i % 5 === 0) {
    multipleBoth++;
  }

  if (i % 3 !== 0 && i % 5 !== 0) {
    sum2 += i;
  }

  if (i % 7 === 0) {
    biggest7 = i;
  }
}

console.log("3-ის ჯერადი:", multiple3);
console.log("5-ის ჯერადი:", multiple5);
console.log("ორივეს ჯერადი:", multipleBoth);
console.log("ჯამი:", sum2);
console.log("ყველაზე დიდი 7-ის ჯერადი:", biggest7);

// 14
let number2 = 58374629;

let digits = 0;
let even2 = 0;
let odd2 = 0;
let sum3 = 0;
let max = 0;
let min = 9;
let greaterThan5 = 0;

while (number2 > 0) {
  let digit = number2 % 10;

  digits++;
  sum3 += digit;

  if (digit % 2 === 0) {
    even2++;
  } else {
    odd2++;
  }

  if (digit > max) {
    max = digit;
  }

  if (digit < min) {
    min = digit;
  }

  if (digit > 5) {
    greaterThan5++;
  }

  number2 = Math.floor(number2 / 10);
}

console.log("ციფრების რაოდენობა:", digits);
console.log("ლუწი:", even2);
console.log("კენტი:", odd2);
console.log("ჯამი:", sum3);
console.log("მაქსიმუმი:", max);
console.log("მინიმუმი:", min);
console.log("5-ზე მეტი:", greaterThan5);

// 15
let numbers4 = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];

let sum4 = 0;

for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] % 2 !== 0) {
    continue;
  }

  if (numbers4[i] > 50) {
    break;
  }

  console.log(numbers4[i]);
  sum4 += numbers4[i];
}

console.log("ჯამი:", sum4);

// 16
let balance = 1200;
let operations = [200, -150, -500, 300, -200, -1000, 400];

let withdrawals = 0;
let failed = 0;

for (let i = 0; i < operations.length; i++) {
  let operation = operations[i];

  if (operation > 0) {
    balance += operation;
  } else {
    if (balance >= Math.abs(operation)) {
      balance += operation;
      withdrawals++;
    } else {
      failed++;
    }
  }
}

console.log("საბოლოო ბალანსი:", balance);
console.log("შესრულებული გატანა:", withdrawals);
console.log("ვერ შესრულდა:", failed);

// 17
let numbers5 = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];

let max2 = numbers5[0];
let min2 = numbers5[0];
let sum5 = 0;

let even3 = 0;
let odd3 = 0;
let greater50 = 0;
let less50 = 0;

let maxEven = -Infinity;
let maxOdd = -Infinity;
let minEven = Infinity;
let minOdd = Infinity;

for (let i = 0; i < numbers5.length; i++) {
  let num = numbers5[i];

  sum5 += num;

  if (num > max2) max2 = num;
  if (num < min2) min2 = num;

  if (num > 50) {
    greater50++;
  } else if (num < 50) {
    less50++;
  }

  if (num % 2 === 0) {
    even3++;

    if (num > maxEven) maxEven = num;
    if (num < minEven) minEven = num;
  } else {
    odd3++;

    if (num > maxOdd) maxOdd = num;
    if (num < minOdd) minOdd = num;
  }
}

console.log("მაქსიმუმი:", max2);
console.log("მინიმუმი:", min2);
console.log("ჯამი:", sum5);
console.log("საშუალო:", sum5 / numbers5.length);
console.log("ლუწები:", even3);
console.log("კენტები:", odd3);
console.log("50-ზე მეტი:", greater50);
console.log("50-ზე ნაკლები:", less50);
console.log("ყველაზე დიდი ლუწი:", maxEven);
console.log("ყველაზე დიდი კენტი:", maxOdd);
console.log("ყველაზე პატარა ლუწი:", minEven);
console.log("ყველაზე პატარა კენტი:", minOdd);

// 18
let correctPin = 4821;
let attempts2 = [1234, 1111, 4821, 5555];

let wrongAttempts = 0;
let found = false;

for (let i = 0; i < attempts2.length; i++) {
  if (attempts2[i] === correctPin) {
    console.log("Access granted");
    found = true;
    break;
  } else {
    wrongAttempts++;
  }

  if (wrongAttempts === 3) {
    console.log("Card blocked");
    break;
  }
}

if (!found && wrongAttempts < 3) {
  console.log("Access denied");
}
