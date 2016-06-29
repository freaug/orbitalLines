//create some 'particles'
var Particle = function(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(2, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
//force is applied
  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
    this.acc.mult(0.1)
  };
//update our shapes
  this.update = function(x) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.xoff = x;
    this.n = noise(this.xoff) * width;
    this.m = noise(this.xoff + 10000) * height;
  };
//display our cool shapes
  this.display = function(r) {
    //make a cool shape
    //start point
    var sPos = createVector(this.pos.x + this.n, this.pos.y+ this.m);
    //control 1
    var ctl1 = createVector(this.pos.x, this.pos.y);
    //control 2
    var ctl2 = createVector(this.pos.x, this.pos.y);
    //end point
    var ePos = createVector(width * 0.34, (height * 0.34) + this.m);
    fill(55, 55 + this.m, 155 + this.n, r);
    stroke(55, 55, 125, 10+r);
    bezier(sPos.x+this.n, sPos.y, ctl1.x, ctl1.y, ctl2.x, ctl2.y+this.m, ePos.x, ePos.y);
    bezier(sPos.x, sPos.y, ctl1.x + this.n, ctl1.y + this.m, ctl2.x + this.n, ctl2.y + this.m, ePos.x, ePos.y);
  }
}