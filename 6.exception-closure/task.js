const parseCount = function (valueToParse) {
  const parsedValue = Number.parseFloat(valueToParse);
  if (!parsedValue) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
};

const validateCount = function (valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch (error) {
    return error;
  }
};

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует.");
    }
  }

  get perimeter() {
    return this._perimeter;
  }
  set perimeter(value) {
    value = a + b + c;
    this._perimeter = value;
  }
  get area() {
    return this._area;
  }
  set area(value) {
    let p = this.perimeter * 0.5;
    value = Number(Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
    this._area = value;
  }
}
const triangle = new Triangle();
// console.log(triangle);

const getTriangle = function (a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return new Triangle("Ошибка! Треугольник не существует");
  }
};
