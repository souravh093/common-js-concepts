if ([] == true) {
    console.log('true')
}else {
    console.log('false')
}

if (true === 'true') {
    console.log('true')
}else {
    console.log('false')
}

const doSome = number => {
    if (isNaN(number)) {
        return true;
    }else {
        return false;
    }
}

const showNumber = doSome('hello');
console.log(showNumber)