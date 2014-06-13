// ==UserScript==
// @name IRCTC Autofill
// @namespace http://cyburl.in/
// @version 0.1
// @description Opens all links in the CodeProject newsletter 
// @match https://nget.irctc.co.in/eticketing/trainbetweenstns.jsf
// @copyright 2014, Sahil Narula
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function(){
    var passengerNum = 1; 				//number of passengers
    var passengerName = "sahil Narula";	//passenger's name
    var passengerAge = "18";  				//passenger's age
    var passengerGender = "M";			//passenger's gender
    var berth = "";						//no preference, WS for window seat, SU for side upper
    var meal = "V";						//vegetarian
    var mobile = "9047625462";			//mobile number
    
    
    $('input[name="addPassengerForm:psdetail:0:psgnName"]').val(passengerName);
    $('input[name="addPassengerForm:psdetail:0:psgnAge"]').val(passengerAge);
    $('input[name="addPassengerForm:mobileNo"]').val(mobile);
    $('select option[value="'+passengerGender+'"]').attr('selected', 'selected');
    $('select option[value="'+meal+'"]').attr('selected', 'selected');
    $('select option[value="'+berth+'"]').attr('selected', 'selected');
    
});