// const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];

// // 1
// const filteredScores = scores.filter((score) => score >= 60);
// console.log(filteredScores);

// // 2
// const addedScores = filteredScores.map((score) => score + 5);
// console.log(addedScores);

// // 3
// const finalScores = addedScores.filter((score) => score > 80);
// console.log(finalScores);

// // 4
// const sum = finalScores.reduce((total, score) => total + score, 0);
// console.log(sum);

// // 5
// console.log(scores.findIndex((score) => score === 100));

// // 6
// console.log(scores.some((score) => score < 30));

// // 7
// console.log(scores.every((score) => score > 20));

// // 8
// finalScores.forEach((score) => console.log(score));
// //////////////////////////////////////////////////////

// const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];


// // 1
// const filteredPrices = prices.filter((price) => price > 200);
// console.log(filteredPrices);

// // 2
// const reducedPrices = filteredPrices.map((price) => price - 50);
// console.log(reducedPrices);

// // 3
// const doubledPrices = reducedPrices.map((price) => price * 2);
// console.log(doubledPrices);

// // 4
// const priceSum = doubledPrices.reduce((total, price) => total + price, 0);
// console.log(priceSum);

// // 5
// console.log(prices.findIndex((price) => price > 500));

// // 6
// console.log(prices.some((price) => price > 1000));

// // 7
// console.log(prices.every((price) => price > 50));

// // 8
// doubledPrices.forEach((price) => console.log(price));
// //////////////////////////////////////////////////////////

// const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];

// // 1
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// // 2
// const multipliedNumbers = evenNumbers.map((number) => number * 3);
// console.log(multipliedNumbers);

// // 3
// const finalNumbers = multipliedNumbers.filter((number) => number > 50);
// console.log(finalNumbers);

// // 4
// const numberSum = finalNumbers.reduce((total, number) => total + number, 0);
// console.log(numberSum);

// // 5
// console.log(numbers.findIndex((number) => number > 20));

// // 6
// console.log(numbers.some((number) => number > 40));

// // 7
// console.log(numbers.every((number) => number > 0));

// // 8
// finalNumbers.forEach((number) => console.log(number));
// ////////////////////////////////////////////////////////////////


// const words = [
//   "javascript",
//   "html",
//   "programming",
//   "css",
//   "developer",
//   "react",
//   "computer",
//   "code",
//   "algorithm"
// ];

// // 1
// const filteredWords = words.filter(word => word.length > 5);
// console.log(filteredWords);

// // 2
// const upperWords = filteredWords.map(word => word.toUpperCase());
// console.log(upperWords);

// // 3
// const finalWords = upperWords.filter(word => word.length > 8);
// console.log(finalWords);

// // 4
// const totalLength = finalWords.reduce((total, word) => total + word.length, 0);
// console.log(totalLength);

// // 5
// console.log(words.findIndex(word => word.length > 8));

// // 6
// console.log(words.some(word => word.length > 10));

// // 7
// console.log(words.every(word => word.length >= 3));

// // 8
// finalWords.forEach(word => console.log(word));


// const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];

// // 1
// const filteredNumbers = numbers.filter(number => number > 20);
// console.log(filteredNumbers);

// // 2
// const addedIndex = filteredNumbers.map((number, index) => number + index);
// console.log(addedIndex);

// // 3
// const evenNumbers = addedIndex.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// // 4
// const doubledNumbers = evenNumbers.map(number => number * 2);
// console.log(doubledNumbers);

// // 5
// const sum = doubledNumbers.reduce((total, number) => total + number, 0);
// console.log(sum);

// // 6
// const maxNumber = doubledNumbers.reduce((max, number) => number > max ? number : max, doubledNumbers[0]);
// console.log(maxNumber);

// // 7
// console.log(numbers.findIndex(number => number > 60));

// // 8
// console.log(doubledNumbers.some(number => number > 200));

// // 9
// console.log(doubledNumbers.every(number => number % 2 === 0));

// // 10
// doubledNumbers.forEach(number => console.log(number));
/////////////////////////

// const scores = [
//   45, 88, 72, 96, 54, 100, 63, 81,
//   39, 92, 77, 68, 85, 49, 98, 59
// ];

// // 1
// const filteredScores = scores.filter(score => score >= 60);
// console.log(filteredScores);

// // 2
// const addedScores = filteredScores.map(score => score + 7);
// console.log(addedScores);

// // 3
// const highScores = addedScores.filter(score => score >= 80);
// console.log(highScores);

// // 4
// const adjustedScores = highScores.map((score, index) => score - index);
// console.log(adjustedScores);

// // 5
// const finalScores = adjustedScores.filter(score => score % 2 !== 0);
// console.log(finalScores);

// // 6
// const sum = finalScores.reduce((total, score) => total + score, 0);
// console.log(sum);

// // 7
// const average = sum / finalScores.length;
// console.log(average);

// // 8
// console.log(scores.findIndex(score => score > 90));

// // 9
// console.log(finalScores.some(score => score < 90));

// // 10
// console.log(finalScores.every(score => score > 70));

// // 11
// finalScores.forEach(score => {
//   console.log(score, score >= 80 ? "ჩააბარა" : "ვერ ჩააბარა");
// });


// const numbers = [
//   18, 45, 72, 91, 34, 120, 57, 86,
//   103, 64, 39, 150, 77, 98, 25, 132
// ];

// // 1
// const filteredNumbers = numbers.filter(number => number > 30);
// console.log(filteredNumbers);

// // 2
// const indexedNumbers = filteredNumbers.map((number, index) => number + index);
// console.log(indexedNumbers);

// // 3
// const evenNumbers = indexedNumbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// // 4
// const changedNumbers = evenNumbers.map(number => number % 2 === 0 ? number + 20 : number - 10);
// console.log(changedNumbers);

// // 5
// const finalNumbers = changedNumbers.filter(number => number > 100);
// console.log(finalNumbers);

// // 6
// const total = finalNumbers.reduce((sum, number) => sum + number, 0);
// console.log(total);

// // 7
// const averageNumber = total / finalNumbers.length;
// console.log(averageNumber);

// // 8
// const maxNumber = finalNumbers.reduce((max, number) => number > max ? number : max, finalNumbers[0]);
// console.log(maxNumber);

// // 9
// console.log(numbers.findIndex(number => number < 100 && number % 2 === 0));

// // 10
// console.log(numbers.some(number => number > 140));

// // 11
// console.log(finalNumbers.every(number => number > 100 && number % 2 === 0));

// // 12
// finalNumbers.forEach((number, index) => {
//   console.log(number, index, number > 200);
// });

// // 13
// console.log(numbers.length);
// console.log(finalNumbers.length);
// console.log(total);
// console.log(averageNumber);
