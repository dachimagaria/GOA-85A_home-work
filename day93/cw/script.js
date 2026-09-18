let names = ["giorgi", "giga", "gabrieli", "saba", "nika", "gogita"]

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5 && names[i][0] === "g") {
    console.log(names[i])
  }
}
///////////////////////////////////////////////////////////

let numbers = [10, 25, 50, 101, 150, 77, 200, 33]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 || numbers[i] > 100) {
        console.log(numbers[i])
    }
}
// ///////////////////////////////////////////////

let names2 = ["გოგა", "საბა", "იოანე", "ნიკა", "გიორგი"]

for (let i = 0; i < names2.length; i++) {
    console.log((i + 1) + " " + names2[i])
}