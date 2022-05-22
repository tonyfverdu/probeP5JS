let myCanvas;
let backgroundRandom;
let myAmbientLigtht; 
let myambientMaterial;

const dimensionCube = [];
let lenghtOfCubes;
const myspecularMaterial = [];
const varTranslate = [];
let letSymbolTranslate = 1;
const velocityIncrementZ = [], velocityIncrementY = [], velocityIncrementX = [];

let dimensionSphere;

function setup() {
	myCanvas = createCanvas(1200, 910, WEBGL);
	console.log(myCanvas);

	backgroundRandom   = Math.floor(Math.random() * 150 + 1);
	myAmbientLigtht    = Math.floor(Math.random() *  30 + 1);
	myambientMaterial  = Math.floor(Math.random() *  255) + 1;

	lenghtOfCubes = Math.floor(Math.random() * 12) + 1;
	for (let i = 0; i < lenghtOfCubes; i++) {
		if ((Math.random() - 0.5) > 0) {
			letSymbolTranslate =  1;
		} else {
			letSymbolTranslate = -1;
		}
		varTranslate[i] = Math.floor(Math.random() *  15) + 2;
		myspecularMaterial[i] = Math.floor(Math.random() *  255) + 220;
		dimensionCube[i] = Math.floor(Math.random() * 150) + 10;
		velocityIncrementX[i] = Math.floor(Math.random() *  0.07) + 0.01;
		velocityIncrementY[i] = Math.floor(Math.random() *  0.06) + 0.01;
		velocityIncrementZ[i] = Math.floor(Math.random() *  0.05) + 0.01;
	}

	dimensionSphere = Math.floor(Math.random() * 120) + 30;
  }

  	document.addEventListener ( ('click'), (e) => {
		backgroundRandom = Math.floor(Math.random() * 150 + 1);
		myAmbientLigtht  = Math.floor(Math.random() *  30 + 1);
		myambientMaterial = Math.floor(Math.random() *  255) + 1;

		lenghtOfCubes = Math.floor(Math.random() * 6) + 1;
		for (let i = 0; i < lenghtOfCubes; i++) {
			if ((Math.random() - 0.5) > 0) {
				letSymbolTranslate =  1;
			} else {
				letSymbolTranslate = -1;
			}
			varTranslate[i] = Math.floor(Math.random() *  12) + 1;
			myspecularMaterial[i] = Math.floor(Math.random() *  255) + 220;
			dimensionCube[i] = Math.floor(Math.random() * 150) + 10;
			velocityIncrementX[i] = Math.floor(Math.random() *  0.07) + 0.01;
			velocityIncrementY[i] = Math.floor(Math.random() *  0.06) + 0.01;
			velocityIncrementZ[i] = Math.floor(Math.random() *  0.05) + 0.01;
		}
		dimensionSphere = Math.floor(Math.random() * 120) + 30;
  });
  
  function draw() {
	background(backgroundRandom);
  
	let locX = mouseX - height / 2;
	let locY = mouseY - width /  2;
  
	ambientLight(myAmbientLigtht);
	directionalLight(255, 0, 0, 0.25, 0.25, 0);
	pointLight(0, 0, 255, locX, locY, 255);
  
	for (let i = 0; i < lenghtOfCubes;i++) {
		push();
		translate(letSymbolTranslate * width / varTranslate[i], letSymbolTranslate * width/ varTranslate[i], letSymbolTranslate * width/ varTranslate[i]);
		rotateX(frameCount * velocityIncrementX[i]);
		rotateY(frameCount * velocityIncrementY[i]);
		rotateZ(frameCount * velocityIncrementZ[i]);
		specularMaterial(myspecularMaterial[i]);
		box(dimensionCube[i], dimensionCube[i], dimensionCube[i]);
		pop();
	}
	
  
	translate(width / 6, 0, 0);
	ambientMaterial(myambientMaterial);
	sphere(dimensionSphere, 80);
  }
