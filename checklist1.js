//problem declare variable using  const and let
const firstName = 'samia';
const lastName = 'Any';
let age = 26;
age = 25;
console.log(firstName,age);
//problem 2. template string
//a
const message = `My name is ${firstName} ${lastName}. I am ${age} years old`;
console.log(message);
//b use object
const person = {
    name : 'azizul hakim',
    address : 'Japan',
    company : 'walton',
    salary : 50000
}
const info = `${person.name} who is now working at walton.Yearly his income ${person.salary*12}`;

console.log(info);
