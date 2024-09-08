const parseCount = function (valueToParse) {
  if (Number.isNaN(valueToParse)) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(valueToParse);
  }
};

const validateCount = function (valueToParse) {
  try {
    parseCount(valueToParse.toFixed(2));
  } catch (error) {
    console.log(error);
  } finally {
    return validateCount(Number(valueToParse.toFixed(2)));
  }
};
