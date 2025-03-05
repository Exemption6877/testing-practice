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

function caesarCipher(string, shift) {
  let result = [];
  for (let letter of string) {
    let ascii = letter.charCodeAt(0);
    let shiftedLetter = ascii + shift;
    if (letter === letter.toLowerCase() && ascii >= 97 && ascii <= 122) {
      if (shiftedLetter > 122) {
        let difference = shiftedLetter - 122;
        shiftedLetter = 96 + difference;
      } else if (shiftedLetter < 97) {
        let difference = 97 - shiftedLetter;
        shiftedLetter = 123 - difference;
      }
    } else if (letter === letter.toUpperCase() && ascii >= 65 && ascii <= 90) {
      if (shiftedLetter > 90) {
        let difference = shiftedLetter - 90;
        shiftedLetter = 64 + difference;
      } else if (shiftedLetter < 65) {
        let difference = 65 - shiftedLetter;
        shiftedLetter = 91 - difference;
      }
    } else {
      shiftedLetter = ascii;
    }
    result.push(String.fromCharCode(shiftedLetter));
  }
  return result.join("");
}

function analyzeArray(arr) {
  const total = arr.reduce((sum, element) => sum + element, 0);
  const length = arr.length;
  const average = total / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
