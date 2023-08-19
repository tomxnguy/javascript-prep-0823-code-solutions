/* exported tail */
function tail(array) {
  const arraytoReturn = [];
  let k = 0;
  for (let i = 1; i < array.length; i++) {
    arraytoReturn[k] = array[i];
    k++;
  }
  return arraytoReturn;
}
