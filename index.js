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

  return { add };
})();

export { capitalize, reverseString, calculator };
