// let saxelebi = ["Dachi", "Gigi", "Nika", "Saba"]

// saxelebi.pop()

// saxelebi.push(true, "gigi")

// saxelebi.shift()

// saxelebi.unshift("avtomobili")

// console.log(saxelebi)
/////////////////////////////////////////////
let names = ["lasha", "ia", "ana", "saba", "goga"];

let numbers = [10, 20, 30, 40, 50];


let newArr = names.concat(numbers);


newArr.push(true);


newArr.shift();

console.log(newArr);


let newList = newArr.slice(3, 7);

console.log(newList);


console.log(Array.isArray(newList));