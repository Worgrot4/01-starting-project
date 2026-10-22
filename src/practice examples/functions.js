function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello('Israel')

function sayHi() {
    console.log("Hi!")
}

function sayHey(myFunc) {
    console.log("Hi!")
    myFunc()
}

sayHey(function() {
    console.log("Bye")
})

let expressionAdd = function(x, y) {
    return x+y
}
// same thing
let addArrow = (x,y) => {
    return x+y
}

let addArrowShort = (x,y) =>x+y

let squared = x => x*x