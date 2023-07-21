function regulator() {
  console.log("recordings", this.recordedSpeed);
  this.recordedSpeed = this.recordedSpeed.map((speed) => speed - speed * 0.1);
  return this.recordedSpeed;
}

class Car {
  constructor() {
    this.speed = 0;
    this.recordedSpeed = [];
  }

  async increaseSpeed() {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.#increase();
      }, 1000);
      resolve();
    });
  }

  async decreaseSpeed() {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.#decrease();
      }, 1000);
      resolve();
    });
  }

  #increase() {
    this.speed++;
    this.recordedSpeed.push(this.speed);
    console.log(`Increased speed: ${this.speed}!`);
  }

  #decrease() {
    this.speed--;
    this.recordedSpeed.push(this.speed);
    console.log(`decreased speed: ${this.speed}!`);
  }

  averageSpeed() {
    const sum = this.recordedSpeed.reduce((acc, speed) => acc + speed, 0);
    const average = sum / this.recordedSpeed.length;
    return average;
  }

  maxSpeedRecorded() {
    return Math.max.apply(null, this.recordedSpeed);
  }

  minSpeedRecorded() {
    return Math.min.apply(null, this.recordedSpeed);
  }

  adjustRecordings() {
    this.recordedSpeed = regulator.call(this);
  }

  getRecordings() {
    return this.recordedSpeed;
  }
}

const myCar = new Car();
myCar.increaseSpeed();
myCar.increaseSpeed();
myCar.increaseSpeed();
myCar.decreaseSpeed();
myCar.decreaseSpeed();
myCar.decreaseSpeed();
myCar.decreaseSpeed();
myCar.decreaseSpeed();
myCar.decreaseSpeed();
