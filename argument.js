function sub(a, b, c) {
    console.log(arguments)
    const args = [...arguments]
    console.log(args);
  const result = a + b + c;
  return result;
}
const showResult = sub(3, 9, 10);
console.log(showResult)