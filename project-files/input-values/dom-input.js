/**
 * CONTENTS:
 * -----------------------------------------------------------------------
 * selecting a DOM element
 * creating a new DOM element
 * adding text to the existing DOM element
 * appending new element to parent element
 * -------------------------------------------------------------------------
 */

/** Select an element from the DOM tree */
const output = document.querySelector('.output');

/** Create a DOM element */
const myInput = document.createElement('input');
const message = document.createElement('div');
const myBtn = document.createElement('button');


/** Append the created element to the output class */
output.append(myInput);
output.append(message);
output.append(myBtn);

/** Adding a value to the input element */
myInput.value = "Hasta pronto";
message.textContent = "Ola";
myBtn.textContent = "DANGER!!!";

/** Add event listener to button */
myBtn.addEventListener('click', (e)=>{
    message.value = myInput.value ;
    myInput.value = " ";
})

/** ---------------------------------------------------------------- *
 * JAVASCRIPT SYNTACTIC SUGAR - ELEGANCE
 ---------------------------------------------------------------------*/

// using a function to eliminate the repeated statement

function createElement (elementType, parent){
    const cont = document.createElement(elementType);
    parent.append(cont);
    return cont;
}


