var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	W = canvas.width = window.innerWidth;
 	H = canvas.height = window.innerHeight;
 	minWH = Math.min(W,H);

		wordSize1 = minWH/6;
		wordSize2 = minWH/7;
	gridY = 7, gridX = 7;

	type = "ball";

   colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
  ];

var message1 = document.getElementById('message1');
var message2 = document.getElementById('message2');
   graVal = parseFloat("0");
   durVal = parseFloat("0.10");
   spdVal = parseFloat("0.05");
   radVal = parseFloat("2");
   resVal = parseFloat("9");

var word1 = new Shape(W/2, H*0.38, message1.value,wordSize1);
	word1.getValue();
var word2 = new Shape(W/2, H*0.55, message2.value,wordSize2);
	word2.getValue();


(function drawFrame(){
	window.requestAnimationFrame(drawFrame, canvas);
	context.clearRect(0, 0, W, H);

	for(var i=0; i< word1.placement.length; i++){
		word1.placement[i].update();
	}
	for(var i=0; i< word2.placement.length; i++){
		word2.placement[i].update();
	}
}())

window.addEventListener('resize', resize, false);

