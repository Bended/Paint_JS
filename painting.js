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

var blue = document.createElement('div');
blue.className = 'color';
blue.setAttribute('Id', 'blue');
top_menu.appendChild(blue);
/*blue.addEventListener('click', get_color);*/

var red = document.createElement('div');
red.className = 'color';
red.setAttribute('Id', 'red');
document.getElementById('top_menu').appendChild(red);
/*red.addEventListener('click', get_color);*/

var green = document.createElement('div');
green.className = 'color';
green.setAttribute('Id', 'green');
document.getElementById('top_menu').appendChild(green);
/*green.addEventListener('click', get_color);*/

var black = document.createElement('div');
black.className = 'color';
black.setAttribute('Id', 'black');
document.getElementById('top_menu').appendChild(black);
/*black.addEventListener('click', get_color);*/

var yellow = document.createElement('div');
yellow.className = 'color';
yellow.setAttribute('Id', 'yellow');
document.getElementById('top_menu').appendChild(yellow);
/*yellow.addEventListener('click', get_color);*/

var more_color = document.createElement('div');
more_color.setAttribute('Id', 'more_color');
document.getElementById('top_menu').appendChild(more_color);

var input_color = document.createElement("INPUT");
input_color.setAttribute("type", "color");
input_color.setAttribute('Id', 'input_color');
document.getElementById('more_color').appendChild(input_color);

var size_input = document.createElement("INPUT");
size_input.setAttribute("type", "number");
size_input.setAttribute('Id','input_size')
top_menu.appendChild(size_input);

var size_label = document.createElement('label')
size_input.appendChild(size_label);
size_label.innerHTML = 'size';


/*______________________________________________________SIZE SELECTION*/
/*var large = document.createElement('div');
large.className = 'size';
large.setAttribute('Id', 'large');
document.getElementById('top_menu').appendChild(large);
*//*large.addEventListener('click', get_size);*//*


var medium = document.createElement('div');
medium.className = 'size';
medium.setAttribute('Id', 'medium');
document.getElementById('top_menu').appendChild(medium);
*//*medium.addEventListener('click', get_size);*//*

var small = document.createElement('div');
small.className = 'size';
small.setAttribute('Id', 'small');
document.getElementById('top_menu').appendChild(small);
small.addEventListener('click', get_size);*/

/*_______________________________________________________SHAPE SELECTION*/
var square = document.createElement('div');
square.className = 'shape';
document.getElementById('top_menu').appendChild(square);
/*square.addEventListener('click', get_shape);*/

var round = document.createElement('div');
round.className = 'shape'
round.setAttribute('Id', 'round');
document.getElementById('top_menu').appendChild(round);
/*round.addEventListener('click', get_shape);*/



/*________________ CANVAS  ____________________*/

var x;
var y;

var can = document.createElement('div');
can.className = 'canvas';
can.setAttribute('Id', 'canvas_div');
document.body.appendChild(can);
can.addEventListener('click', draw);

//function pix(){
//	var new_pix = document.createElement('div');
//	new_pix.className = pix;
//	document.getElementById('canvas').appendChild('new_pix');
//
//}

function draw(e){
    var can = document.getElementById('canvas_div');
    var new_pix = document.createElement('div');
	new_pix.className = 'pix';
	document.getElementById('canvas_div').appendChild(new_pix);
	x = e.pageX + 'px';
    y = e.pageY + 'px';
	new_pix.style.top = y;
	new_pix.style.left = x;
    console.log(x + " / " + y);
}

