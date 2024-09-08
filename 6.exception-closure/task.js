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
    this.perimeter = 0;
    this.area = 0;

    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    ) {
      throw new Error("Треугольник с такими сторонами не существует.");
    }
  }

  get perimeter() {
    return this._perimeter;
  }
  set perimeter(value) {
    value = this.a + this.b + this.c;
    this._perimeter = value;
  }
  get area() {
    return this._area;
  }
  set area(value) {
    let p = this.perimeter * 0.5;
    value = Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    ).toFixed(3);
    this._area = value;
  }
}

const getTriangle = function (a, b, c) {
  try {
    const object = {
      get area() {
        return this._area;
      },
      get perimeter() {
        return this._perimeter;
      },
    };
    return object;
  } catch (error) {
    return getTriangle("Ошибка! Треугольник не существует!");
  }
};
