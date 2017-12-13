
/*________________  TOP MENU  _____________________*/

var top_menu = document.createElement('div');
top_menu.setAttribute('Id', 'top_menu');
document.body.appendChild(top_menu);

var blue = document.createElement('div');
blue.className = 'color';
blue.setAttribute('Id', 'blue');
top_menu.appendChild(blue);

var red = document.createElement('div');
red.className = 'color';
red.setAttribute('Id', 'red');
document.getElementById('top_menu').appendChild(red);

var green = document.createElement('div');
green.className = 'color';
green.setAttribute('Id', 'green');
document.getElementById('top_menu').appendChild(green);

var black = document.createElement('div');
black.className = 'color';
black.setAttribute('Id', 'black');
document.getElementById('top_menu').appendChild(black);

var yellow = document.createElement('div');
yellow.className = 'color';
yellow.setAttribute('Id', 'yellow');
document.getElementById('top_menu').appendChild(yellow);

var pen = document.createElement('div');
pen.setAttribute('Id', 'pen');
document.getElementById('top_menu').appendChild(pen);

var large = document.createElement('div');
large.className = 'size';
large.setAttribute('Id', 'large');
document.getElementById('pen').appendChild(large);

var medium = document.createElement('div');
medium.className = 'size';
medium.setAttribute('Id', 'medium');
document.getElementById('pen').appendChild(medium);



/*________________ CANVAS  ____________________*/

var x;
var y;

function pix(){
	var new_pix = document.createElement('div');
	new_pix.className = pix;
	document.getElementById('canvas').appendChild('new_pix');
	document.setAttribute('new_pix').style.top = y;
	document.setAttribute('new_pix').style.left = x;

}

function draw(e){
	x = e.clientX;
    y = e.clientY;
    console.log(x + " / " + y);
    pix();
}

var can = document.createElement('div');
can.className = 'canvas';
can.setAttribute('Id', 'canvas_div');
document.body.appendChild(can);
can.addEventListener('click', draw);
