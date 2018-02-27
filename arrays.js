let a = [1, 2, 3, 4, 5];

let str = ['Sethu', 'Sona', 'Inesh', 'Adhrit'];

console.log(a[0]);
console.log(str[2]);
console.log(str);

a[0] = 100;
console.log(a);

// object
// each array element is an object
console.log(typeof a);

a[10] = 75;
console.log(a.length);

a.push(80);
console.log(a);

a.pop();
a.pop();
a.pop();
a.pop();

console.log(a);
console.log(a.length);