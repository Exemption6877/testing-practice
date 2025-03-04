function capitalize(string) {
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

function reverseString(string) {
  let array = string.split("");
  return array.reverse().join("").toString();
}

export default capitalize;
export { reverseString };
