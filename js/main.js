/* 
Start 
    "i can read your mind front screen"
    go button
switch screen (without changing the page)
    "Pick a number screen"
        next button
        reset button
        "when you have number click next"
    "Add digits to get new number"
        next button
        reset button 
        example below next button
    "Subtract new number from original"
        next button
        reset button
        example and directions
    "find new number and corresponding symbol"
        symbols page
        reveal button
        reset button
    symbol page (mind read)
        reset button
End
*/

/* Functions I might want to use
    - window.onload function
        - 
    - addEventListener for the next and reset buttons
        - oncuechange?? fires a TextTrack has changed the currently displaying cues 
        - "click event"
    - a funtion to switch between "pages" without refreshing the webpage and using a button 
        -toggle (hide/show) an element
    - onclick listener
        - 


 */
// can I use this to show the first "page" on content? 
window.onload = (event) => {
    console.log("page is loaded");
} 

// this is adding a click event to my "Go" buttton
let go_btn = document.getElementById("go")
go_btn.addEventListener("click", myFunction);
function myFunction() {
    console.log("myFunction");
}

// this is adding a click event to my *first* "Next" buttton
// need to figure out how to include the other two "Next" buttons (got it)

// following function works, but now I need to make something happen, ie changing the page

/*
let next_btn = document.getElementsByClassName("next");

let other_btn = function() {
    let attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (let i = 0; i < next_btn.length; i++) {
    next_btn[i].addEventListener('click', other_btn);

    console.log("nextButton");
};
*/

let next1_btn = document.getElementById("next1")
next1_btn.addEventListener("click", next1Button);
function next1Button() {

    console.log("next1Button");
}

// this is adding a click event to my "reveal" buttton
let reveal_btn = document.getElementById("reveal")
reveal_btn.addEventListener("click", revealButton);
function revealButton() {

    console.log("revealButton");
}

// this is hiding all the pages except the first one
function hide(elements) {
    elements = elements.length ? elements : [elements];
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = 'none';
    };
};

hide(document.querySelectorAll("#page2, #page3, #page4, #page5, #page6"));

// now I want to be able to toggle between the pages using the buttons on the screen 
document.getElementById("go").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page2"));
  });
  

function toggle (elements, specifiedDisplay) {
    let element, index;

    elements = elements.length ? elements : [elements];
    for (let index = 0; index < elements.length; index++) {
        element = elements[index];

        if (isElementHidden(element)) {
            element.style.display = '';

            if (isElementHidden(element)) {
                element.style.display = specifiedDisplay || "block";
            }
        } else {
            element.style.display = "none";
        }
        function isElementHidden (element) {
            return window.getComputedStyle(element, null).getPropertyValue("display") === "none"
        }
    }
}

document.getElementById("next1").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page3"));
});

document.getElementById("next2").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page4"));
});

document.getElementById("next3").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page5"));
});

document.getElementById("reset1").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page1"));
});

document.getElementById("reset2").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page1"));
});

document.getElementById("reset3").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page1"));
});

document.getElementById("reset4").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page1"));
});

document.getElementById("reset5").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page1"));
});

document.getElementById("reveal").addEventListener('click', function () {
    toggle(document.querySelectorAll("#page6"));
});


// document.addEventListener("DOMContentLoaded", function(){

    let newArray = Array.from({length: 100}, (value, index) => index);

    // reference the container where I want to display the array
    let outputList = document.getElementById('arrayContainer');
    // let arrayContainer = document.getElementById("arrayContainer");

    // create a <ul> element to hold the list item
    let ul = document.createElement("ul");

    // loop through the array and create <li> elements for each item
    newArray.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item; // set the text content of the <li> element to the array item
         // append the <li> elemnt to the <ul>
        // append the <ul> to the html document
       outputList.appendChild(li);
    //    .appendChild(ul);
    });

   let iconArray = [
    "🎼",
    "🎧",
    "🎸",
    "💽",
    "📻",
    "🎶",
    "🎹",
    "🎻",
    "🎺",
    "🎷",

   ];
   console.log(iconArray);

 


//    const unsanitized_array = "newArray" + "iconArray";

//    const sanitizer1 = new Sanitizer();

//    document
//    .getElementById("arrayContainer")
//    .setHTML(unsanitized_array, {Sanitizer: sanitizer1});
    
// });

console.log(newArray);


// let arrayElement = document.createElement("newArray");
// document.append(newArray);










