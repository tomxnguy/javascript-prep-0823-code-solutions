const person = {
  firstName: 'Thomas',
  lastName: 'Nguyen',
  hobby: 'Hiking',
};

const fullName = person.firstName + ' ' + person.lastName;

console.log('This persons name is:', fullName + '.');

person.job = 'Student';

console.log('The persons current job is: ' + person.job + '.');

person['previousJob'] = 'EMT';

console.log("The person's previous job is: " + person['previousJob'] + '.');
console.log('The complete person object: ', person);
