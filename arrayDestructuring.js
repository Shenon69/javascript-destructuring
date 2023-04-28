const arr = [1, 2, 3];

//before es6 we assign the elements of the array to variables as below

let x = arr[0];
let y = arr[1];
let z = arr[2];

//after es6 we do it as below

const arr1 = [10, 20, 30];

let [a, b, c] = arr1;

console.log(a, b, c);

//skipping elemen when array destructuring

const arrValue = ["one", "two", "three"];

const [p, , r] = arrValue;

console.log(p, r);

//  assigni remaining elements to a single variable
//  we can assing the remaining elements to a variable using `...` (spread syntax)

const names = ["Shimmy", "Trish", "Shalani", "Shen"];

const [m, ...n] = names;

console.log(n);

//THE REST ELEMENT MUST BE THE LAST ELEMENT
