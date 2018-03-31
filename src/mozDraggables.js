/** Holds draggable element reference. */
var dragged;
/** Determines copy or move behaviour. Requires a string of "copy" or "move". */
var copy_or_move_flag = "copy";
/** Determines if the dropped element can be dragged again. Requires a string of "true" or "false". */
var dropped_draggable_state = "false"
/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    var els = document.getElementsByClassName("dropzone");
    for(var i=0; i<els.length; i++){
        el = els[i];
        el.classList.add( "drag-start" );
    }
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
    var els = document.getElementsByClassName("dropzone");
    for(var i=0; i<els.length; i++){
        el = els[i];
        el.classList.remove( "drag-start" );
        el.classList.remove( "drag-enter" );
    }
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.classList.contains("dropzone") ) {
        event.target.classList.remove( "drag-start" );
        event.target.classList.add( "drag-enter" );
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.classList.contains("dropzone") ) {
        event.target.classList.remove( "drag-enter" );
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // copy dragged elem to the selected drop target
    if ( event.target.classList.contains("dropzone") ){
        if( copy_or_move_flag == "copy"){
            var copy = dragged.cloneNode(true);
            copy.setAttribute("draggable", dropped_draggable_state);
            copy.removeAttribute("id");
            copy.removeAttribute("class");
            copy.removeAttribute("style");
            event.target.appendChild(copy);
        }
        else if( copy_or_move_flag == "move"){
            dragged.setAttribute("draggable", dropped_draggable_state);
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
        }
    }

}, false);