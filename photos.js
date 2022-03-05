var posy1='down';
var posx1='right';
var posy2='down';
var posx2='right';
var posy3='down';
var posx3='right';
var posy4='down';
var posx4='right';
var posy5='down';
var posx5='right';
var resume = false;
var court;

function animate(){

  var y1=document.getElementById('photos1').offsetTop;
  var x1=document.getElementById('photos1').offsetLeft;
  var xwidth1=document.getElementById('photos1').offsetWidth;
  if(x1+ xwidth1 >= court.width ){
  	posx1 = 'left';
  }
  if(x1 <= court.left ){
  	posx1 = 'right';
  }
  if(posx1 =='right'){
  	x1= x1 + 1;
  }else{
  	x1=x1 - 1;
  }

  if(y1  >= 620 ){
  	posy1 = 'up';
  }
  if(y1 <= 100 ){
  	posy1 = 'down';
  }
  if(posy1 =='down'){
  	y1= y1 + 1;
  }else{
  	y1=y1 - 1;
  }
  document.getElementById('photos1').style.top= y1 + "px"; 
  document.getElementById('photos1').style.left= x1 + "px";


  var y2=document.getElementById('photos2').offsetTop;
  var x2=document.getElementById('photos2').offsetLeft;
  var xwidth2=document.getElementById('photos2').offsetWidth;
  if(x2 + xwidth2 >= court.width ){
  	posx2 = 'left';
  }
  if(x2 <= court.left ){
  	posx2 = 'right';
  }
  if(posx2 =='right'){
  	x2= x2 + 1;
  }else{
  	x2=x2 - 1;
  }

  if(y2 >= 620 ){
  	posy2 = 'up';
  }
  if(y2 <= 100 ){
  	posy2 = 'down';
  }
  if(posy2 =='down'){
  	y2= y2 + 1;
  }else{
  	y2=y2 - 1;
  }
  document.getElementById('photos2').style.top= y2 + "px"; 
  document.getElementById('photos2').style.left= x2 + "px"; 


  var y3=document.getElementById('photos3').offsetTop;
  var x3=document.getElementById('photos3').offsetLeft;
  var xwidth3=document.getElementById('photos3').offsetWidth;
  if(x3 + xwidth3 >= court.width ){
  	posx3 = 'left';
  }
  if(x3 <= court.left ){
  	posx3 = 'right';
  }
  if(posx3 =='right'){
  	x3= x3 + 1;
  }else{
  	x3=x3 - 1;
  }

  if(y3 >= 620 ){
  	posy3 = 'up';
  }
  if(y3 <= 100 ){
  	posy3 = 'down';
  }
  if(posy3 =='down'){
  	y3= y3 + 1;
  }else{
  	y3=y3 - 1;
  }
  document.getElementById('photos3').style.top= y3 + "px"; 
  document.getElementById('photos3').style.left= x3 + "px"; 


  var y4=document.getElementById('photos4').offsetTop;
  var x4=document.getElementById('photos4').offsetLeft;
  var xwidth4=document.getElementById('photos4').offsetWidth;
  if(x4 + xwidth4 >= court.width ){
  	posx4 = 'left';
  }
  if(x4 <= court.left ){
  	posx4 = 'right';
  }
  if(posx4 =='right'){
  	x4= x4 + 1;
  }else{
  	x4=x4 - 1;
  }

  if(y4 >= 620 ){
  	posy4 = 'up';
  }
  if(y4 <= 100 ){
  	posy4 = 'down';
  }
  if(posy4 =='down'){
  	y4= y4 + 1;
  }else{
  	y4=y4 - 1;
  }
  document.getElementById('photos4').style.top= y4 + "px"; 
  document.getElementById('photos4').style.left= x4 + "px"; 


  var y5=document.getElementById('photos5').offsetTop;
  var x5=document.getElementById('photos5').offsetLeft;
  var xwidth5=document.getElementById('photos5').offsetWidth;
  if(x5 + xwidth5 >= court.width ){
  	posx5 = 'left';
  }
  if(x5 <= court.left ){
  	posx5 = 'right';
  }
  if(posx5 =='right'){
  	x5= x5 + 1;
  }else{
  	x5=x5 - 1;
  }

  if(y5 >= 620 ){
  	posy5 = 'up';
  }
  if(y5 <= 100 ){
  	posy5 = 'down';
  }
  if(posy5 =='down'){
  	y5= y5 + 1;
  }else{
  	y5=y5 - 1;
  }
  document.getElementById('photos5').style.top= y5 + "px"; 
  document.getElementById('photos5').style.left= x5 + "px";

  //Collision
  collision(photos1, photos2);
  collision(photos1, photos3);
  collision(photos1, photos4);
  collision(photos1, photos5);
  collision(photos2, photos3);
  collision(photos2, photos4);
  collision(photos2, photos5);
  collision(photos3, photos4);
  collision(photos3, photos5);
  collision(photos4, photos5);

}

function collision(photo1, photo2){
  var p1 = photo1.getBoundingClientRect();
  var p2 = photo2.getBoundingClientRect();

  if(p1.x < p2.x + p2.width &&
          p1.x + p1.width > p2.x &&
          p1.y < p2.y + p2.height &&
          p1.y + p1.height > p2.y){
	
	var i = photo1.id.substr(6);
	var j = photo2.id.substr(6);
	
	if(i==1 || j==1){
		if(posx1 == 'right'){
		posx1 = 'left';
		}else{
		posx1 = 'right'
		}

		if(posy1 == 'up'){
		posy1 = 'down';
		}else{
		posy1 = 'up'
		}
	}
	
	if(i==2 || j==2){
	if(posx2 == 'right'){
		posx2 = 'left';
	}else{
		posx2 = 'right'
	}

	if(posy2 == 'up'){
		posy2 = 'down';
	}else{
		posy2 = 'up'
	}
	}
	
	if(i==3 || j==3){
	if(posx3 == 'right'){
		posx3 = 'left';
	}else{
		posx3 = 'right'
	}

	if(posy3 == 'up'){
		posy3 = 'down';
	}else{
		posy3 = 'up'
	}
	}

	if(i==4 || j==4){
	if(posx4 == 'right'){
		posx4 = 'left';
	}else{
		posx4 = 'right'
	}

	if(posy4 == 'up'){
		posy4 = 'down';
	}else{
		posy4 = 'up'
	}
	}

	if(i==5 || j==5){
	if(posx5 == 'right'){
		posx5 = 'left';
	}else{
		posx5 = 'right'
	}

	if(posy5 == 'up'){
		posy5 = 'down';
	}else{
		posy5 = 'up'
	}
	}
  }
}

function initialize(){
	resume = true;
	animate();
	animatetime =setTimeout('initialize()',10);
}

function initializeFirst(){
	court = document.getElementById('court').getBoundingClientRect();
}

function resumeAction(){
	if(resume==true){
		clearTimeout(animatetime);
		resume = false;
	}else{
		initialize();
	}
}

window.onload=function(){
	initializeFirst();
	initialize();
}