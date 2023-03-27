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


// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelectorAll("#result");
// console.log(resultPara)

// function CircleCalculate(radius) {
//     if(isNaN(radius)){
//         // update the textcontent or innertext property of the resultPara;
//         resultPara.textcontent = "This is not a number";
        
//     }
//     else {
//     let area = Math.PI * radius * radius;
//     return area;
//     }
// }
// let userValue = prompt("Enter a number:");
//     radiusPara.textContent += userValue;

// let result = CircleCalculate(userValue);
// if (result !== undefined) {
//     resultPara.textcontent = `The area of a circle with radius ${userValue} is ${Math.round(result)}`;
// }


const ulList = document.querySelector(".shopping")
function populateList(shoppinglistArray){
    // for each item in the shoppinglistArray, add a list item with its value to the ul
    for (let item of shoppinglistArray){
        // console.log(item)
        // make a new li
        const newList = document.createElement("li");
        newList.textContent = item;
        ulList.appendChild(newList);
        // update the li's text to item
        // append li to the ul
    }
}

let myShoppingList = ["cheese", "bread", "green pepper"]
populateList(myShoppingList);

function squareListMaker(){
    ulList.classList.add("squareList");
    ulList.classList.remove("circleList");
}
squareListMaker();

function updateImage(){
    const image = document.querySelector("#shoppingCart");
    image.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    );
    image.setAttribute("width", "50");
    image.setAttribute("height", "50");
    image.setAttribute("alt", "shopping cart");
}
updateImage()