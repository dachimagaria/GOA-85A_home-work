////////////////////////////////////////////////////////////

const checkNumber = (number) => {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
};

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

////////////////////////////////////////////////////////////

const getGrade = function (score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getGrade(95));

////////////////////////////////////////////////////////////

const checkWord = (word) => {
  word = word.toLowerCase();

  if (word.startsWith("a")) {
    return "Starts with A";
  } else {
    return "Does not start with A";
  }
};

console.log(checkWord("Apple"));
console.log(checkWord("Banana"));

////////////////////////////////////////////////////////////

const analyzeNumbers = function (a, b, c) {
  return Math.max(a, b, c);
};

console.log(analyzeNumbers(15, 42, 27));

////////////////////////////////////////////////////////////

const analyzeText = (text) => {
  console.log(text.length);
  console.log(text.toUpperCase());
  console.log(text.startsWith("Hello"));
};

analyzeText("Hello World");

////////////////////////////////////////////////////////////

const calculatePrice = (price, discount) => {
  if (discount >= 50) {
    return "Discount too high";
  }

  if (discount < 0) {
    return "Invalid discount";
  }

  return price - (price * discount) / 100;
};

console.log(calculatePrice(100, 20));

////////////////////////////////////////////////////////////

const validatePassword = (password) => {
  if (
    password.length >= 8 &&
    password.includes("@") &&
    password[0] === password[0].toUpperCase()
  ) {
    return "Strong password"
  } else {
    return "Weak password"
  }
};

console.log(validatePassword("Hello@123"))

////////////////////////////////////////////////////////////

const validateUser = (username, age, password) => {
  if (username.length > 0 && age >= 18 && password.length >= 8) {
    return "User is valid"
  } else {
    return "User is invalid"
  }
};

console.log(validateUser("Dachi", 18, "Password123"))
