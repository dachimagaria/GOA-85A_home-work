function editProducts(products) {
    products.unshift("Phone");
    products.push("Headphones");
    products.pop();
    products.splice(1, 1, "Webcam");
    return products;
}

console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]));

////////////////////////////////////////////////

function organizeNumbers(numbers) {
    let first = numbers.slice(0, 4);
    let second = numbers.slice(4);

    second.unshift(100);
    first.push(5);

    return first.concat(second);
}

console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]));

////////////////////////////////////////////////

function studentManager(students) {
    students.shift();
    students.unshift("Mariam");
    students.push("Dato");
    students.splice(3, 1, "Gabrieli");

    return students.slice(0, 4);
}

console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]));

////////////////////////////////////////////////

function shoppingCart(cart) {
    cart.unshift("Water");
    cart.push("Chocolate");
    cart.shift();
    cart.splice(1, 1, "Yogurt");

    return cart.slice(0, 4);
}

console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]));

////////////////////////////////////////////////

function finalList(numbers) {
    if (!Array.isArray(numbers)) {
        return "Not an array";
    }

    numbers.shift();
    numbers.unshift(100);
    numbers.pop();
    numbers.push(200);
    numbers.splice(2, 0, 300);

    return numbers.slice();
}

console.log(finalList([15, 25, 35, 45, 55, 65]));

////////////////////////////////////////////////

function getStudent(students) {
    console.log(students[0][0]);
    console.log(students[1][1]);

    students[2][1] = 18;

    return students;
}

let students = [
    ["Giorgi", 18],
    ["Nika", 20],
    ["Luka", 17],
    ["Saba", 19]
];

console.log(getStudent(students));

////////////////////////////////////////////////

function updateProducts(products) {
    products[0][1] = 2300;
    products[2][1] = 100;
    products.splice(2, 0, ["Tablet", 900]);
    products.pop();

    return products;
}

let products = [
    ["Laptop", 2500],
    ["Phone", 1500],
    ["Mouse", 80],
    ["Keyboard", 120]
];

console.log(updateProducts(products));

////////////////////////////////////////////////

function manageStore(store) {
    console.log(store[0][1][1][0]);
    console.log(store[0][1][1][1]);
    console.log(store[0][1][1][2][1]);

    store[0][1][2][1] = 1000;
    store[0][1][0][2].push("White");
    store[1][1][0][2][2] = "Green";
    store[1][1][1][2].splice(1, 1);
    store[2][1][0][2].unshift("Red");
    store[2][1][2][2][1] = "Green";

    store[2][1].push(["New Balance", 450, ["Gray", "Black"]]);

    store[1][1].splice(2, 1);

    let electronics = store[0][1].slice();

    store[2][1] = store[2][1].concat([
        ["Reebok", 280, ["Black", "White"]]
    ]);

    return store;
}

console.log(manageStore(store));

////////////////////////////////////////////////

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

////////////////////////////////////////////////

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

////////////////////////////////////////////////

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

////////////////////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log("გოგა");
}

////////////////////////////////////////////////

for (let i = 20; i <= 50; i += 5) {
    console.log(i);
}

////////////////////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i, "გოგა");
}