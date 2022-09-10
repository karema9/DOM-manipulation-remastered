/**
 * <------- Selecting the first element --------------->
 * const item = document.querySelector('h1');
 * item.textContent = "Incorporated";
 * console.log(item);s
 */

/**const div1 = document.querySelector('div');
 * console.log(div1.textContent);
*/

/** Selecting multiple elements with the same id
 * and displaying the items
 * */
const divs = document.querySelectorAll('div');
divs.forEach((div) => console.log(div.textContent));

/** Select element by class name*/
const element = document.querySelector('.red');
element.style.backgroundColor = 'blue';

/** Select element by id */
const item = document.querySelector('#two');
item.textContent = "I have changed";

/**
 * ADDING EVENT LISTENERS USING JAVASCRIPT
 */
