// javascript dynamic type Language
// primitive types
const a = 5;
const b = 'Sourav is a not smart boy';
const d = true;

// non primitive types
const age = [48, 33, 72, 19, 71];
const student = {
    id: 23,
    class: 7
}

// console.log(typeof a, typeof b, typeof age, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


let p = {
    job: 'Web Developer'
}

let q = p;
q.job = 'frontend Developer';
console.log(p, q);
