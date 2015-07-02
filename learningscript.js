/*
A. visual
B. audio
C. notes
D. hands-on
*/

function mySubmit() {
    var visual=0,audio=0,notes=0,handson=0;
    
    switch($('input[name="1"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    
    switch($('input[name="2"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="3"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="4"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="5"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="6"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="7"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="8"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="9"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    switch($('input[name="10"]:checked').val()) {
        case 'a':visual++;break;
        case 'b':audio++;break;
        case 'c':notes++;break;
        case 'd':handson++;break;
    }
    
    var max = Math.max(visual,audio,notes,handson);
    if (visual===0 && audio===0 && notes===0 && handson===0) {
        alert("You didn't enter anything! Please enter your answers.");
    } else {
    if(max===visual) {
        window.location="visual.html";
    } else if(max===audio) {
        window.location="audio.html";
    } else if(max===notes) {
        window.location="notes.html";
    } else if(max===handson) {
        window.location="handson.html";
    }
    }
}