// 1)შექმენით სია და შეიყვანეთ სახელები , შენი დავალებაა while loop იითაც და do while ითაც გამოიტანო სიის ისეთ ელემენტები რომლბის სიგრძე ნაკლებია 4 ზე

// 2)შექმენი სია სადაც მოათავსებ რიცხვებს , შენი დავალებაა რომ გადაუარო for ით ამ სიას და გააჩერო ლუპი მაშინ როდესაც შეხვდები 50 ზე მაღალ რიცხვს,გამოიტანე მანამ ყველა რიცხვი სანამ ასეთ რიცხვს იპოვი ,
// თუ ასეთ რიცხვს იპოვი break ამდე დააკონსოლე რომ num which is greater than 50 is found + NUM

let names = ["Giorgi", "Nika", "Dachi", "Ana"];

let i = 0;

while (i < names.length) {
    console.log(names[i]);
    i++;
}

let j = 0;

do {
    console.log(names[j]);
    j++;
} while (j < names.length);

///////////////////////////////

let numbers = [12, 25, 43, 67, 89, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
          console.log("NUM which is greater than 50 is found: " + numbers[i]);
        break;
    }
}       