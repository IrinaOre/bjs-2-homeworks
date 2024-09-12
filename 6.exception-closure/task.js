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
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter * 0.5;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    ).toFixed(3);
  }
}

const getTriangle = function (a, b, c) {
  let obj = {
    get area() {
      return "Ошибка! Треугольник не существует";
    },
    get perimeter() {
      return "Ошибка! Треугольник не существует";
    },
  };
  try {
    return obj;
  } catch (error) {
    return error;
  }
};
