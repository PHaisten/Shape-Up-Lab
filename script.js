const MAX = 600;
let container = document.getElementById("container");
let buttonRec = document.getElementById("rectangle-button");
let buttonSq = document.getElementById("square-button");
let buttonCircle = document.getElementById("circle-button");
let buttonTriangle = document.getElementById("triangle-button");
let recHeight = 0;
let recWidth = 0;
let sqLength = 0;
let circleRadius = 0;
let heightTriangle = 0;

class Shape {
  constructor(x, y) {
    this.width = x;
    this.height = y;
  }
  draw() {
    this.div = document.createElement("div");
    this.div.classList.add("shape");
    let xVal = randomVal(this.width, MAX);
    let yVal = randomVal(this.height, MAX);
    this.div.style.top = `${yVal}px`;
    this.div.style.left = `${xVal}px`;
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
    container.appendChild(this.div);
  }
}

class Rectangle extends Shape {
  constructor(x, y) {
    super(recWidth, recHeight);
    this.draw();
    y = `${recHeight}px`;
    x = `${recWidth}px`;
    this.div.style.backgroundColor = `green`;
  }
}

class Square extends Shape {
  constructor(x, y) {
    super(sqLength, sqLength);
    this.draw();
    this.div.style.backgroundColor = `red`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);
    this.draw();
    this.div.style.borderRadius = `50%`;
    this.div.style.backgroundColor = `purple`;
  }
}

class Triangle extends Shape {
    constructor(hT) {
        super(0, 0);
        this.draw();
        this.div.style.borderBottom = `${hT}px yellow solid`;
        this.div.style.borderRight = `${hT}px solid transparent`;
    }
}

buttonRec.addEventListener("click", function() {
  recHeight = document.getElementById("rectangle-height").value;
  recWidth = document.getElementById("rectangle-width").value;
  new Rectangle(recWidth, recHeight);
});

buttonSq.addEventListener("click", function() {
  sqLength = document.getElementById("square-length").value;
  new Square(sqLength, sqLength);
});

buttonCircle.addEventListener("click", function() {
  circleRadius = document.getElementById("circle-radius").value;
  new Circle(circleRadius);
});

buttonTriangle.addEventListener("click", function() {
    heightTriangle = document.getElementById("triangle-height").value;
    new Triangle(heightTriangle);
  });

function randomVal(min, max) {
  if (min > 600) {
    return alert("That value is too large");
  } else {
    return Math.floor(Math.random() * (max - min));
  }
}
