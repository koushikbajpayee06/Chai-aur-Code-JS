// Stack(Premitive) , Heap(Non-premitive)
let myYoutube = "koushikdotcom"
let anotherName = myYoutube;
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutube);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let user2 = userOne;
console.log(user2);
user2.email = "maradona@gmail.com"
console.log(user2);
console.log(userOne);
// Objects are stored in heap memory and variables hold their reference. 
// When we assign one object to another variable, both share the same reference. Any modification affects both variables.

/** 
    * In JavaScript, objects are stored in heap memory, and variables hold their reference.
    * Without the spread operator, assigning one object to another copies the reference, not the actual data. 
    * Any modification through one variable affects the other. The spread operator solves this problem by creating a new object.
    * 
    * The spread operator (...) is used to copy the properties of an object or the elements of an array into a new object or array. 
    * It helps create a new independent copy instead of sharing the same reference in memory.
*/