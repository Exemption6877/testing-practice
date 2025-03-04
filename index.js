function capitalize(string) {
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

function reverseString(string) {
  let array = string.split("");
  return array.reverse().join("").toString();
}

const calculator = (function () {
  const add = (x, y) => {
    return x + y;
  };
  const subtract = (x, y) => {
    return x - y;
  };

  const divide = (x, y) => {
    return x / y;
  };

  const multiply = (x, y) => {
    return x * y;
  };
  return { add, subtract, divide, multiply };
})();

export { capitalize, reverseString, calculator };
