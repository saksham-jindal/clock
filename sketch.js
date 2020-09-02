var h,m,s;
var angleh,anglem,angles;
function setup() {
  createCanvas(350,350);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  translate(150,150);
  rotate(-90);
  h =hour();
  m = minute();
  s = second();
  angles = map(s,0,60,0,360);
  anglem = map(m,0,60,0,360);
  angleh=  map(h%12,0,12,0,360);
  push ();
  rotate (angles);
  stroke ("red");
  strokeWeight (4);
  line (0,0,100,0);
  pop ();  

  push ();
  rotate (anglem);
  stroke ("blue");
  strokeWeight (4);
  line (0,0,75,0);
  pop (); 
  
  push ();
  rotate (angleh);
  stroke ("green");
  strokeWeight (4);
  line (0,0,75,0);
  pop ();  
  stroke("black");
  point (0,0);
  strokeWeight(8);
  noFill ();
  stroke("yellow");
  arc (0,0,300,300,0,angles);
  stroke("orange");
  arc (0,0,280,280,0,anglem);
  stroke("pink");
  arc (0,0,260,260,0,angleh);
  
}