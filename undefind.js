/**
 * 8 ways to find undefined values
 */

// 1. variable that is not initialized will give undefined
let first ;
console.log(first);

// 2. function with no return will give undefined
function second(a, b) {
    const total = a + b;
}
const result = second(2, 9);
console.log(result);

// 3. parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 9);


// 4, if return has nothing on the right side will return undefined
function noNegative(a, b) {
    if(a < 0 || b < 0) {
        return // not defined
    }
    return a + b
}
const total = noNegative(2, -5);
console.log(total);


// 5. property that is not exists will give undefined
const fifth = {
    id: 2,
    name: 'foo',
    age: 34,
}
console.log(fifth.age, fifth.salary);

// 6. accessing array elements outside of the index range will give undefined
const sixth = [4, 92, 13, 93, 99];
console.log(sixth[1], sixth[5], sixth[200]);

// 7. deleting an element inside an array
const seventh = [4, 92, 13, 93, 99];
// You should no do it. Instead use splice 
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);

// set a value directly to undefined
const eighth = undefined;
const ninth = null;
const data = {
    results: [],
    updated: null
}

console.log(typeof undefined);
console.log(typeof null)


