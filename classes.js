// declaration

class Car {
    constructor (make, model, year){
        this.make = make;
        this.model = model;    
        this.year = year;
    }

    print(){
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car('Toyota','Camry','2017');
myCar.print();

class SportsCar extends Car{
    revEngine() {
        console.log('Vrrroooom goes the ' + this.model);
    }
}

let mySportsCar = new SportsCar('Audi','Q5','2018');
console.log(mySportsCar.make + ' ' + mySportsCar.model + ' ' + mySportsCar.year);
mySportsCar.print();
mySportsCar.revEngine();
