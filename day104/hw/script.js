//1

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log("დავალება 1");
console.log("კამათელი 1:", dice1);
console.log("კამათელი 2:", dice2);

let sum = dice1 + dice2;

if (sum >= 10) {
    console.log("ძალიან კარგი შედეგია!");
} else if (sum >= 7) {
    console.log("კარგი შედეგია!");
} else {
    console.log("ცუდი შედეგია!");
}

if (dice1 === dice2) {
    console.log("დუბლი!");
}


//2

let hero = Math.floor(Math.random() * 21) + 20;
let monster = Math.floor(Math.random() * 21) + 15;

console.log("დავალება 2");
console.log("გმირის ძალა:", hero);
console.log("მონსტრის ძალა:", monster);

if (hero === 30) {
    hero += 10;
}

if (hero > monster) {
    console.log("გმირმა მოიგო!");
} else if (monster > hero) {
    console.log("მონსტრმა მოიგო!");
} else {
    console.log("ბრძოლა ფრედ დასრულდა!");
}


//3

let speed = Math.floor(Math.random() * 81) + 40;

console.log("დავალება 3");
console.log("სიჩქარე:", speed);

if (speed >= 40 && speed <= 60) {
    console.log("ნელა მიდის");
} else if (speed <= 90) {
    console.log("ნორმალური სიჩქარე");
} else if (speed <= 110) {
    console.log("სწრაფად მიდის");
} else {
    console.log("ძალიან სწრაფად მიდის");
}

if (speed === 100) {
    console.log("ზუსტად 100 კმ/სთ!");
}


//4

let box = Math.floor(Math.random() * 10) + 1;

console.log("დავალება 4");
console.log("არჩეული ყუთი:", box);

if (box >= 1 && box <= 3) {
    console.log("ცარიელი ყუთი");
} else if (box <= 6) {
    console.log("10 მონეტა");
} else if (box <= 8) {
    console.log("30 მონეტა");
} else if (box === 9) {
    console.log("50 მონეტა");
} else {
    console.log("100 მონეტა და ბონუსი!");

    let bonus = Math.floor(Math.random() * 5) + 1;

    if (bonus === 5) {
        console.log("სუპერ ბონუსი!");
    } else {
        console.log("ჩვეულებრივი ბონუსი!");
    }
}


//5

let player1 = Math.floor(Math.random() * 21) + 10;
let player2 = Math.floor(Math.random() * 21) + 10;

let defense1 = Math.floor(Math.random() * 10) + 1;
let defense2 = Math.floor(Math.random() * 10) + 1;

let score1 = player1 + defense1;
let score2 = player2 + defense2;

console.log("დავალება 5");

if (player1 === 20) {
    score1 += 5;
}

if (player2 === 20) {
    score2 += 5;
}

if (defense1 === 10) {
    score1 += 3;
}

if (defense2 === 10) {
    score2 += 3;
}

console.log("Player 1 ძალა:", player1);
console.log("Player 1 დაცვა:", defense1);
console.log("Player 1 საბოლოო ქულა:", score1);

console.log("Player 2 ძალა:", player2);
console.log("Player 2 დაცვა:", defense2);
console.log("Player 2 საბოლოო ქულა:", score2);

if (score1 > score2) {
    console.log("Player 1-მა მოიგო!");
} else if (score2 > score1) {
    console.log("Player 2-მა მოიგო!");
} else {
    console.log("ფრეა!");
}


//6

let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let num3 = Math.floor(Math.random() * 20) + 1;

console.log("დავალება 6");
console.log(num1);
console.log(num2);
console.log(num3);

if (num1 === num2 && num2 === num3) {
    console.log("ჯეკპოტი!");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("ორი ერთნაირი რიცხვი!");
} else {
    console.log("სამივე განსხვავებულია");
}

let total = num1 + num2 + num3;

if (total > 40) {
    console.log("დიდი ჯამი");
} else {
    console.log("პატარა ჯამი");
}


//7 

let player1Score = 0;
let player2Score = 0;

let p1round1 = Math.floor(Math.random() * 10) + 1;
let p1round2 = Math.floor(Math.random() * 10) + 1;
let p1round3 = Math.floor(Math.random() * 10) + 1;

let p2round1 = Math.floor(Math.random() * 10) + 1;
let p2round2 = Math.floor(Math.random() * 10) + 1;
let p2round3 = Math.floor(Math.random() * 10) + 1;

console.log("დავალება 7");

console.log("Player 1:", p1round1, p1round2, p1round3);
console.log("Player 2:", p2round1, p2round2, p2round3);

player1Score = p1round1 + p1round2 + p1round3;
player2Score = p2round1 + p2round2 + p2round3;

if (p1round1 === 10 || p1round2 === 10 || p1round3 === 10) {
    player1Score += 5;
}

if (p2round1 === 10 || p2round2 === 10 || p2round3 === 10) {
    player2Score += 5;
}

if (p1round1 > 5 && p1round2 > 5 && p1round3 > 5) {
    player1Score += 3;
}

if (p2round1 > 5 && p2round2 > 5 && p2round3 > 5) {
    player2Score += 3;
}

console.log("Player 1 საბოლოო ქულა:", player1Score);
console.log("Player 2 საბოლოო ქულა:", player2Score);

if (player1Score > player2Score) {
    console.log("Player 1-მა მოიგო!");
} else if (player2Score > player1Score) {
    console.log("Player 2-მა მოიგო!");
} else {
    console.log("ფრეა!");
}