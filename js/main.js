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
let next_btn = document.getElementsByClassName("next");

let other_btn = function() {
    let attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (let i = 0; i < next_btn.length; i++) {
    next_btn[i].addEventListener('click', other_btn);

    console.log("nextButton");
};




// this is adding a click event to my "Go" buttton
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
    }
}

hide(document.querySelectorAll("#page2, #page3, #page4, #page5, #page6"));

// now I want to be able to toggle between the pages using the buttons on the screen 
