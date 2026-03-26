// console.log(x);
// console.log(y);
// console.log(z);

// var x = 10;
// let y = 20;
// const z = 30;

fruits = ["apple", "banana", "mango", "orange", "litchi"];
// Wap to display the individual inside fruits instance

// for(fruit of fruits)
//     console.log(fruit)

// ARROW FUNCTION
// const functionName = () => {}

// const displayOdd = (fruits) => {
//   for (let i = 0; i < fruits.length; i++) {
//     if (i % 2 == 0) {
//       console.log(fruits[i]);
//     }
//   }
// };

// displayOdd(fruits)

// USING MAP
// const mappedFruits = fruits.map((fruit) => {
//  fruit.toUpperCase()
// });

// console.log(mappedFruits);

numbers = [1, 10, 20, 30, 40];

// USING FILTER
// numbers.filter((e) => {
//   if (e < 20)
//     console.log(e);
// });

// fruits.filter((e, i) => {
//     if(i%2 == 0)
//         console.log(e)
// })

// console.log(fruits)
// console.log(...fruits) // spread operator
console.log([...fruits, ...numbers]);
