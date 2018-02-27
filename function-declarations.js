function sayHello(name) {
    console.log('---------------------------');
    console.log('Hello ' + name + '!');
    console.log('----------------------------');
}

sayHello('Sona');

let a = sayHello;
a('Inesh');

function calculateTax(amount){
    let result = amount * 0.075;
    return result;
}

let tax = calculateTax(100);
console.log(tax);