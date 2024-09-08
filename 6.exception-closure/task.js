const parseCount = function (valueToParse) {
  if (!Number.parseFloat(valueToParse)) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(valueToParse);
  }
};
// console.log(parseCount("66hh86"));

const validateCount = function (valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch (error) {
    return error;
  }
};
