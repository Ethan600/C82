var mouseEvent = "empty";
var lp_of_x, lp_of_y;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 3;

canvas.addEventListener("mousedown", Mymousedown);
function Mymousedown(e){
 color = document.getElementById("incolor").value;
 width_of_line = document.getElementById("inwidth").value;
 mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", Mymouseup);
function Mymouseup(e){
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", Mymouseleave);
function Mymouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", Mymousemove);
function Mymousemove(e){
    cp_of_x = e.clientX - canvas.offsetLeft;
    cp_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last Position of X = " + lp_of_x + " Last Position of Y = " + lp_of_y);
        ctx.moveTo(lp_of_x, lp_of_y);
        console.log("Current Position of X = " + cp_of_x + " Current Position of Y = " + cp_of_y);
        ctx.lineTo(cp_of_x, cp_of_y);
        ctx.stroke();
    }

    lp_of_x = cp_of_x;
    lp_of_y = cp_of_y;
}

function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}