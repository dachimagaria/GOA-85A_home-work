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
