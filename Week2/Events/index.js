function display() {
    alert('wlcome to my page')
}

// // Assign a event using Dom property

// //get the h1 element using any method
// const h1Element = document.querySelector("h1");

// const h1 = document.querySelector("h1");

// function addNums() {
//     alert("adding nums" + 30 + 20)
// }

// h1.oncopy = addNums;

// function displayH1Welcome() {
//     alert("Welcome to my page")
// }

// // add a click event to the h1 element
// h1Element.onclick = displayH1Welcome; // Note we assign "displayH1Welcome" not "displayH1Welcome()"

// // add a double click event to the h1 element
// h1.ondblclick = function () {
//     h1.innerText = "Welcome to my page";
// }

// // // Access an element property using "this"
// h1.oncopy = function () {
//     alert("You copied the text " + this.innerText);
// }




// // Assign event with Listeners

// // This helps us assign more than one event to an element
 const p1Element = document.querySelector("p");

// // add a click event to the p element
// p1Element.addEventListener("click", () => {
//     alert("You clicked on the paragraph")
// });

// // add a double click event to the p element
 p1Element.addEventListener("dblclick", function () {
    p1Element.innerText = "I have changed this text";
 }); // 
