//Getting Elements by Id

/**
 * The getElementById() method is one of the most common methods in the HTML DOM.
 * The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. 
 * It is used almost every time you want to read or edit an HTML element.  
*/  
const search = document.getElementById('search-books')
const bookList = document.getElementById('book-list')

console.log(search, bookList)

//Getting Elements By Class or Tag

/**
 * The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
 * When called on the document object, the complete document is searched, including the root node. 
 * This is a live HTMLCollection. Changes in the DOM will reflect in the array as the changes occur. If an element selected by this array no longer qualifies for the selector, it will automatically be removed.
 */
const titles = document.getElementsByClassName('title')

console.log(Array.isArray(titles))//Checking if the titles is an array
console.log(Array.isArray(Array.from(titles)))//Making titles an array

Array.from(titles).forEach(function(title){//Turning titles into an array and passing through each function of title
  console.log(title);//and returning it
})


// The Query Selector

/**
 * The querySelector() method returns the first element that matches a CSS selector.
 * To return all matches (not only the first), use the querySelectorAll() instead.
 * Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.
*/

const wmf = document.querySelector('#book-list li:nth-child(2) .name')// Here querySelector is used to select the book The Wise Men's Fear(wmf)
// querySelector selects the book-list id; second child; and the name span tag
console.log(wmf)

var books = document.querySelector('#book-list li .name')// getting name tag from li from id=book-list
console.log(books)

/** querySelectorAll() 
 * The querySelectorAll() method returns all elements that matches a CSS selector(s).
 * The querySelectorAll() method returns a NodeList.
 * The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid
 */

books = document.querySelectorAll('#book-list li .name')
console.log(books)

Array.from(books).forEach(function(book){
  console.log(book)
})


// Changing Text And HTML Contents

/** 
 * The innerHTML property sets or returns the HTML content (inner HTML) of an element.
*/

const books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach(function(book){
  book.textContent += ' (Book title)'// adding test content
})

const booksList = document.querySelector('#book-list')// Selecting the booklist query
booksList.innerHTML = '<h2>Books and more books...</h2>'// returning the heading in the html document as the updated heading
booksList.innerHTML += '<p>This is how you add HTML content</p>' // returning the paragraph in the html document as the updated paragraph

// NODE in DOM 

/**
 * Adding and Removing Nodes (HTML Elements)
 * To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.
 */

const banner = document.querySelector('#page-banner')//selecting the id pagebanner

console.log('#page-banner node type is:', banner.nodeType)//returns the type of the node
console.log('#page-banner node name is:', banner.nodeName)// returns the name of the node
console.log('#page-banner has child nodes:', banner.hasChildNodes())//The hasChildNodes() method returns true if the specified node has any child nodes, otherwise false.

const clonedBanner = banner.cloneNode(true)// The cloneNode() method creates a copy of a node, and returns the clone.
console.log(clonedBanner)
