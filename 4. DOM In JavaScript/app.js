/**
 * The getElementById() method is one of the most common methods in the HTML DOM.
 * The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. 
 * It is used almost every time you want to read or edit an HTML element.  
*/  
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList)

//Getting Elements By Class or Tag

/**
 * The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
 * When called on the document object, the complete document is searched, including the root node. 
 * This is a live HTMLCollection. Changes in the DOM will reflect in the array as the changes occur. If an element selected by this array no longer qualifies for the selector, it will automatically be removed.
 */
const titles = document.getElementsByClassName('title')