// const product = {
//   productName: "Laptop",
//   price: 1500,
//   quantity: 3,
//   inStock: true,

//   allProdPrice() {
//     return this.price * this.quantity;
//   },

//   isStock() {
//     return this.inStock
//       ? "yes we have this product"
//       : "no we dont have this product";
//   },
// };

// console.log(product.allProdPrice());
// console.log(product.isStock());

let university = {
  name: "Tbilisi University",
  address: {
    city: "Tbilisi",
    building: {
      number: 10,
      floors: 6,
    },
  },
  department: {
    name: "Computer Science",
    students: ["Nika", "Ana", "Gio", "Mariam"],
    teacher: {
      name: "Luka",
      subjects: ["JavaScript", "Python", "React"],
    },
  },
  library: {
    books: {
      programming: ["JavaScript Basics", "Learn Python"],
      databases: ["SQL Guide", "MongoDB Basics"],
    },
  },
};

console.log(university.address.building.number);

university.address.city = "Qutaisi";

delete university.address.building.floors;

console.log(university.department.teacher.subjects[1]);

university.department.teacher.subjects.push("C++");

university.department.teacher.name = "Dachi";

delete university.library.books.programming;

let databases = university.library.books.databases;

for (let i = 0; i < databases.length; i++) {
  if (databases[i].length > 10) {
    console.log(databases[i]);
  }
}
