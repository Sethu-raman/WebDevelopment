/*
let hi = () => { console.log('Howdy'); }
hi();

let hi = (name) => { console.log(`Howdy ${name}`); };
hi('Seth');

let add = (a, b) => { return a + b};
console.log(add(4, 5));
*/

let names = ['david', 'eddie', 'alex', 'michael'];
//let i = 0;
//names.map((name) => {i++; console.log(`Howdy ${name} ${i}`)});

var transformed = names.map((name) => { return `Howdy ${name}!`});
console.log(transformed);

