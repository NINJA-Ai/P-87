var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;

var player_object = "";
var block_image_object = "";

updateWidthHeight();

function updateWidthHeight()
{
    console.log("Width= " + block_image_width + " Height= " + block_image_height);
    document.getElementById('current_width').innerHTML = block_image_width;
    document.getElementById('current_height').innerHTML = block_image_height;
}

function player_update()
{
    fabic.Image.fromURL("player.png", 
        function(Img)
        {
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({
                top:player_y,left:player_x
            });
            canvas.add(player_object);
        }
    );
}

function new_image(get_img)
{
    fabic.Image.fromURL(get_image, 
        function(Img){
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({
                top:player_y,left:player_x
            });
            canvas.add(player_object);
        }
    );
}
if (keyPressed == '70')
    {
        new_image('ironman_face.png');
        console.log("f");
    }

    if (keyPressed == '66')
    {
        new_image('spiderman_body.png');
        console.log("b");
    }

    if (keyPressed == '82')
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }

    if (keyPressed == '72')
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }

    if (keyPressed == '76')
    {
        new_image('hulk_legs.png');
        console.log("l");
    }

    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if (keyPressed == '39')
    {
        Right();
        console.log("Right");
    }