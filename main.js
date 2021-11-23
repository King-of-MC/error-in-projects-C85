
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

// BALL XY
var ballX = 0;
var ballY = 0;
// HOLE XY
var holeX = 800;
var holeY = 400;
// object height width
var block_image_width = 5;
var block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:holeY,
			left:holeX
		});
	   canvas.add(hole_obj);
	}
	)
	new_image();
}

function new_image(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:ballY,
			left:ballX
		});
	   canvas.add(ball_obj);
	}
	)
 
}




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if (ballX == holeX && ballY == holeY) {
         canvas.remove(ball_obj);
		 document.getElementById("hd3").innerHTML="POGGGG";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ballX >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

