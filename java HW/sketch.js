function setup() {
createCanvas(400,400);
}

function draw() {
background(155,117,154,45)
fill(0);
noStroke();
textSize(12);
text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
//headhair
fill(237, 76, 130)
ellipse(200,250,320,385)

fill(179, 124, 86);
circle(200,200,260);
fill(87, 33, 3)
stroke(87, 33, 3)
strokeWeight(20)
point(130,180)
noStroke()
fill(201, 165, 177)
rect(150,260,50,50)
}