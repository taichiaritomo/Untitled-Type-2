var myCanvas;


var font;
function preload() {
  font = loadFont('./assets/NeubauGrotesk-85Schwer.otf');
}

var points;
var bounds;
var r;
//function setup() {
//  createCanvas(100, 100);
//  stroke(0);
//  fill(255, 104, 204);
//
//  points = font.textToPoints('p5', 0, 0, 10, {
//    sampleFactor: 5,
//    simplifyThreshold: 0
//  });
//  bounds = font.textBounds(' p5 ', 0, 0, 10);
//}

function setup() {
  pixelDensity(1);
  myCanvas = createCanvas(1000,800);
  myCanvas.parent('canvas-container');
  background('#fae');
  
  points = font.textToPoints('East', 100, 200, 14, {
    sampleFactor: 0.05,
    simplifyThreshold: 0
  });
  
  r = 0;
  ellipseMode(RADIUS);
  noFill();
  
//  strokeWeight(2);
  
  
//  console.log(points);
//  bounds = font.textBounds('')
}

function draw() {
  clear();
  for (var i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
    ellipse(points[i].x, points[i].y, r, r);
  }
  r+=0.2;
}