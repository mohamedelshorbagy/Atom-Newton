/* 
  # Mohamed Elshorbagy
  # 04 / 07 / 2017
  # Attraction Forces with Particles

*/ 

var particles = [];

var attractor;




function setup() {
createCanvas(500 , 500);
attractor = createVector(250 , 250);
for (var i = 0 ; i < 100 ; i++) {
    particles.push(new Particle(250 , 100));
}
background(51);

}


function draw() {

stroke(0 , 255 ,0);
strokeWeight(4);
point(attractor.x , attractor.y);

for (var i = 0 ; i < particles.length ; i++) {
var particle = particles[i];
particle.attraction(attractor);
particle.update();
particle.show();
}

}

