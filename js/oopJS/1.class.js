class Car {
  contructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `This Car ${this.make} Model${this.model}`;
  }
}
