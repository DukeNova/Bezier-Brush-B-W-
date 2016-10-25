var value = 0;
function setup() {
  createCanvas (1200, 700);
  noFill();
  background(255);
}

function draw() {
  for (var i = 0; i < 500; i += 190) {
    bezier(mouseX-(i/18.0), 40+i, 600, 350, 600, 350, mouseX-(i/16.0), mouseY+(i/8.0)); }
    stroke(value) }

function keyTyped() {
  if (key === 'w') {
    value = 255;
  } else if (key === 'b') {
    value = 0; }
  if (key === 'g'){
    value = 75 }
}

function mousePressed() {
  clear();
}