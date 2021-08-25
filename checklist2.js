//problem 3
/** use single parameter will return the number after dividing by 5  */

const getNumber = n => n / 5;
console.log(getNumber(40));

/** with 2 parameter will add two to each parameter and then multiply the result */

// const doubleSum = (a,b) => { return (a+2)*(b+2);};
const doubleSum = (a,b) => (a+2) * (b+2);
console.log(doubleSum(3,4));

/** with three parameter will multiply all three parameter */
const multiplyNumbers = (a,b,c) => a*b*c;
console.log(multiplyNumbers(1,2,3));

/** with 2 parameter will add two to each parameter and then multiply the result it will be a multiline arrow function */

const doubleResult = (x,y) => {
    x = x+2;
    y = y+2;
    z = x * y;//problem
    return z;
}

console.log(doubleResult(3,4));

