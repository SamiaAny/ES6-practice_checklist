//problem 5 
/** take array of number  and then map to get each element multiplied by 5 must use arrow function in one line */
const arrNumber = [2,3,4,5,6,7,35];
const multiplyNumber = arrNumber.map(arr => arr * 5);
console.log(multiplyNumber);

// for(let i=0;i < arrNumber.length;i++) {
//     if(arrNumber[i]%2) {
//         console.log(arrNumber[i]);
//     }
// }

// problem 6
/** take number of array get odd number by using filter with arrow function */

const oddArray = arrNumber.filter(oddNum => oddNum % 2);
console.log(oddArray);

//problem 7
/** you will have an array of object(e.g. products) use find to get the object with price 5000 */

const products = [
    {name : 'laptop',price : 50000,model : 'hp'},
    {name : 'mobile',price : 5000,model : 'realme'},
    {name : 'headphone',price : 800,model: 'xiomi'},
    {name : 'microphone',price : 5000,model: 'rdxoo'}
];
// const {price} = products;
const result = products.find(prod => prod.price==5000);
console.log(result);

//problem 8 & 9
/** you have an array now use distructuring to create a simple or more variable to  get thhird element of the array in a variable called three */

const person = {
    name : 'anten hol',
    salary : 5000,
    education : 'BSC',
    experience : 1
}

const {salary} = person;

console.log(salary);

const number = [3,54,23,65];
// const [first,second,third] = number;
const [,,third] = number;
console.log(third);

//problem 10
/** just write a function with three parameter and the last parameter will have a default parameter with value 7 this function will take 3 parameter and will return the sum of all parameter */

function sum(a,b,c=7) {
    return a+b+c;
}

console.log(sum(12,3));

