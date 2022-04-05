
var particles = [];
var attractors = [];

function setup() {
	createCanvas(500,500);
	for (let i = 0; i < 20; i++) {
    	particles[i] = new Particle(random(50,width-50),random(50,height-50),random(2,5));
  	}

  	for (let i = 0; i < 1; i++) {
    	attractors[i] = new Attractor(random(0,width),random(0,height));
  	}
}

function draw() {
	background(0);

	for (let j = 0; j < attractors.length; j++) {
			attractors[j].update();
			attractors[j].display();
			attractors[j].checkEdges();
	
		for (let i = 0; i < particles.length; i++) {
			var force = attractors[j].calculateAttraction(particles[i]);
			particles[i].applyForce(force);
			particles[i].update();
			particles[i].display();
		}
	}

	// p1.checkEdges();

}


class Particle {
	
	constructor(startX, startY, startMass){
		this.mass = startMass;
		this.r = 10;
		this.pos = createVector(startX, startY);
		this.vel = createVector(random(0.6,0.8), random(0.6,0.8));
		this.acc = createVector(0, 0);
	}

	applyForce(force) {
		var f = p5.Vector.div(force, this.mass);
		this.acc.add(force);
	} 

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	display() {
		stroke(255);
		strokeWeight(2);
		noFill();
		ellipse(this.pos.x, this.pos.y,this.mass*2,this.mass*2);
	}

	// checkEdges() {

	// 	if (this.pos.x > (width-this.r)) {
	// 	  this.vel.x *= -1;
	// 	  this.pos.x = width-this.r;
	// 	} else if (this.pos.x < (0+this.r)) {
	// 	  this.vel.x *= -1;
	// 	  this.pos.x = 0+this.r;
	// 	}

	// 	if (this.pos.y > (height-this.r)) {
	// 	  this.vel.y *= -1;
	// 	  this.pos.y = height-this.r;
	// 	} else if (this.pos.y < (0+this.r)) {
	// 	  this.vel.y *= -1;
	// 	  this.pos.y = 0+this.r;
	// 	}

	// }

}