var planter, planterImg;
var WaterSupply; 
var timerPlant; 
var map1, map2, map3; 
var grid;
var energyBar, energyBarImg; 
var toolBox;
var fence;
var tree, treeImg1, treeImg2, treeImg3; 
var sun, sunImg; 
var moon, moonImg; 
var day, dayImg; 
var night, nightImg; 

function preload() {
    //Tree Images
    treeImg1 = loadImage("images/seedling.png"); 
    treeImg2 = loadImage("images/pot3.jpeg"); 
    treeImg3 = loadImage("images/finalTree.png"); 

    //Sun Images
    sunImg1 = loadImage("images/sun1.jpeg"); 
    sunImg2 = loadImage("images/sun2.jpeg"); 
    sunImg3 = loadImage("images/sun3.png"); 

    //Moon image
    moonImg = loadImage("images/moon.jpeg"); 

    //Day and Night
    dayImg = loadImage("images/day.jpeg"); 
    nightImg = loadImage("images/night.jpeg"); 

    //Gardener
    planterImg = loadImage("images/gardener.png"); 
}

function setup() {
    createCanvas(800, 400); 

    //Gardener
    planter = createSprite(100, 350, 10, 10); 
    planter.addImage("gardener", planterImg); 

    //Facilities
    energyBar = createSprite(85, 20, 50, 10); 
    toolBox = createSprite(600, 100, 30, 100); 

    //Tree
    tree = createSprite(); 
    tree.addImage("treeComplete", treeImg1); 

    //Sun
    sun = createSprite(); 
    sun.addImage("sunLight", sunImg1); 

    //Moon
    moon = createSprite(); 
    moon.addImage("moonLight", moonImg); 

    //Day
    day = createSprite(); 
    day.addImage("day", dayImg); 

    //Night
    night = createSprite(); 
    night.addImage("night", nightImg); 
}

function draw() {
    background("brown"); 

    //Key Down Functions
    if (keyDown(UP_ARROW)) {
        planter.y = planter.y - 2; 
    }

    if (keyDown(DOWN_ARROW)) {
        planter.y = planter.y + 2; 
    }

    if (keyDown(RIGHT_ARROW)) {
        planter.x = planter.x + 2; 
    }

    if (keyDown(LEFT_ARROW)) {
        planter.x = planter.x - 2; 
    }

    //Fence Loops
    for (var f = 10; f <= 400; f = f + 30) {
        fence = createSprite(700, f, 20, 22); 
        fence.shapeColor = "black"; 
    }

    for (var w = 30; w <= 400; w = w + 30) {
        fence2 = createSprite(700, w, 20, 16); 
        fence2.shapeColor = "white"; 
    }

    //Texts
    text(mouseX + "," + mouseY, mouseX, mouseY);
    
    //Health
    fill("red"); 
    textSize(15);
    text("Health", 15, 25); 
    
    //Resources
    fill("blue"); 
    textSize(15); 
    text("Resources", 565, 43); 

    drawSprites(); 
}

async function fetchTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json(); 

    var time = responseJSON.datetime;
    var hour = time.slice(11, 13);

    if (hour > 6 && hour < 18) {
        bg = "sprites/bg.png"; 
    } else {
        bg = "sprites/bg2.jpg"; 
    }

    backgroundImg = loadImage(bg); 
}
