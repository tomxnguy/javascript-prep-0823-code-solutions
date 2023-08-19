/* exported compact */

function compact(array) {
  const nonFalsyValues = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element) {
      nonFalsyValues.push(element);
    }
  }
  return nonFalsyValues;
}
