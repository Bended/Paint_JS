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
save_button.addEventListener('click', save);

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
jQuery(input_color).on('input', draw_yes);

var size_label = document.createElement('p');
size_label.setAttribute('Id', 'size_label');
top_menu.appendChild(size_label);
size_label.innerHTML = 'Select Size :';

var size_input = document.createElement("INPUT");
size_input.setAttribute("type", "number");
size_input.setAttribute('Id','input_size');
size_input.value = 10;
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

var selected_shape = '0px';
function get_shape() {
    if (this.id == 'round'){
        selected_shape = '100px';}
            else if (this.id == 'sqr') {
                selected_shape = '0px';
    }
    }

var pen = document.createElement('img');
pen.style.width = '25px';
pen.style.height = '25px';
pen.style.marginBottom = '0px';
pen.src = "http://icons.iconarchive.com/icons/iconsmind/outline/256/Pen-5-icon.png";
pen.addEventListener('click', draw_yes);
top_menu.appendChild(pen);

var eraser = document.createElement('img');
eraser.style.width = '25px';
eraser.style.height = '25px';
eraser.style.marginBottom = '0px';
eraser.src = "http://icons.iconarchive.com/icons/iconsmind/outline/256/Eraser-3-icon.png";
eraser.addEventListener('click', erase_yes);
top_menu.appendChild(eraser);

var clickedColor = document.getElementById('input_color').value;

function erase_yes() {
    clickedColor = 'white';
    return clickedColor;
}

function draw_yes() {
    clickedColor = document.getElementById('input_color').value;
    return clickedColor;
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
    document.getElementById('input_color').value = '#000000';
    size_input.value = 10;
    draw_yes();
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

var input_color;
var draw_name;
var drawObj = {};

var drawObj = {};
    drawObj['name'] = draw_name;
    drawObj['points'] = [];

function draw(){
    if (paint = true) {
        var can = document.getElementById('canvas_div');
        var new_pix = document.createElement('div');
        new_pix.className = 'pix';
        new_pix.style.backgroundColor = clickedColor;
        new_pix.style.width = size_input.value + 'px';
        new_pix.style.height = size_input.value + 'px';
        new_pix.style.borderRadius = selected_shape;
        document.getElementById('canvas_div').appendChild(new_pix);
        new_pix.style.top = y;
        new_pix.style.left = x;
        var pointObj = {};
        pointObj['color'] = new_pix.style.backgroundColor;
        pointObj['size'] = new_pix.style.width;
        pointObj['shape'] = new_pix.style.borderRadius;
        pointObj['x'] = new_pix.style.left;
        pointObj['y'] = new_pix.style.top;
        drawObj['points'].push(pointObj);
    }
}

function save() {
    /*var drawObj = {};
    drawObj['name'] =  draw_name';
    drawObj['points'] = [];
    var allPoints = can.getElementsByClassName('pix');*/
    /*for (var i = 0; i < allPoints.length; i++) {
        var currentPoint = allPoints[i];
        var pointObj = {};
        pointObj['color'] = currentPoint.style.backgroundColor;
        pointObj['size'] = currentPoint.style.width;
        pointObj['shape'] = currentPoint.style.borderRadius;
        pointObj['x'] = currentPoint.style.left;
        pointObj['y'] = currentPoint.style.top;
        drawObj['points'].push(pointObj);
    }*/
    draw_name = document.getElementById('drawing-name').value;
    localStorage.setItem(draw_name, JSON.stringify(drawObj));
    alert('saved');
}

function load() {
    var draw_name;
    var loadedDraw = localStorage.getItem('draw_name');
    var drawObj = JSON.parse(loadedDraw);
    clear();
    var allPoints = drawObj['points'];
}
