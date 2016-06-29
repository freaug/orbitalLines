// bezzier array
var particles = [];
//noise offsets
var xoff = 0;
var yoff = 0;
// attractor
var attractor;
//initial slider value
var alph = 1;
//create several attractors
var attractors = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 1; j++) {
      particles[i] = new Particle(random(width), random(height), random(1, 5));
      attractors[j] = new Attractor(random(width), random(height));
    }
  }
  //alpha slider
  alphSlider = createSlider(1.0, 8.0, 1);
  alphSlider.position(40, 20);
  textSize(12);
}

function draw() {
  background(0, 20);
  text("Alpha Slider", 45, 18)
  fill(255);
  text("Click to Change Grav Point", windowWidth-190, 18);
  //x offset for noise
  xoff += 0.00001;
  // Attractor attracts particle
  for (var i = 0; i < particles.length; i++) {
    for (var j = 0; j < attractors.length; j++) {
      var force = attractors[j].calculateAttraction(particles[i]);
      particles[i].applyForce(force);
      particles[i].update(xoff);
      particles[i].display(alph);
    }
  }
  //control alpha of shapes
  alph = alphSlider.value()
    // if there are more than 3 attractor delete the first one in the array
  if (attractors.length > 3) {
    attractors.splice(0, 1);
  }
}
// add attractors to the scene
function mousePressed() {
  var a = new Attractor(mouseX, mouseY);
  attractors.push(a);
}