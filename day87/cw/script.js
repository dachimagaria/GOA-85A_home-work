function printName() {
  console.log("Dachi Arkania")
}

printName()

/////////////////////////////////////////////////////////////////////


function introduce(name = "Dachi", age = 15, city = "Tbilisi") {
  console.log(
    `My name is ${name}, I am ${age} years old, and I live in ${city}.`,
  )
}

introduce("Giorgi")

introduce("Nika", 16)

introduce("Luka", 17, "Batumi")

introduce()
