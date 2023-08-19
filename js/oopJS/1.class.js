// class Car {
//   contructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getInfo() {
//     return `This Car ${this.make} Model${this.model}`;
//   }
// }

// =====
class Car {
  name = "Odong odong";
  color = "Black kadut";
  constructor(merek) {
    this.name = merek;
  }
  melaju() {
    return `This is a ${this.name}`;
  }
}
const mobil = new Car("Truck");
console.log(mobil.melaju());
