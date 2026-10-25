const person = {
  name: "Dachi",
  surname: "Arkania",
  age: 15,
  hobby: "Gaming",

  "საყვარელი საჭმელი": "ხინკალი",
  "ფავორიტი ავტომობილი": "BMW",
  "სასწავლო საგანი": "JavaScript"
};


console.log(person.name);
console.log(person.surname);
console.log(person.age);
console.log(person.hobby);


console.log(person["საყვარელი საჭმელი"]);
console.log(person["ფავორიტი ავტომობილი"]);
console.log(person["სასწავლო საგანი"]);


console.log(person);