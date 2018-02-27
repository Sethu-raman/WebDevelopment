// use "new" keyword to call constructor function

/*
let car = {
    make: 'Honda',
    model: 'CR-V',
    year: '2013'
};

function Car(make, model, year){
    this.make = make;
    this.model = model;    
    this.year = year;
}

let myCar = new Car('BMW', '745li', '2015');

console.log(myCar);
*/
function MyFunction(){
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction); 