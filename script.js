
// Initialize variable for storing dragged item
let dragged;


// Add eventlistener on document for starting drag of element
document.addEventListener("dragstart", function( event ) {

    // store the dragged element in variable for use below
    dragged = event.target;

    // other changes for when drag starts
    event.target.style.opacity = .5;

}, false);


document.addEventListener("dragend", function( event ) {
    event.target.style.opacity = "";
}, false);


// Events fired when you drag your element over the target / destination
 document.addEventListener("dragover", function( event ) {

    // prevent default to allow drop, else chrome will activate as link
    event.preventDefault();
}, false);

// When dragged element enters destination box
document.addEventListener("dragenter", function( event ) {

    // highlight potential drop target when the draggable element enters it
    // if draggable item enters either of our divs with class name "box"
    if ( event.target.className == "box" ) {

        // chance bg color of div
        event.target.style.background = "#c8bdc9";
    }

}, false);

// if dragged item leaves drop area
document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "box" ) {
        event.target.style.background = "";
    }

}, false);


document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "box" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

        // dragged still references the item being dragged in the DOM,
        // which was captured in the first event up top
    }
}, false);
