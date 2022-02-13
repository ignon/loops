var missions_en = [
	{
		slug: 'intro',
		desc: "The light gray cells in the array form an emoticon. Light up those cells with the cell(x,y) function.",
		hints: ['Try drawing the other eye with "cell(4,1)"! function call.', 'The first number (argument) inside round brackets defines the x and the second defines the y position of the cell being drawn (and they are seperated with a comma ",")'],
		func: function() {
			cell(2,1);
			cell(4,1);
			
			cell(2,3);
			cell(3,3);
			cell(4,3);
		},
		example: function() {
			cell(2,1); // We light up the left eye.
		}
	},
	{
		slug: 'while_intro',
		desc: "Well that was a lot of work! Drawing multiple adjacent cells is easier with a while loop. Try changing the numbers in the code to understand it better, after that feel free to move to the next mission.",
		func: function() {
			cell(2,1);
			cell(4,1);
			
			var x = 2;
			while(x <= 4) {
				cell(x, 3);
				x += 1;
			}
		},
		example: function() {
			// We draw the eyes
			cell(2,1);
			cell(4,1);
			
			// We start drawing the mouth from X coordinate 2
			var x = 2;
			while(x <= 4) { // while x is less or equal to 4 -->
				cell(x, 3); //...we light up a cell in the position of x
				x += 1; 	//...and move one cell to the right (add one to the x)
			}
		}
	},
	{
		slug: 'mouth_wider',
		size: 7,
		desc: "The mouth of the emoticon grew larger. Change the start and end coordinates of the mouth (while-loop) so that the mouth is in the right size.",
		hints: [
			'The mouth starts from the x coordinate 1 so we must set "var x = 1;"',
			'The mouth ends in the x coordinate 5 so we must draw cells while the x is less or equal to 5 "while (x <= 5)"',
		],
		func: function() {
			cell(2,1);
			cell(4,1);
			
			var x = 1;
			while(x <= 5) {
				cell(x, 3);
				x += 1;
			}
		},
		example: "prev_example"
	},
	{
		slug: 'mouth_lower',
		size: 7,
		desc: "Change the height of the mouth!",
		hints: [
			'Try changing the second argument (y, the number 3) inside the round brackets.'
		],
		func: function() {
			cell(2,1);
			cell(4,1);
			
			cell(3,3);
			
			var x = 1;
			while(x <= 5) {
				cell(x, 5);
				x += 1;
			}
		},
		example: function() {
			cell(2,1);
			cell(4,1);
			
			var x = 1;
			while(x <= 5) {
				cell(x, 3); //cell(x,y)
				x += 1;
			}
		}
	},
	{
		slug: 'for_intro',
		size: 7,
		desc: 'In this mission the while loop is replaced with a for-loop, which is just a shorthand for the while loop we had earlier. Both define a variable (var x = 1;) and plus a number (x += 1;) while a  condition (x <= 5) is true. Try changing the code to understand everything better.',
		func: 'func_prev',
		example: function() {
			cell(2,1);
			cell(4,1);
			cell(3,3);
			
			// A new shorthand for writing the earlier loop:
			for(var x = 1; x <= 5; x+=1) {
				cell(x, 5);
			}
			/*
			The old, technically identical loop:
			var x = 1;
			while(x <= 5) {
				cell(x, 5); //cell(x,y)
				x += 1;
			}
			*/
		}
	},
	{
		slug: 'nose_thing',
		size: 7,
		desc: "The nose of the emoticon grew larger and took space from the mouth. Make the mouth narrower and move it down!",
		func: function() {
			cell(2,1);
			cell(4,1);
			
			cell(3,3);
			cell(3,4);
			
			for(var x = 2; x <= 4; x+=1) {
				cell(x,6);
			}
		},
		example: function() {
			cell(2,1);
			cell(4,1);
			
			cell(3,3);
			cell(3,4);
			
			// Change the coordinates of the mouth!
			for(var x = 1; x <= 5; x+=1) {
				cell(x,5); //cell(x,y);
			}
		}
	},
	{
		slug: 'equals',
		size: 7,
		desc: "Let's try to draw an equals sign. Youl'll need two cell(x,y)-functions, but could it be possible to solve this with just one for-loop?",
		func: function() {
			for(var x = 1; x <= 5; x+=1) {
				cell(x,2);
				cell(x,4);
			}
		},
		example: function() {
			for(var x = 2; x <= 4; x+=1) {
				cell(x,4);
			}
		}
	},
	{
		slug: 'plus',
		size: 7,
		desc: "Let'd draw a plus sign. Move the horizontal line to the right position. After that you can try to draw a vertical line. If you are really smart you could maybe solve this with only one for-loop but try with two first!",
		func: function() {
			for(var x = 2; x <= 4; x+=1) {
				cell(x,3);
				cell(3,x);
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				cell(x,5);
			}
		}
		
	},
	{
		slug: 'box',
		size: 7,
		desc: "Let's draw a box. Try to solve this with two for-loops at maximum. It's also possible with only one (; <br>Notice that the cell(x,y)-functions are turned into comments, so that you could see the example better. Remove the slashes ( // ) , so that they turn back into regular code.",
		func: function() {
			for(var x = 1; x <= 5; x++) {
				cell(x, 1)
				cell(x, 5);
				
				cell(1, x);
				cell(5, x);
			}
		},
		example: function() {
			for(var k = 2; k <= 4; k+=1) {
				//cell(k,3);
				//cell(3,k);
			}
		}
	},
	{
		slug: 'line',
		size: 7,
		desc: "Hmmmm",
		hints: ['So the x and y should get larger simultaneously O___o', 'So x should always equal to y?', 'But if x gets the value of k then what should y get?'],
		func: function() {
			for(var k = 0; k <= 6; k+=1) {
				cell(k,k);
			}
		},
		example: function() {
			for(var k = 2; k <= 4; k+=1) {
				//cell(k,0);
			}
		}
	},
	{
		slug: 'char-x',
		size: 7,
		desc: 'You can use + and - signs in argument. for example: cell(x+3, 4), cell(x, 4-y), cell(k+3, k). What would be the correct calculation in this situtation? <br> Be cautious about accidentally drawing outside the array!',
		func: function() {
			for(var k = 0; k <= 6; k+=1) {
				cell(k,k);
				cell(k, 6-k);
			} 
		},
		example: function() {
			for(var k = 0; k <= 6; k+=1) {
				cell(k,k);
			}
		}
	},
	{
		slug: 'happy',
		size: 7,
		desc: "You can use + and - signs in argument. for example: cell(x+3, 4), cell(x, 4-y), cell(k+3, k). You'll need 4 cell(x,y)-functions.",
		func: function() {
			cell(2,1);
			cell(4,1);
			
			for(var k = 0; k <= 2; k+=1) {
				cell(3+k,5-k);
				cell(3-k,5-k);
			} 
		},
		example: function() {
			//cell(4,1);
			
			for(var k = 0; k <= 1; k+=1) {
				//cell(3+k,5-k);
			} 
		}
	},
	{
		slug: 'solid_box',
		size: 7,
		desc: "Loopception?",
		func: function() {
			for(var x = 1; x <= 5; x+=1) {
				for(var y = 1; y <= 5; y+=1) {
					cell(x,y);
				}
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				//cell(x,1);
			}
		},
		hints: [
			"Currently a cell is being drawn to every x coordinate. What if instead of a cell a vertical line would be drawn to every x-coordinate?",
			"A for loop inside a for loop? O___o"
		]
	},
	{
		slug: 'marble_flooring',
		size: 7,
		desc: "Now we should just make our area larger.",
		func: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=1) {
					cell(x,y);
				}
			}
		},
		example: function() {
			for(var x = 1; x <= 5; x+=1) {
				for(var y = 1; y <= 5; y+=1) {
					//cell(x,y);
				}
			}
		}
	},
	{
		slug: 'block_of_flats',
		size: 7,
		desc: "A block of flats",
		hints: [
			'So we should draw a line to every other y coordinate?'
		],
		func: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=2) {
					cell(x,y);
				}
			}
		},
		example: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=1) {
					//cell(x,y);
				}
			}
		}
	},
	{
		slug: 'pillars',
		size: 7,
		desc: "Pillars",
		func: function() {
			for(var x = 0; x <= 6; x+=2) {
				for(var y = 0; y <= 6; y+=2) {
					cell(x,y);
				}
			}
		},
		example: function() {
			for(var x = 0; x <= 6; x+=1) {
				for(var y = 0; y <= 6; y+=2) {
					//cell(x,y);
				}
			}
		}
	},
	{
		slug: 'wire_basket',
		size: 7,
		desc: "Wire basket. Use two for-loop at maximum, possible with only one.",
		hints: [
			'Now is time to combine everything you have learned in previous challenges'
		],
		func: function() {
			for(var a = 0; a <= 6; a+=2) {
				for(var b = 0; b <= 6; b+=1) {
					cell(a,b);
					cell(b,a);
				}
			}
		},
		example: function() {
			for(var a = 0; a <= 6; a+=1) {
				for(var b = 0; b <= 6; b+=2) {
					//cell(a,b);
				}
			}
		}
	},
	{
		slug: 'stairs',
		size: 7,
		desc: "Stairs. You need two for loops one 1-2 cell(x,y) functions.",
		hints: [
			'Remember the challenge about drawing a straight line? There is something similar about this.',
			'So the maximum value of x always equals to height of the current horizontal line?'
		],
		func: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= y; x+=1) {
					cell(x,y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= 6; x+=1) {
					//cell(x,y);
				}
			}
		}
	},
	{
		slug: 'pyramid',
		size: 7,
		desc: "Pyramid",
		hints: [
			"Let's first set the stairs to correct height (so that descending stops after y coordinate 3)",
			"How could we move the stairs horizontally so that the top of the stairs starts from the middle? (Remember that you can use calculations when setting arguments cell(x,y+3) etc)",
			"Now how could the make a version of the stairs which is flipped horizontally?"
		],
		func: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					cell(3+x,y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 6; y+=1) {
				for(var x = 0; x <= y; x+=1) {
					//cell(x,y);
				}
			}
		}
	},
	{
		slug: 'tiles',
		size: 7,
		desc: "Tiles",
		func: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					cell(3+x,y);
					cell(3+x,6-y);
				}
			}
		},
		example: function() {
			for(var y = 0; y <= 3; y+=1) {
				for(var x = -y; x <= y; x+=1) {
					//cell(3+x,y);
				}
			}
		},
	},
	{
		size: 50,
		hide_coordinates: true,
		desc: "Congratulations! You have solved all of the coding challenges! Feel free to keep practicing with this larger array which has maximum x and y of 49! (which means it has width and height of 50 cells)",
		func: function() {
			
		},
		example: function() {
			 // y < 50 (y is less than 50) is same as y <= 49 (y is less or equal than 49),
			 // also y++ is a shorthand for y += 1;
			for(var y = 0; y < 50; y++) {
				for(var x = 0; x <= y; x++) {
					cell(x,y);
				}
			}
		}
	}
]