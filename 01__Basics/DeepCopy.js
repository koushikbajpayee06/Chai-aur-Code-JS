let userOne = {
  name: "Koushik",
  address: { city: "Kolkata", pin: 700001 }
};

let userTwo = structuredClone(userOne);

// console.log(userTwo);

userTwo.address.city = "Delhi";

console.log(userOne.address.city); 
