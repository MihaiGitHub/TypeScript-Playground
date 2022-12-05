class Vehicle {
  constructor(public color: string) {}

  // by default these methods are public, but can also put public in front
  drive(): void {
    console.log("Chugga chugga");
  }

  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  // no public modifier for color here because it is in parent class
  constructor(public wheels: number, color: string) {
    // reference to the parent constructor and must pass parent required arguments
    super(color);
  }

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

const car = new Car(4, "Red");
car.startDriving();

const vehicle = new Vehicle("Orange");
console.log(vehicle.color);
