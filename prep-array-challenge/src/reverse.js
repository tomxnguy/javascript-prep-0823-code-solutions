/* exported reverse */
function reverse(array) {
  const arraytoReturn = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arraytoReturn.push(array[i]);
  }
  return arraytoReturn;
}
