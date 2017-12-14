var left_menu = document.createElement('div');
left_menu.setAttribute('Id', 'left_menu');
document.body.appendChild(left_menu);

var save_button = document.createElement('button');
left_menu.appendChild(save_button);
save_button.innerHTML = "SAVE";

var open_button = document.createElement('button');
left_menu.appendChild(open_button);
open_button.innerHTML = "OPEN";

var clear_button = document.createElement('button');
left_menu.appendChild(clear_button);
clear_button.innerHTML = "CLEAR";

/*________________  TOP MENU  _____________________*/

var top_menu = document.createElement('div');
top_menu.setAttribute('Id', 'top_menu');
document.body.appendChild(top_menu);

var blue = document.createElement('button');
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
document.getElementById('top_menu').appendChild(more_color);

var input_color = document.createElement("INPUT");
input_color.setAttribute("type", "color");
input_color.setAttribute('Id', 'input_color');
document.getElementById('more_color').appendChild(input_color);

var size_input = document.createElement("INPUT");
size_input.setAttribute("type", "number");
size_input.setAttribute('Id','input_size');
size_input.value = 2;
more_color.appendChild(size_input);

var size_label = document.createElement('label')
size_input.appendChild(size_label);
size_label.innerHTML = 'size';

var clickedColor;
function get_drawing_color () {
    var x = document.getElementsByClassName('color');
    clickedColor = this.value;
    return clickedColor;
}

/*_______________________________________________________SHAPE SELECTION*/
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
        selected_shape = '100px';
        console.log(this.Id);}
            else if (this.id == 'sqr') {
                selected_shape = '0px';
                console.log(this.Id);}
    console.log(selected_shape);
    }



/*________________ CANVAS  ____________________*/

var x;
var y;

var can = document.createElement('div');
can.className = 'canvas';
can.setAttribute('Id', 'canvas_div');
can.style.backgroundColor = "white";
document.body.appendChild(can);
can.addEventListener('click', draw);

function draw(e){
    var can = document.getElementById('canvas_div');
    var new_pix = document.createElement('div');
	new_pix.className = 'pix';
	new_pix.style.backgroundColor = clickedColor;
	new_pix.style.width = size_input.value + 'px';
	new_pix.style.height = size_input.value + 'px';
    new_pix.style.borderRadius = selected_shape;
	document.getElementById('canvas_div').appendChild(new_pix);
	x = e.pageX + 'px';
    y = e.pageY + 'px';
	new_pix.style.top = y;
	new_pix.style.left = x;
}

