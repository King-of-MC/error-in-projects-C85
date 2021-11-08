//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

//Give specific height and width to the car image
var maincarwidth= 75;
var maincarheight= 100;



var parkinglotimg ="parkingLot.jpg";
var maincar_image = "car2.png";

//Set initial position for a car image.
var maincarX= 10;
var maincarY= 10;

function add() {
	//upload car, and background images on the canvas.
	background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=parkinglotimg;
	//gap
	maincarimg=new Image();
	maincarimg.onload=uploadgreencar();
	maincarimg.src=maincar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(maincarimg,0,0,canvas.width,canvas.height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	//Define function to move the car upward
	if (maincarY >= 0) {
        maincarY=maincarY-10;
        console.log("ROVER MOVED UP");
        uploadBackground();
        uploadgreencar();
	}

}

function down()
{
	//Define function to move the car downward
    if (maincarY < 500) {
        maincarY=maincarY+10;
        console.log("ROVER MOVED DOWN ")
        uploadBackground();
        uploadgreencar();
    }

}

function left() {
    if (maincarX >= 0) {
        maincarX=maincarX-10;
        console.log("ROVER MOVED LEFT ")
        uploadBackground();
        uploadgreencar();
    }
}


function right () {

    if (maincarX < 700) {
        maincarX=maincarX+10;
        console.log("ROVER MOVED RIGHT ")
        uploadBackground();
        uploadgreencar();

    }
}




