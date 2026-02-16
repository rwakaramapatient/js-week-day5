console.log("Day 5 start");
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {
    if (b === 0){
        return null;
    }
    else {
        return a/b;
    }
}
const calcDiscount =(price,percent) => {
    const discount = (percent/100)*price;
    const newPrice = price - discount;
    return {newPrice , discount}}
console.log( add(1,2));
console.log( add(4,2));
console.log( subtract(2,1));
console.log( subtract(3,1));
console.log( multiply(1,2));
console.log( multiply(1,3));
console.log( divide(1,0));
console.log( divide(6,3));
console.log( calcDiscount(100,2));
console.log( calcDiscount(500,4));