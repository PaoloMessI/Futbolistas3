var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '77')
	{
		new_image('messi.png'); 
		console.log("M");
	}
	if(keyPressed == '80')
	{
		block_x = 200;
		new_image('pedri-33.png'); 
		console.log("P");
	}
	
	if(keyPressed == '68')
	{
		block_x =350;
		new_image('Paulo-Dybala.png'); 
		console.log("D");
	}
	if(keyPressed == '78')
	{
		block_x = 600;
		new_image('Neymar.png'); 
		console.log("N");
	}
	if(keyPressed == '82')
	{
		block_x = 700;
		new_image('robert-lewandowski-170.png'); 
		console.log("R");
	}
	
}


