function setup() {
	createCanvas(1200, 910, WEBGL);
  }
  
  function draw() {
	background(25);
  
	let locX = mouseX - height / 2;
	let locY = mouseY - width /  2;
  
	ambientLight(25);
	directionalLight(255, 0, 0, 0.25, 0.25, 0);
	pointLight(0, 0, 255, locX, locY, 255);
  
	push();
	translate(-width / 6, 0, 0);
	rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.01);
	specularMaterial(255);
	box(160, 160, 160);
	pop();
  
	translate(width / 6, 0, 0);
	ambientMaterial(250);
	sphere(180, 90);
  }
