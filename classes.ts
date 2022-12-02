class Vehicle {
  // by default these methods are public, but can also put public in front
  drive(): void {
    console.log("Chugga chugga");
  }

  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  // if want method to be diferent than parent class, just redefine in child class
  // but can not change the type of the parent
  private drive2(): void {
    console.log("Vroom");
  }

  startDriving(): void {
    this.drive2();
    this.honk();
  }
}

const car = new Car();
car.startDriving();
