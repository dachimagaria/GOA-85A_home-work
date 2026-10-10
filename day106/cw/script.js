// 1) რა არის filter?
// filter() გამოიყენება მასივიდან იმ ელემენტების შესარჩევად,
// რომლებიც მოცემულ პირობას აკმაყოფილებენ.

// 2)
let ages = [20, 15, 40, 53, 12, 32, 17, 18, 19, 33, 29, 85, 67];

let minors = ages.filter((age) => age < 18);
let adults = ages.filter((age) => age >= 18);

console.log(minors);
console.log(adults);

// 3)
let numbers = [25, 111, 921, 321, 432, 545, 133, 987, 436];

let newNumber = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 13;
  } else {
    return num * 16;
  }
});

let onlyEven = newNumber.filter((num) => num % 2 === 0);

console.log(newNumber);
console.log(onlyEven);
