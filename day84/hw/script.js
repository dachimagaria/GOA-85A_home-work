let name = "Goga"
let surname = "Beridze"
let age = 15
let adress = "Tbilisi"

console.log(`Hello, my name is ${name}, my surname is ${surname} and my age is ${age} age, I live in ${adress}.`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let text = "Hello"
let number = 25
let isStudent = true
let something
let person = {}

console.log(typeof text)
console.log(typeof number)
console.log(typeof isStudent)
console.log(typeof something)
console.log(typeof person)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let name = "Goga"

if (name.startsWith("G")) {
    console.log("Name starts with G")
} else {
    console.log("Name does not start with G")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let word = "JavaScript"

if (word.startsWith("Java")) {
    console.log("This word starts with Java")
} else {
    console.log("This word does not start with Java")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let name = "Goga"
let city = "Tbilisi"

console.log(`My name is ${name} and I live in ${city}.`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let username = "admin123"
let name = "Goga"

if (username.startsWith("admin")) {
    console.log(`Welcome, ${name}! You are an admin.`)
} else {
    console.log(`Welcome, ${name}! You are a regular user.`)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let name = "Goga"
let username = "teacher123"

if (username.startsWith("teacher")) {
    console.log(`Hello ${name}, you are a teacher.`)
} else {
    console.log(`Hello ${name}, you are a student.`)
}