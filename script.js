/*
    - DOM stands for Document Object Model and it is what allows our javascript to interact with out HTML and CSS.
    - the DOM specifies how browsers should create a model of an HTML page and how javascript can access and update the contents of that web page while it's in the browser window
        -DOM is an object-oriented representation of a web page, which can be modified with a scripting language like javascript
        - the DOM does two primary things:

        1. Makes a model of an HTML page
        2. Access and manipulate the HTML page

        ACCESSING: 
            COMMON METHODS FOR ACCESSING A SINGLE ELEMENT:
                - getElementById() 
                    * if have multiple elements with the same ID, it will only access the first one
                - querySelector()

            COMMON METHODS FOR ACCESSING MULTIPLE ELEMENTS:
                - querySelectorAll()
                - getElementsByClassName()
                - getElementsByTagName()

        MANIPULATING DATA:
            COMMON METHODS FOR WORKING WITH HTML CONTENT:
                - innerHTML
                - textContent
                - createElement

            COMMON METHODS FOR WORKING WITH TAG ATTRIBUTES (class or ID)
                - className / id
                - setAttribute()
                - getAttribute()
*/  

// 1. TEST
let x = 10;
console.log(x);

// 2. getElementById
// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'blue';
console.log(testParagraph);

// 3. querySelectorAll(), innerText, innerHTML

console.log(document.querySelectorAll('p.sampleClass')); // querySelectorAll() returns a nodelist (which is an array) containing all elements that match the specified group of selectors.

document.querySelectorAll('p.sampleClass')[0].innerText = "our text has changed!";

let changeAll = document.querySelectorAll('p.sampleClass');

// innerText -------------------
// changeAll.forEach(pTag => {
//     pTag.innerText = "my text has changed using a forEach() method!"
// })

// or in this format
// changeAll.forEach(function(ptag) {
//     pTag.innerText = "my text has changed using a forEach() method!"
// })

// textContent -------------------

// changeAll.forEach(pTag => {
//     pTag.textContent = "my text has changed using a forEach() method!"
// })

changeAll.forEach(pTag => {
    pTag.innerHTML = "<i>my text has changed using a forEach() method!</i>"
})

/*
    - innerText references or allows us to change the text of a specified element. Will return only visible text in a node (not hidden text).
    - textContent does the same thing as innterText, but will return the FULL text of a node (including hidden text)
    - innerHTML allows us to set text as well as HTML elements, which will be nested inside ofthe current HTML element we're referencing.
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);

// 4. addEventListener() - click 
// document.getElementById('clickThisButton').addEventListener('click', event => {
//     // console.log(event);
//     event.target.style.backgroundColor = "blue";
// })

// document.getElementById('clickThisButton').addEventListener('click', function(event) {

// } )


// *** Ask about difference between having () after listener invocation ***

// document.getElementById('clickThisButton').addEventListener('click', listener); // function reference approach - fire off the function when the event happens; don't invoke the function immediately

// ** the first parameter passed to the function is the event
// function listener() {
//     console.log('the button has been clicked');
// }

/*

CHALLENGE

    - make the button toggle between red and blue when clicked

*/

document.getElementById('clickThisButton').addEventListener('click', event => {
    if(event.target.style.backgroundColor == "blue") {
     event.target.style.backgroundColor = "red"
    } else {
     event.target.style.backgroundColor = "blue"
    }
})


// 5. addEventListener() - keyup // getElementsByTagName()

// console.log(document.getElementsByTagName('p'));

document.getElementById('nameInput').addEventListener('keyup', event => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    document.getElementsByTagName('p')[0].innerText = 'SOMETHING CHANGED!'

    if(event.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'NOTHING HAS BEEN TYPED';
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${event.target.value}`
    }
})



