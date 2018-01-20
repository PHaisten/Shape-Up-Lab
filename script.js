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
let getRec = document.getElementsByClassName("rectangle");
let getSquare = document.getElementsByClassName("sqaure");
let getCircle = document.getElementsByClassName("circle");
let getTriangle = document.getElementsByClassName("triangle");
let shapeText = document.getElementById("shape-click");
let shapeHeight = document.getElementById("height-click");
let shapeWidth = document.getElementById("width-click");
let shapeRadius = document.getElementById("radius-click");
let shapeArea = document.getElementById("area-click");
let shapePerimeter = document.getElementById("perimeter-click");

class Shape {
  constructor(x, y) {
    this.width = x;
    this.height = y;
  }
  draw() {
    this.div = document.createElement("div");
    let xVal = randomVal(this.width, MAX);
    let yVal = randomVal(this.height, MAX);
    this.div.style.top = `${yVal}px`;
    this.div.style.left = `${xVal}px`;
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
    container.appendChild(this.div);
    this.div.addEventListener("click", () => {
      this.describe();
    });
    this.div.addEventListener("dblclick", () => {
        this.remove();
    })
  }
  describe() {
    let shapeValue = this.div.className;
    let heightValue = this.div.offsetHeight;
    let widthValue = this.div.offsetWidth;
    shapeText.innerHTML = `Shape: ${shapeValue}`;
    shapeHeight.innerHTML = `Height: ${heightValue}px`;
    shapeWidth.innerHTML = `Width: ${widthValue}px`;
  }
  remove() {
      this.div.remove();
  }
}

class Rectangle extends Shape {
  constructor(x, y) {
    super(recWidth, recHeight);
    this.draw();
    y = `${recHeight}px`;
    x = `${recWidth}px`;
    this.div.style.backgroundColor = `green`;
    this.div.classList.add("Rectangle");
    this.div.addEventListener("click", () => {
      this.describe();
      let recRadius = "N/A";
      let recArea = recWidth * recHeight;
      let recPeri = recWidth * 2 + recHeight * 2;
      shapeArea.innerHTML = `Area: ${recArea}`;
      shapeRadius.innerHTML = `Radius: ${recRadius}`;
      shapePerimeter.innerHTML = `Perimeter: ${recPeri}`;
    });
  }
}

class Square extends Shape {
  constructor(x, y) {
    super(sqLength, sqLength);
    this.draw();
    this.div.style.backgroundColor = `red`;
    this.div.classList.add("Square");
    this.div.addEventListener("click", () => {
      this.describe();
      let sqRadius = "N/A";
      let sqArea = sqLength * sqLength;
      let sqPeri = sqLength * 4;
      shapeRadius.innerHTML = `Radius: ${sqRadius}`;
      shapeArea.innerHTML = `Area: ${sqArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${sqPeri}`;
    });
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);
    this.draw();
    this.div.style.borderRadius = `50%`;
    this.div.style.backgroundColor = `purple`;
    this.div.classList.add("Circle");
    this.div.addEventListener("click", () => {
      this.describe();
      let cirArea = Math.floor(Math.PI * (radius * radius));
      let cirPeri = Math.floor(2 * (Math.PI * radius));
      shapeRadius.innerHTML = `Radius: ${radius}`;
      shapeArea.innerHTML = `Area: ${cirArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${cirPeri}`;
    });
  }
}

class Triangle extends Shape {
  constructor(hT) {
    super(hT, hT);
    this.draw();
    this.div.style.height = "0";
    this.div.style.width = "0";
    this.div.style.borderBottom = `${hT}px yellow solid`;
    this.div.style.borderRight = `${hT}px solid transparent`;
    this.div.classList.add("Triangle");
    this.div.addEventListener("click", () => {
      this.describe();
      let triRadius = "N/A";
      let triArea = 0.5 * hT * hT;
      let triPeri = 2 * hT + Math.sqrt(2) * hT;
      shapeRadius.innerHTML = `Radius: ${triRadius}`;
      shapeArea.innerHTML = `Area: ${triArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${triPeri}`;
    });
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
