/*
A. Technology
B. Business
C. Arts
D. Healthcare
*/

function mySubmit() {
    var tech=0,business=0,art=0,health=0;
    
    switch($('input[name="1"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    
    switch($('input[name="2"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="3"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="4"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="5"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="6"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="7"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="8"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="9"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    switch($('input[name="10"]:checked').val()) {
        case 'a':tech++;break;
        case 'b':business++;break;
        case 'c':art++;break;
        case 'd':health++;break;
    }
    
    var max = Math.max(tech,art,business,health);
    if (tech===0 && art===0 && business===0 && health===0) {
        alert("You didn't enter anything! Please enter your answers.");
    } else {
    if(max===tech) {
        window.location="tech.html";
    } else if(max===art) {
        window.location="arts.html";
    } else if(max===business) {
        window.location="business.html";
    } else if(max===health) {
        window.location="health.html";
    }
    }
};