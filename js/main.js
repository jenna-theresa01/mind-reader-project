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
    - onclick listener
        - 
    - jQuery??


 */

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
// need to figure out how to include the other two "Next" buttons
let next_btn = document.getElementById("next")
next_btn.addEventListener("click", nextButton);
function nextButton() {
    
    console.log("nextButton");
}

// this is adding a click event to my "Go" buttton
let reveal_btn = document.getElementById("reveal")
reveal_btn.addEventListener("click", revealButton);
function revealButton() {

    console.log("revealButton");
}