/* exported initial */
function initial(array) {
  const arraytoReturn = [];
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    arraytoReturn[k] = array[i];
    k++;
  }
  return arraytoReturn;
}
