var left_menu = document.createElement('div');
left_menu.setAttribute('Id', 'left_menu');
document.body.appendChild(left_menu);

var new_button = document.createElement('button');
left_menu.appendChild(new_button);
new_button.innerHTML = "NEW";
new_button.addEventListener('click', new_drawing);

function new_drawing() {
    document.getElementById('modal-wrapper').style = 'block';
}

function closed() {
    document.getElementById('modal-wrapper').style.display = 'none';
}

var save_button = document.createElement('button');
left_menu.appendChild(save_button);
save_button.innerHTML = "SAVE";

var open_button = document.createElement('button');
left_menu.appendChild(open_button);
open_button.innerHTML = "OPEN";

var clear_button = document.createElement('button');
left_menu.appendChild(clear_button);
clear_button.innerHTML = "CLEAR";
clear_button.addEventListener('click', clear)

function clear() {
    document.getElementById('canvas_div').innerHTML = " ";
    }

/*________________  TOP MENU  _____________________*/

var top_menu = document.createElement('div');
top_menu.setAttribute('Id', 'top_menu');
document.body.appendChild(top_menu);

/*var blue = document.createElement('button');
blue.className = 'color';
blue.setAttribute('Id', 'blue');
blue.setAttribute('value' , 'blue')
top_menu.appendChild(blue);
blue.addEventListener('click', get_drawing_color);

var red = document.createElement('button');
red.className = 'color';
red.setAttribute('Id', 'red');
red.setAttribute('value' , 'red')
document.getElementById('top_menu').appendChild(red);
red.addEventListener('click', get_drawing_color);

var green = document.createElement('button');
green.className = 'color';
green.setAttribute('Id', 'green');
green.setAttribute('value' , 'green')
document.getElementById('top_menu').appendChild(green);
green.addEventListener('click', get_drawing_color);

var black = document.createElement('button');
black.className = 'color';
black.setAttribute('Id', 'black');
black.setAttribute('value' , 'black')
document.getElementById('top_menu').appendChild(black);
black.addEventListener('click', get_drawing_color);

var yellow = document.createElement('button');
yellow.className = 'color';
yellow.setAttribute('Id', 'yellow');
yellow.setAttribute('value' , 'yellow')
document.getElementById('top_menu').appendChild(yellow);
yellow.addEventListener('click', get_drawing_color);

var more_color = document.createElement('div');
more_color.setAttribute('Id', 'more_color');
document.getElementById('top_menu').appendChild(more_color);*/

var color_label = document.createElement('p');
top_menu.appendChild(color_label);
color_label.innerHTML = 'Select Color :'

var input_color = document.createElement("INPUT");
input_color.setAttribute("type", "color");
input_color.setAttribute('Id', 'input_color');
document.getElementById('top_menu').appendChild(input_color);

var size_label = document.createElement('p');
size_label.setAttribute('Id', 'size_label');
top_menu.appendChild(size_label);
size_label.innerHTML = 'Select Size :';

var size_input = document.createElement("INPUT");
size_input.setAttribute("type", "number");
size_input.setAttribute('Id','input_size');
size_input.value = 5;
top_menu.appendChild(size_input);

/*var clickedColor;                       #####  function that works with color buttons    #####
function get_drawing_color () {
    var x = document.getElementsByClassName('color');
    clickedColor = this.value;
    return clickedColor;
}*/

/*_______________________________________________________SHAPE SELECTION*/
var shape_label = document.createElement('p');
top_menu.appendChild(shape_label);
shape_label.innerHTML = 'Select Shape :'

var square = document.createElement('button');
square.className = 'shape';
square.setAttribute('Id', 'sqr');
document.getElementById('top_menu').appendChild(square);
square.addEventListener('click', get_shape);

var round = document.createElement('button');
round.className = 'shape'
round.setAttribute('Id', 'round');
document.getElementById('top_menu').appendChild(round);
round.addEventListener('click', get_shape);

var selected_shape;
function get_shape() {
    if (this.id == 'round'){
        selected_shape = '100px';}
            else if (this.id == 'sqr') {
                selected_shape = '0px';
    }
    }

var eraser = document.createElement('img');
eraser.style.width = '25px';
eraser.style.height = '25px';
eraser.style.marginBottom = '0px';
eraser.src = "http://icons.iconarchive.com/icons/iconsmind/outline/256/Eraser-3-icon.png";
eraser.addEventListener('click', erase);
top_menu.appendChild(eraser);


function erase() {
    clickedColor = 'white';
}


/*________________________________________________ CANVAS  ____________________*/

var canvas_height;
var canvas_width;

function ok() {
    canvas_width = document.getElementById('canvas_width').value;
    canvas_height = document.getElementById('canvas_height').value;
    can.style.display = 'inline-block';
    can.style.height = canvas_height + 'px';
    can.style.width = canvas_width + 'px';
    clear();
    closed();
}

    var can = document.createElement('div');
    can.className = 'canvas';
    can.setAttribute('Id', 'canvas_div');
    can.style.backgroundColor = "white";
    document.body.appendChild(can);
    can.style.display = 'none';


var paint = false;
var x;
var y;

$('#canvas_div').mousedown(function(e) {
    paint = true;
    x = e.pageX + 'px';
    y = e.pageY + 'px';
    draw();
});
$('#canvas_div').mouseup(function(e) {
    paint = false;
});

$("#canvas_div").mousemove(function(e) {
    if(paint) {
        x = e.pageX + 'px';
        y = e.pageY + 'px';
        draw();
    }
});

function draw(){
    if (paint = true) {
        var can = document.getElementById('canvas_div');
        var new_pix = document.createElement('div');
        new_pix.className = 'pix';
        new_pix.style.backgroundColor = document.getElementById('input_color').value;
        new_pix.style.width = size_input.value + 'px';
        new_pix.style.height = size_input.value + 'px';
        new_pix.style.borderRadius = selected_shape;
        document.getElementById('canvas_div').appendChild(new_pix);
        new_pix.style.top = y;
        new_pix.style.left = x;
    }
}



