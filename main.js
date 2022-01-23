var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

blockwidth=30;
blockheight=30;

var newplayer = "";
var newblock = "";

function player_Update(){
    fabric.Image.fromURL("player.png", function(Img){
        newplayer=Img;

        newplayer.scaleToWidth(150);
        newplayer.scaleToHeight(140);

        newplayer.set({
            top: player_y,
            left: player_x
        });
        canvas.add(newplayer);
    });

}
function block_Update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        newblock=Img;

        newblock.scaleToWidth(blockwidth);
        newblock.scaleToHeight(blockheight);

        newblock.set({
            top: player_y,
            left: player_x
        });
        canvas.add(newblock);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80"){
        console.log("Shift and P keys are pressed.");
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("blockwidth1").innerHTML= blockwidth;
        document.getElementById("blockheight1").innerHTML= blockheight;

    }

    if (e.shiftKey == true && keyPressed =="81"){
        console.log("Shift and Q keys are pressed.");
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("blockwidth1").innerHTML= blockwidth;
        document.getElementById("blockheight1").innerHTML= blockheight;
    }

    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
    if (keyPressed == "37"){
        left();
        console.log("left");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
    if (keyPressed == "87"){
        block_Update("wall.jpg");
        console.log("w");
    }
    if (keyPressed == "89"){
        block_Update("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed == "85"){
        block_Update("unique.png");
        console.log("u");
    }
    if (keyPressed == "84"){
        block_Update("trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "82"){
        block_Update("roof.jpg");
        console.log("r");
    }
    if (keyPressed == "76"){
        block_Update("light_green.png");
        console.log("l");
    }
    if (keyPressed == "71"){
        block_Update("ground.png");
        console.log("g");
    }
    if (keyPressed == "68"){
        block_Update("dark_green.png");
        console.log("d");
    }
    if (keyPressed == "67"){
        block_Update("cloud.jpg");
        console.log("c");
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - blockheight;
        console.log("Block image height =" + blockheight);
        console.log("X =" + player_x + "Y =" +player_y);
        canvas.remove(newplayer);
        player_Update();


    }
}

function down(){
    if(player_y<=700){
        player_y = player_y + blockheight;
        console.log("Block image height =" + blockheight);
        console.log("X =" + player_x + "Y =" +player_y);
        canvas.remove(newplayer);
        player_Update();


    }
}

function left(){
    if(player_x>0){
        player_x = player_x - blockwidth;
        console.log("Block image width =" + blockwidth);
        console.log("X =" + player_x + "Y =" +player_y);
        canvas.remove(newplayer);
        player_Update();


    }
}
function right(){
    if(player_x<=800){
        player_x = player_x + blockwidth;
        console.log("Block image width =" + blockwidth);
        console.log("X =" + player_x + "Y =" +player_y);
        canvas.remove(newplayer);
        player_Update();


    }
}