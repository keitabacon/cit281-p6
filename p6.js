class Shape {
    constructor(sides = []) {
      this.sides = sides;
    }
  
    perimeter = () => this.sides.length ? this.sides.reduce((sum, side) => sum + side) : 0;
  }
class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
      super([length, width, length, width]);
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  }

  class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
      super([sideA, sideB, sideC]);
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    area() {
      const s = (this.sideA + this.sideB + this.sideC) / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  }

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of data) {
  let shape = null;

  switch (sides.length) {
    case 1:
      console.log('Shape with 1 side unsupported');
      break;
    case 2:
      shape = new Rectangle(...sides);
      console.log(`Rectangle with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
      break;
    case 3:
    shape = new Triangle(...sides);
      console.log(`Triangle with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
      break;
    default:
        console.log('Shape with 0 sides unsupported');
      
  }
}

  
