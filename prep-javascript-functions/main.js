function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const hoursResult = convertHoursToMinutes(2);

console.log('convertHourstoMinutes:', hoursResult);

function getGreeting(name) {
  return '"Hello' + ' ' + name + '!"';
}

const greeting = getGreeting('world');

console.log('getGreeting:', greeting);

function addAndMultiplyby5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyby5Results = addAndMultiplyby5(10, 5);

console.log('addAndMultiplyby5:', addAndMultiplyby5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResults = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const getCircleCircumferenceResults = getCircleCircumference(5);

console.log('getCircleCircumference:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameResults = getFullName('Thomas', 'Nguyen');

console.log('getFullName:', getFullNameResults);

function cube(number) {
  return number * number * number;
}

const cubeResults = cube(5);

console.log('cube:', cubeResults);
