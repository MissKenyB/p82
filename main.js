var mouseEvent = "empty";
 canvas=document.getElementById("miCanvas");
 ctx=canvas.getContext("2d");

var color= "black";
var wline= 3;
var radio= 20;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    wline = document.getElementById("grosor").value;
    radio= document.getElementById("radio").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wline;
        ctx.arc(current_mouse_x, current_mouse_y, radio ,0 , 2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}