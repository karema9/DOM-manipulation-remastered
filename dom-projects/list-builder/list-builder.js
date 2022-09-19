// select div element from the DOM tree
const output = document.querySelector('.output');

// create a function to create a DOM element
function createElement(tag, parent, className){
    const ele = document.createElement(tag);
    parent.append(ele);
    ele.classList.add(className);
    return ele;
}

// Create an input element
const myInput = createElement('input', output, 'my-input');
myInput.setAttribute('text','text');

// Create a button element
const myBtn  = createElement('button', output, 'ny-btn');
myBtn.textContent = "Add User +";

// create an unordered-list container
const myList = createElement('ul', output, 'my-list');


// add an event listener to the button that adds the userName
/**
 *
 * MASTER THIS SECTION
 *
myBtn.addEventListener('click', (e)=>{
    console.log('click');
    let userName = myInput.value;
    if(userName.length > 3)
        const li = addUser(userName);
        myInput.value = ' ';
})

function addUser(userName){
    const li = createElement('li', myList, 'my-list');
    li.textContent = userName;
    return li;
}

*/