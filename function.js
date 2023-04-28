// const getPerson = () => {
//   return null;
// };

// const { firstName, lastname } = getPerson();

// console.log(firstName, lastName);

//this will throw an error...

//to avoid this we can use the OR operator(||) to fallback the null object to an empty object

const getName = () => {
  return null;
};

const { fName, lName } = getName() || {};

console.log(fName, lName);
