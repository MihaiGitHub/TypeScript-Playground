class Vehicle {
  drive(): void {
    console.log("Chugga chugga");
  }

  honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  // if want method to be diferent than parent class, just redefine in child class
  drive(): void {
    console.log("Vroom");
  }
}

const car = new Car();
car.drive();
car.honk();
