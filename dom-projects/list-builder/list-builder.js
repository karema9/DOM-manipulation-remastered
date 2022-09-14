
const output = document.querySelector('.output');


// Create an input element
const myInput = createElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');

// Create a button element
const myBtn = createElement(output, 'button', 'main');
myBtn.setAttribute('type', 'btn');
myBtn.textContent = 'Add New +';

// create a list container
const container = createElement(output, 'ul', 'myList' );
/**
 * @param elementName the type fo the element to be created
 * @param parent the parent element, the created element is appended here
 * @param classAdd name of the target class to be added, a string
 */

function createElement(elementType,  parent, classAdd){
    const item = document.createElement(elementType);
    item.append(parent);
    item.classList.add(classAdd);
    return item;
}
