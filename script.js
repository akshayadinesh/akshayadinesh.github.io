/*
A. competitive
B. rational and wise
C. caring  
D. adventurous
*/

function mySubmit() {
    var competitive=0,rational=0,caring=0,adventurous=0;
    
    switch($('input[name="1"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="2"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="3"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="4"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="5"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="6"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="7"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="8"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="9"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    switch($('input[name="10"]:checked').val()) {
        case 'a':competitive++;break;
        case 'b':rational++;break;
        case 'c':caring++;break;
        case 'd':adventurous++;break;
    }
    
    var max = Math.max(competitive,rational,caring,adventurous);
    if (competitive===0 && rational===0 && caring===0 && adventurous===0) {
        alert("You didn't enter anything! Please enter your answers.");
    } else {
    if(max===competitive) {
        window.location="competitive.html";
    } else if(max===rational) {
        window.location="rational.html";
    } else if(max===caring) {
        window.location="caring.html";
    } else if(max===adventurous) {
        window.location="adventurous.html";
    }
    }
};