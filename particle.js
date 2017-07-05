// Particle Contructor Function
function Particle(x , y) {
this.pos = createVector(x , y)
this.vel = p5.Vector.random2D();//createVector();
this.acc = createVector();
this.prev = createVector(x ,y);



this.show = function () {

stroke(255 , 80);
strokeWeight(1);
line(this.pos.x , this.pos.y , this.prev.x , this.prev.y);

  
  this.prev.x = this.pos.x;
  this.prev.y = this.pos.y;
}


this.update = function () {
this.pos.add(this.vel);
this.vel.add(this.acc);
this.acc.mult(0);

}


this.attraction = function(attractor) {

    // To Calculate Force from Newton Law ==> F = m1 * m2 * G / d ^ 2 
    // For Simplicity ==> m1 , m2 ==> 1 
    // Law Become ==> F = G / D ^ 2 ===> G = 6.67 * 10 ^ -11 
    // Direction Vector from Particle to Target Attractor
    var direction = p5.Vector.sub(attractor , this.pos);
    var distSqaured = direction.magSq(); // d ^ 2 
    // constrain Values of distSqaure 
    distSqaured = constrain(distSqaured , 25 , 500);
    var G = 20;
    var magntuide = G / distSqaured;
    direction.setMag(magntuide);
    this.acc = direction;
    

}


}