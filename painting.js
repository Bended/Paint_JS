var left_menu = document.createElement('div');
left_menu.setAttribute('Id', 'left_menu');
document.body.appendChild(left_menu);


/*________________  TOP MENU  _____________________*/

var top_menu = document.createElement('div');
top_menu.setAttribute('Id', 'top_menu');
document.body.appendChild(top_menu);

var blue = document.createElement('div');
blue.className = 'color';
blue.setAttribute('Id', 'blue');
top_menu.appendChild(blue);
blue.addEventListener('click', color);

var red = document.createElement('div');
red.className = 'color';
red.setAttribute('Id', 'red');
document.getElementById('top_menu').appendChild(red);
red.addEventListener('click', color);

var green = document.createElement('div');
green.className = 'color';
green.setAttribute('Id', 'green');
document.getElementById('top_menu').appendChild(green);
green.addEventListener('click', color);

var black = document.createElement('div');
black.className = 'color';
black.setAttribute('Id', 'black');
document.getElementById('top_menu').appendChild(black);
black.addEventListener('click', color);

var yellow = document.createElement('div');
yellow.className = 'color';
yellow.setAttribute('Id', 'yellow');
document.getElementById('top_menu').appendChild(yellow);
yellow.addEventListener('click', color);

var more_color = document.createElement('div');
more_color.setAttribute('Id', 'more_color');
document.getElementById('top_menu').appendChild(more_color);

var input_color = document.createElement("INPUT");
input_color.setAttribute("type", "color");
input_color.setAttribute('Id', 'input_color');
document.getElementById('more_color').appendChild(input_color);

//var pen = document.createElement('div');
//pen.setAttribute('Id', 'pen');
//document.getElementById('top_menu').appendChild(pen);

var large = document.createElement('div');
large.className = 'size';
large.setAttribute('Id', 'large');
document.getElementById('top_menu').appendChild(large);
large.addEventListener('click', size);


var medium = document.createElement('div');
medium.className = 'size';
medium.setAttribute('Id', 'medium');
document.getElementById('top_menu').appendChild(medium);
medium.addEventListener('click', size);

var small = document.createElement('div');
small.className = 'size';
small.setAttribute('Id', 'small');
document.getElementById('top_menu').appendChild(small);
small.addEventListener('click', size);

var square = document.createElement('div');
square.className = 'shape';
document.getElementById('top_menu').appendChild(square);
square.addEventListener('click', shape);

var round = document.createElement('div');
round.className = 'shape'
round.setAttribute('Id', 'round');
document.getElementById('top_menu').appendChild(round);
round.addEventListener('click', shape);



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
    //var can = document.getElementById('canvas_div');
    var new_pix = document.createElement('div');
	new_pix.className = 'pix';
	document.getElementById('canvas_div').appendChild(new_pix);
	x = e.pageX + 'px';
    y = e.pageY + 'px';
	new_pix.style.top = y;
	new_pix.style.left = x;
    console.log(x + " / " + y);
}

