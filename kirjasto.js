

var EXECUTION_MODE = {
	NORMAL: 0,
	SHADOW: 1,
	TEST: 2
}


var execution_mode = EXECUTION_MODE.NORMAL;
var background_color;


function setup() {}


var _cell_count = 8;

var _target_grid = makeArray(_cell_count, _cell_count, false);

var leveys = _cell_count;
var _cell_width = 400 / _cell_count;

var _draw_coordinates = false;

_seed = Math.random(1000);

function ruutu(x,y) { cell(x,y);}
function ruudukko(_leveys=8, piirraKordinaatit=true) {
  leveys = _leveys;
  grid(_leveys, piirraKordinaatit);
}

function resetDrawSettings() {
	stroke(0);
	strokeWeight(1);
}

function cell(x, y) {
  if (x >= _cell_count) { throw "Array index x outside bounds (x is larger than the array width)"; }
  if (y >= _cell_count) throw "Array index y outside bounds (y is larger than the array height)";
  
  _target_grid[x][y] = true;
  
  var _w = _cell_width;
  x *= _w;
  y *= _w;
  
  if (execution_mode == EXECUTION_MODE.TEST) return false;
  
  resetDrawSettings();
  if (execution_mode == EXECUTION_MODE.NORMAL) fill(240);
  else if (execution_mode == EXECUTION_MODE.SHADOW) fill(240,240,240,50);
  
  rect(x, y,_w,_w);
}

function grid(cellsPerRow=8, drawCoordinates=true) {
	if (execution_mode == EXECUTION_MODE.TEST) return;
	console.log("ruudukko")
  //randomSeed(_seed);
  noLoop();
  resetDrawSettings();
  
  _draw_coordinates = drawCoordinates;
  _cell_count = cellsPerRow;
  _cell_width = width / _cell_count;
  
  background_color = color(51,51,51);
  background(background_color);
  
  fill(240);
  stroke(200);
  
  textAlign(LEFT, TOP);
  
  for(var _x = 0; _x < width; _x+=_cell_width) {
		
    line(_x, 0, _x, height);
    line(0, _x, height, _x);
  	if (!_draw_coordinates) continue;
    
    var _s = _cell_width / 40 * 10;
    textSize(_s);
    for(var _y = 0; _y < width; _y+=_cell_width) {
      var _xx = round(_x/_cell_width);
      var _yy = round(_y/_cell_width);
    	text("("+_xx.toString()+","+_yy.toString()+")", _x+2, _y+2);
    }
  }
}

function piste(x,y) {
    stroke(255);
    fill(255);
    strokeWeight(3);
  	point(x,y);
}

function kahina(x) {
  var _n = noise(x)
  return round(lerp(0, _cell_count, _n));
}

function vari(_v) {
	switch(_v) {
    case "vihrea": fill(0,255,0); break;
    case "ruskea": fill(150, 50, 0); break;
    case "harmaa": fill(50); break;	
    case "tummavihrea": fill(0,150,0); break;
  }
}

function irandom(min, max) {
	return round(random(min, max));
}

function compareFunctions(userFunc, exampleFunc) {
	
	execution_mode = EXECUTION_MODE.TEST;
	_target_grid.length = 0;
	
	var userGrid  = makeArray(_cell_count, _cell_count, false);
	var exampleGrid = makeArray(_cell_count, _cell_count, false);
	
	_target_grid = userGrid;
	userFunc();
	
	_target_grid = exampleGrid;
	exampleFunc();
	
	var outcome_different = null;
	for(var x = 0; x < _cell_count; x++) {
		for(var y = 0; y < _cell_count; y++) {
			if ( userGrid[x][y] !== exampleGrid[x][y] ) {
				outcome_different = {
					outcomeDifferent: true
				};
				
				if (exampleGrid[x][y] == false) message = 'You have placed unnecessary cells somewhere.';
				else							message = 'Some cells are still missing!';
				
				outcome_different.message = message;
			}
		}
	}
	
	userGrid.length = 0;
	exampleGrid.length = 0;
	
	_target_grid = makeArray(_cell_count, _cell_count, false);
	
	execution_mode = EXECUTION_MODE.NORMAL;
	
	return outcome_different;
	
}

function makeArray(w, h, val) {
    var arr = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}