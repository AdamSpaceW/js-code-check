
// THIS EXAMPLE SHOWS THE USAGE OF THE $() jQUERY FUNCTION
// NOTE THAT jQuery() AND $() ARE IDENTICAL.
// REQUIRES jquery.js

// http://api.jquery.com/jQuery/

// $(selector)
// WHERE selector IS A String WHICH DEFINES A SET OF HTML ELEMENTS TO SELECT
// RETURNS A jQuery OBJECT (similar to an array, with extra jQuery methods)
// IF selector MATCHES 0 OBJECTS ON THE PAGE, AN EMPTY Array [] IS RETURNED

$("input")
// SELECTS ALL HTML <input> TAGS
// RETURNS SOMETHING LIKE:
// [HTMLInputElement, HTMLInputElement, ...]

$("#header")
// SELECTS ALL TAGS WITH id="header"
// RETURNS SOMETHING LIKE:
// [HTMLElement]
// THE ARRAY SHOULD CONTAIN ONLY ONE ELEMENT, AS IDs ARE UNIQUE

$(".red-bg")
// SELECTS ALL TAGS WITH class="red-bg"
// RETURNS SOMETHING LIKE:
// [HTMLElement, HTMLElement, ...]

$("#header, #footer")
// SELECTS ALL TAGS WITH id="header" AND ALL TAGS WITH id="footer"
// RETURNS SOMETHING LIKE:
// [HTMLElement, HTMLElement]

$("div, .margin")
// SELECTS ALL <div> TAGS AND ALL TAGS WITH class="margin"
// RETURNS SOMETHING LIKE:
// [HTMLDivElement, HTMLElement, ...]

$("button.blue")
// SELECTS ALL <button> TAGS WITH class="blue"
// RETURNS SOMETHING LIKE:
// [HTMLButtonElement, HTMLButtonElement, ...]

$("#header .blue")
// SELECTS ALL TAGS WITH class="blue" WHICH ARE INSIDE TAGS WITH id="header"
// RETURNS SOMETHING LIKE:
// [HTMLElement, HTMLElement, ...]

$("#header *")
// SELECTS ALL TAGS INSIDE TAGS WITH id="header"
// RETURNS SOMETHING LIKE:
// [HTMLElement, HTMLElement, ...]

$('[attr_name="attr_value"]')
// SELECTS ALL TAGS WHERE THE attr_name ATTRIBUTE HAS THE VALUE attr_value
// RETURNS SOMETHING LIKE:
// [HTMLElement, HTMLElement, ...]

$("div:first")
// SELECTS THE FIRST <div> TAG
// RETURNS SOMETHING LIKE:
// [HTMLDivElement]

// OVERALL:
// USE A TAG NAME LIKE button TO MATCH ALL OF THESE TAGS
// USE A # FOLLOWED BY AN ID TO MATCH THE id="" ATTRIBUTE
// USE A . FOLLOWED BY A CLASS TO MATCH THE class="" ATTRIBUTE
// USE A * TO MATCH ALL TAGS
// USE THE [attr_name="attr_value"] SYNTAX TO MATCH THE attr_name ATTRIBUTE
// USE THE :filter SYNTAX TO FILTER THE RESULTS
// COMBINE TWO OR MORE OF THE ABOVE (LIKE #myid.myclass) TO SPECIFY SEVERAL RULES THAT MUST BE MATCHED
// USE A , TO ADD ANOTHER SELECTOR


// FOR MORE USES OF THE $() FUNCTION, LIKE $( function() { ... } )
// SEE: http://api.jquery.com/jQuery/

