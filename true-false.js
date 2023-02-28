/**
 * Truthy
 * 1. true
 * 2. any number positive and negative truthy other than zero
 * 3. any string truthy other than empty string
 * 4. '0', 'false
 * 5. empty object
 * 6. empty array
 *
 * Falsy
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */

let x = [];
if (x) {
  console.log("Value of x is truthy");
} else {
  console.log("Value of x is falsy");
}

// optional
// check falsy
const y = "";
if (!y) {
  console.log("check falsy");
}

// check truthy
const z = " ";
if (!!z) {
    console.log('Value is truthy');
}
