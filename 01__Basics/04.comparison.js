console.log("2">1);

console.log(null>0)
console.log(null == 0);
console.log(null >= 0);
//The reason is than an equality check == and comparisons >, <, >=, <= works differently
//  Comparison converts null to a number, treating it as 0.
// Thats Why (3) null >= 0 is true and (1) null >0 is false

console.log(undefined > 0)
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2" === 2)