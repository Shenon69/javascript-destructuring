let member = {
  id: 1,
  name: {
    firstName: "Shenon",
    lastName: "Phillipsz",
  },
};

let {
  id,
  name: { firstName, lastName },
  name,
} = member;

//if we want to declare both fname and lname in the name variable we have to declare it separately.

console.log(id);
console.log(firstName);
console.log(lastName);
console.log(name);
