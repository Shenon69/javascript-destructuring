//normally we would access the properties as below

let person = {
  firstName: "Shenon",
  lastName: "Phillipsz",
};

let personFname = person.firstName;
let personLname = person.lastName;

console.log(personFname);
console.log(personLname);

//after es6 we can access them as below

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

//we can also RENAME the properties in the object

let { firstName: fName, lastName: lName } = person;

console.log(fName);
console.log(lName);

//what happens if we destructure a property that dose not exist

let letters = {
  a: 10,
  c: 30,
};

let { a, b, c } = letters;

console.log(b); // undefined

//setting default values when destructuring

let dog = {
  name: "Tommy",
  breed: "Labradog",
  age: 2,
};

//in this we mean, if that property dose not exist use this default value
let { name, breed, favFood = "rice", age: currentAge = 1 } = dog;

console.log(favFood);
console.log(currentAge);
