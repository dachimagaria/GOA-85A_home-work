const numbers = [12, 25, 38, 41, 56, 63, 74, 89, 92, 105];

// 1. forEach()

numbers.forEach((number, index) => {
  console.log(`ინდექსი: ${index}, რიცხვი: ${number}`);
});

let sum = 0;

numbers.forEach((number) => {
  if (number % 2 === 0) {
    sum += number;
  }
});

console.log(sum);

// 2. map()

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const results = numbers.map((number, index) => number + index);
console.log(results);

// 3. filter()

const bigNumbers = numbers.filter((number) => number > 50);
console.log(bigNumbers);

const divisibleNumbers = numbers.filter(
  (number) => number % 2 === 0 && number > 30,
);
console.log(divisibleNumbers);

// 4. reduce()

const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

const maxNumber = numbers.reduce(
  (max, number) => (number > max ? number : max),
  numbers[0],
);
console.log(maxNumber);

// 5. find()

const firstBigNumber = numbers.find((number) => number > 80);
console.log(firstBigNumber);

const firstDivisibleBySeven = numbers.find((number) => number % 7 === 0);
console.log(firstDivisibleBySeven);

// 6. findIndex()

const firstBigIndex = numbers.findIndex((number) => number > 80);
console.log(firstBigIndex);

const firstOddIndex = numbers.findIndex(
  (number) => number % 2 !== 0 && number > 50,
);
console.log(firstOddIndex);

// 7. some()

const hasBigNumber = numbers.some((number) => number > 100);
console.log(hasBigNumber);

const hasDivisibleNumber = numbers.some((number) => number % 9 === 0);
console.log(hasDivisibleNumber);

// 8. every()

const allPositive = numbers.every((number) => number > 0);
console.log(allPositive);

const allAboveTen = numbers.every((number) => number > 10);
console.log(allAboveTen);
