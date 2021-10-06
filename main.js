img="";
function setup() {
canvas=createCanvas(640,420);
canvas.center();

}
function draw(){
image(img ,0,0,640,420);
fill("#f013e8");
text("Dog",45,75);
stroke("#eb3455");
noFill();
rect(30,60,450,360);
}
function preload(){
img=loadImage("dog_cat.jpg");
}