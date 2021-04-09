var gardenImg;

var cat;
var mouse;

var catImg1;
var catImg2;
var catImg3;

var mouseImg1;
var mouseImg2;
var mouseImg3;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png,cat3.png")
    catImg3 = loadImage("image/cat4.png")

    mouseImg1 = loadImage("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png,mouse3.png")
    mouseImg3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,20,20)
    cat.addImage("cat",catImg1);

    mouse = createSprite(700,200,20,20)
    mouse.addImage("mouse",mouseImg1);
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("sit",catImg3)
        mouse.addImage("inspect",mouseImg3)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay =25

        cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
    }

}
