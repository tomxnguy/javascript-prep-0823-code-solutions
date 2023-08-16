// create your loops here.
function whileLoop1() {
  const array = [];
  let index = 0;
  while (index < 10) {
    array.push(index);
    index++;
  }
  return array;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let index = 0;
  while (index < 20) {
    array.push(index);
    index += 2;
  }
  return array;
}

console.log('whileLoop2', whileLoop2());

function forLoop1() {
  const array = [];
  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time til explosion' + index + '!');
  }
}

forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1', forInLoop1(object));

function forinLoop2(object) {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}

console.log('forinLoop2', forinLoop2(object));
