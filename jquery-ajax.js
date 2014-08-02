
// EXAMPLES OF THE jQuery.ajax() METHOD
// NOTE THAT jQuery.ajax() IS IDENTICAL TO $.ajax()
// REQUIRES jquery.js

// http://api.jquery.com/jQuery.ajax/

// jQuery.ajax(url, settings)
// OR jQuery.ajax(settings)
// WHERE url IS A String CONTAINING THE URL TO REQUEST
// WHERE settings IS AN OPTIONAL Object WITH FIELDS DESCRIBED HERE:
// http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
// SENDS A REQUEST TO THE SPECIFIED url
// RETURNS A jqXHR OBJECT REPRESENTING THE RESPONSE

$.ajax("/script/to/request.php");
// SENDS A GET REQUEST TO /script/to/request.php BUT DOESN'T SPECIFY OTHER OPTIONS

$.ajax({
	url: "/script/to/request.php"
});
// IDENTICAL TO THE EXAMPLE ABOVE

$.ajax("/script/to/request.php?id=14");
// SENDS A GET REQUEST TO /script/to/request.php, INCLUDING "id=14" AS THE REQUEST DATA

$.ajax({
	url: "/script/to/request.php",
	type: "GET",
	data: "id=14"
});
// IDENTICAL TO THE EXAMPLE ABOVE

$.ajax({
	url: "/script/to/request.php",
	type: "POST",
	data: "id=14"
});
// SENDS A POST REQUEST TO /script/to/request.php, INCLUDING "id=14" AS THE REQUEST DATA

$.ajax({
	url: "/script/to/request.php",
	type: "POST",
	data: {
		id: "14"
	}
});
// IDENTICAL TO THE EXAMPLE ABOVE

$.ajax({
	url: "/script/to/request.php",
	type: "POST",
	data: {
		id: "14",
		time: "15:48",
		message: "hello"
	}
});
// SENDS MORE THAN ONE VARIABLE TO /script/to/request.php

// NOTE THAT NONE OF THE EXAMPLES ABOVE PROCESS THE RESPONSE DATA


// http://api.jquery.com/deferred.done/

// jqXHR.done(callback, ...)
// WHERE callback IS ONE OR MORE FUNCTIONS TO BE EXECUTED IF THE REQUEST SUCCEEDS, IN THE FORM:
// function(data, status, jqXHR), WHERE ALL ARGUMENTS ARE OPTIONAL
// SPECIFIES THE ACTION TO BE DONE WHEN THE jqXHR REQUEST SUCCEEDS
// RETURNS THE ORIGINAL jqXHR OBJECT

$.ajax("/text/to/request.txt").done(function() {
	alert("Request succeeded!");
});
// ALERTS "Request succeeded!" IF THE REQUEST SUCCEEDS

$.ajax("/text/to/request.txt").done(function(data) {
	alert(data);
});
// ALERTS THE CONTENTS OF /text/to/request.txt IF THE REQUEST SUCCEEDS

$.ajax({
	url: "/my-script.php",
	type: "POST",
	data: {
		id: "23",
		message: "this is a message"
	}
}).done(function(data) {
	if(data == "OK") {
		window.location.reload();
	} else {
		$("#error").html(data);
	}
});
// SENDS THE GIVEN DATA TO /my-script.php VIA A POST REQUEST AND RELOADS THE PAGE IF THE RESPONSE IS "OK"
// OTHERWISE, IT PRINTS THE RESPONSE IN THE id="error" ELEMENT


// http://api.jquery.com/deferred.fail/

// jqXHR.fail(callback, ...)
// WHERE callback IS ONE OR MORE FUNCTIONS TO BE EXECUTED IF THE REQUEST SUCCEEDS, IN THE FORM:
// function(jqXHR, status, error), WHERE ALL ARGUMENTS ARE OPTIONAL
// SPECIFIES THE ACTION TO BE DONE WHEN THE jqXHR REQUEST FAILS
// RETURNS THE ORIGINAL jqXHR OBJECT

$.ajax("/text/to/request.txt").fail(function() {
	alert("Request failed!");
});
// ALERTS "Request failed!" IF THE REQUEST FAILS

$.ajax({
	url: "/text/to/request.txt"
}).done(function(data) {
	alert(data);
}).fail(function(jqXHR, status) {
	alert(status);
});
// ALERTS THE CONTENTS OF /text/to/request.txt IF THE REQUEST SUCCEEDS
// OR THE STATUS CODE IF THE REQUEST FAILS
