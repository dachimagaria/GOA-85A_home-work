////////////////////////////

function calculatePrice(price, quantity = 1) {
  return price * quantity;
}

console.log(calculatePrice(20));
console.log(calculatePrice(15, 3));
console.log(calculatePrice(50, 2));

////////////////////////////

function getResult(name, score = 0) {
  if (score >= 90) {
    return `${name}: Excellent`;
  } else if (score >= 70) {
    return `${name}: Good`;
  } else if (score >= 50) {
    return `${name}: Passed`;
  } else {
    return `${name}: Failed`;
  }
}

console.log(getResult("Goga", 95));
console.log(getResult("Dachi", 80));
console.log(getResult("Nika", 60));
console.log(getResult("Luka", 40));
console.log(getResult("Ana"));

////////////////////////////

calculateShipping(price, (shipping = 10));

function calculateShipping(price, shipping = 10) {
  if (price >= 100) {
    return price;
  } else {
    return price + shipping;
  }
}

console.log(calculateShipping(150));
console.log(calculateShipping(80));
console.log(calculateShipping(70, 20));

////////////////////////////

function checkAge(name, age = 18) {
  if (age >= 18) {
    return `${name} is adult`;
  } else {
    return `${name} is minor`;
  }
}

console.log(checkAge("Goga", 18));
console.log(checkAge("Dachi", 15));
console.log(checkAge("Nika", 20));
console.log(checkAge("Luka", 12));

////////////////////////////

function addPoints(score, points = 10) {
  return score + points;
}

console.log(addPoints(50));
console.log(addPoints(70, 20));
console.log(addPoints(100, 5));

////////////////////////////

function createMessage(name, message = "Hello") {
  if (message === "Hello") {
    return `Hello, ${name}!`;
  } else {
    return `${message}, ${name}!`;
  }
}

console.log(createMessage("Goga"));
console.log(createMessage("Goga", "Welcome"));

////////////////////////////

function calculateDiscount(price, discount = 10) {
  return price - discount;
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(200, 30));

////////////////////////////

function convertTemperature(value, type = "C") {
  if (type === "C") {
    return (value * 9) / 5 + 32;
  } else {
    return ((value - 32) * 5) / 9;
  }
}

console.log(convertTemperature(20));
console.log(convertTemperature(68, "F"));

////////////////////////////

function calculateSalary(salary, bonus = 0) {
  if (salary < 1000) {
    return salary + bonus * 2;
  } else {
    return salary + bonus;
  }
}

console.log(calculateSalary(800, 100));
console.log(calculateSalary(1500, 200));
console.log(calculateSalary(900));

////////////////////////////

function checkExam(name, score = 0) {
  switch (true) {
    case score >= 90 && score <= 100:
      return `${name}: Excellent`;

    case score >= 75 && score <= 89:
      return `${name}: Very Good`;

    case score >= 60 && score <= 74:
      return `${name}: Good`;

    case score >= 50 && score <= 59:
      return `${name}: Passed`;

    case score >= 0 && score <= 49:
      return `${name}: Failed`;
  }
}

console.log(checkExam("Goga", 95));
console.log(checkExam("Dachi", 80));
console.log(checkExam("Nika", 65));
console.log(checkExam("Luka", 55));
console.log(checkExam("Gio", 40));
console.log(checkExam("Ana"));

////////////////////////////

function ticketPrice(age, price = 50) {
  if (age < 5) {
    return 0;
  } else if (age >= 5 && age <= 12) {
    return price * 0.5;
  } else if (age >= 13 && age <= 59) {
    return price;
  } else {
    return price * 0.3;
  }
}

console.log(ticketPrice(4, 50));
console.log(ticketPrice(10, 50));
console.log(ticketPrice(25, 50));
console.log(ticketPrice(65, 50));
console.log(ticketPrice(20));

////////////////////////////

function analyzeNumber(number, limit = 100) {
  return number < 0
    ? "Negative"
    : number === 0
      ? "Zero"
      : number < limit
        ? "Small positive"
        : "Large positive";
}

console.log(analyzeNumber(-10));
console.log(analyzeNumber(0));
console.log(analyzeNumber(50));
console.log(analyzeNumber(150));
console.log(analyzeNumber(200, 50));
