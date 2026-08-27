let score = 87

let result =
  score >= 90
    ? "Excellent"
    : score >= 75
      ? "Very Good"
      : score >= 60
        ? "Good"
        : score >= 40
          ? "Passed"
          : "Failed"

console.log(result)

//////////////////////////////////////////////////////////////////////////////

let age = 20;
let isStudent = true;

let result2 =
  age >= 65
    ? "Senior"
    : age < 18
      ? "Minor"
      : isStudent
        ? "Adult Student"
        : "Adult"

console.log(result2)

//////////////////////////////////////////////////////////////////////////////

let number = -14

let result3 =
  number > 0
    ? number % 2 === 0
      ? "Positive Even"
      : "Positive Odd"
    : number < 0
      ? "Negative"
      : "Zero"

console.log(result3)

//////////////////////////////////////////////////////////////////////////////

let username = "adminGoga"

let result4 =
  username === ""
    ? "Username is empty"
    : username.startsWith("admin")
      ? "Admin"
      : username.startsWith("user")
        ? "User"
        : "Unknown user"

console.log(result4)

//////////////////////////////////////////////////////////////////////////////

let temperature = 28

let result5 =
  temperature < 0
    ? "Freezing"
    : temperature <= 10
      ? "Cold"
      : temperature <= 20
        ? "Cool"
        : temperature <= 30
          ? "Warm"
          : "Hot"

console.log(result5)

//////////////////////////////////////////////////////////////////////////////

let a = 45
let b = 78
let c = 32

let biggest = a > b ? (a > c ? a : c) : b > c ? b : c

console.log(biggest)

//////////////////////////////////////////////////////////////////////////////

let day = 4

switch (day) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  case 7:
    console.log("Sunday")
    break
  default:
    console.log("Invalid day")
}

//////////////////////////////////////////////////////////////////////////////

let grade = "B"

switch (grade) {
  case "A":
    console.log("Excellent")
    break
  case "B":
    console.log("Very Good")
    break
  case "C":
    console.log("Good")
    break
  case "D":
    console.log("Passed")
    break
  case "F":
    console.log("Failed")
    break
  default:
    console.log("Invalid grade")
}

//////////////////////////////////////////////////////////////////////////////

let month = 8

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter")
    break

  case 3:
  case 4:
  case 5:
    console.log("Spring")
    break

  case 6:
  case 7:
  case 8:
    console.log("Summer")
    break

  case 9:
  case 10:
  case 11:
    console.log("Autumn")
    break

  default:
    console.log("Invalid month")
    
}

//////////////////////////////////////////////////////////////////////////////

let a2 = 20
let b2 = 5
let operator = "*"

switch (operator) {
  case "+":
    console.log(a2 + b2)
    break
  case "-":
    console.log(a2 - b2)
    break
  case "*":
    console.log(a2 * b2)
    break
  case "/":
    console.log(a2 / b2)
    break
  case "%":
    console.log(a2 % b2)
    break
  default:
    console.log("Invalid operator")
}
//////////////////////////////////////////////////////////////////////////////
