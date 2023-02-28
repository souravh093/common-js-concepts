function greeting(greetingHandler) {
    greetingHandler();
}
// const value = [34, 92, 91]
// const laptop = {price: 45000, brand: 'acer', memory: '4gb'}

function greetingHandler() {
    console.log('Good evening')
}

greeting(greetingHandler)