//attractor to spin lines
var Attractor = function(x,y) {
  this.start = createVector(x,y)
  // gravitational attraction
  this.calculateAttraction = function(p) {
    this.pos = createVector(this.start.x, this.start.y);
    this.mass = 20;
    this.G = 0.9;
    // Calculate direction of force
    var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 0, 10);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  }
}