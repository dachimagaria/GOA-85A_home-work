let name = "Goga";

function first() {
  let age = 20;
  let city = "Tbilisi";

  function second() {
    console.log(name);
    console.log(age);
    console.log(city);
  }

  second();
  console.log(city);
}

first();

/////////////////////////////////////

let score = 100;
let message;

if (score > 50) {
  message = "Passed";
}

console.log(message);

/////////////////////////////////////

let x = 10;

function outer() {
  let x = 20;

  function middle() {
    let y = 30;

    function inner() {
      let x = 40;

      console.log(x);
      console.log(y);
    }

    inner();
  }

  middle();
}

outer();

/////////////////////////////////////

let country = "Georgia";

function school() {
  let students = 20;

  if (students > 10) {
    let teacher = "Goga";

    console.log(country);
    console.log(students);
    console.log(teacher);
  }
}

school();
