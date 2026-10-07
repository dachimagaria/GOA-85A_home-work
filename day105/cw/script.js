// let names = ["Gio", "Nika", "Luka", "Ana", "Sandro", "Gabrieli"];

// names.forEach(function(name) {
//     if (name.length > 4) {
//         console.log(name);
//     }
// });


// ////////////////////////////////////////

// let numbers = [2, 5, 8, 7, 10, 13, 4, 9, 6];

// numbers.forEach(function(number, index) {
//     if (number % 2 !== 0 && index % 2 !== 0) {
//         console.log(number);
//     }
// })

////////////////////////////////////////////
let scores = [45, 78, 32, 90, 56, 84, 67];

let newScores = scores.map(score => {
    if (score < 60) {
        return score + 10;
    } else {
        return score + 5;
    }
});

console.log(newScores);
