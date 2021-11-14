var slide = document.getElementById('slide');
var upArrow = document.getElementById('uparrow');
var downArrow = document.getElementById('downarrow');

let x = 0; 
upArrow.onclick = function () {
    if (x > "-1050") {
        x = x - 350;
        slide.style.top = x + 'px';
    }
}
downArrow.onclick = function () {
    if (x < "-0") {
        x = x + 350;
        slide.style.top = x + 'px';
    }
}