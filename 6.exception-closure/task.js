const parseCount = function (valueToParse) {
  if (isNaN(valueToParse)) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(valueToParse);
  }
};

const validateCount = function (valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch (error) {
    console.log(error);
  }
};
