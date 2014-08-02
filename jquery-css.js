
// EXAMPLES OF THE jQuery.css() jQUERY METHOD
// REQUIRES jquery.js

// http://api.jquery.com/css/


// jQuery.css(prop)
// GETS THE VALUE ASSIGNED TO THE CSS PROPERTY GIVEN IN prop
// WHERE prop IS A String
// RETURNS A String LIKE "900px" OR "center"
// RETURNS undefined IF NO ELEMENTS HAVE BEEN MATCHED OR IF prop IS NOT SET

$("html").css("height")
// GETS THE HEIGHT OF THE html ELEMENT
// RETURNS SOMETHING LIKE:
// "1400px"

$("#header").css("background-color")
// GETS THE BACKGROUND COLOR OF THE ELEMENT WITH id="header"
// RETURNS SOMETHING LIKE:
// "rgb(255,255,255)"

$("#btn").css("text-align")
// GETS THE TEXT ALIGNMENT OF THE ELEMENT WITH id="btn"
// RETURNS SOMETHING LIKE:
// "left"


// jQuery.css(prop, value)
// SETS THE CSS prop PROPERTY TO value
// WHERE prop IS A String AND value IS A String OR A Number
// RETURNS THE ORIGINAL jQuery OBJECT

$("html").css("height", 500);
// SETS THE HEIGHT OF THE html ELEMENT TO 500 PIXELS

$("html").css("height", "500px");
// EQUIVALENT TO EXAMPLE ABOVE

$("html").css("height", "+=50");
// INCREASES THE HEIGHT OF THE html ELEMENT BY 50 PIXELS

$("div, .red").css("color", "#f00");
// SETS THE TEXT COLOUR OF ALL div ELEMENTS AND ELEMENTS WITH class="red" TO RED (#f00)

$("#header").css("font-size", "24px").css("color", "#00f");
// SETS THE FONT SIZE OF THE id="header" ELEMENT TO 24 PIXELS, AND THEN SETS ITS TEXT COLOUR TO BLUE (#00f)


// SEE http://api.jquery.com/css/ FOR MORE
