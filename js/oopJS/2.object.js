class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `This Car ${this.make} Model ${this.model}`;
  }
}

let myCar1 = new Car("Toyota", "JAzz");
let myCar2 = new Car("Toyota", "Honda");
console.log(myCar1.getInfo());
