// function greet(username) {
//     console.log(`Hello ${username}`)
// }
// greet('Juls')

// let greet = function(name) {
//     console.log(`Hello ${name}`)
// }
// greet("Neda")
// greet("John")


// let greet = (name) => {
//     console.log(`Hello ${name}`);
// }

// function greet(username, time = 'day') {
//     console.log(`Good ${time} ${username}!`);
// }
// greet('Juls')


function CircleCalculate(radius) {
    if(isNaN(radius)){
        alert("This is not a number");
    }
    else {
    let area = Math.PI * radius * radius;
    return area;
    }
}
let userValue = prompt("Enter a number:");
let result = CircleCalculate(userValue);
if (result !== undefined) {
    alert(`The area of a circle with radius ${userValue} is ${Math.round(result)}`)
}