

var score = 0;
var bestscore = 0;
var Stage = 0;
var timer = 100;
var Interval ;
var InTerval;
var audio;
var img;
var BuTToN;
var K; // market
var Market = 0;
var BLack, First, Second, Third; // button
var img1 , img2 = 0, img3 = 0;
var Volume = 2;
var posx;
var posy;

music();




  
  
  
  

// Start Game button and functions
function startGame() {
  var Start = document.querySelector('.start');
  Start.style.animation = "anim 1.s";
  Start.style.visibility = "hidden";
  Start.style.opacity = "0";
  BuTToN = document.querySelector('.button');
  BuTToN.style.visibility = "visible";
  document.querySelector('.menu').style.visibility = 'hidden';
  volume();
  button();
  
  
}
//play button's icons
function button (){  
 BLack = new Image(50, 50);
 BLack.src = 'Black.png';
 BLack.style.borderRadius = "50%";
 BLack.style.left = "40%";
 BLack.style.top = 40 + "%";
 var IMG = img1;
 if (IMG==1){
   BLack.src = 'First.png';
   document.querySelector('.button').appendChild(BLack);
   console.log('te');
 }
 else if (IMG == 2){
   BLack.src = 'Second.png';
   document.querySelector('.button').appendChild(BLack);
   console.log('e');
 }
 else if (IMG ==3){
  BLack.src = 'Third.png';
  console.log('e');
  document.querySelector('.button').appendChild(BLack);
 }
 else {
 document.querySelector('.button').appendChild(BLack);
}
}

//Market, change icons
function market(){
  Market++;
  if (Market == 1) {
  marketChanger();
  }
  console.log(Market);
  K = document.querySelector('.market-content');
  K.style.visibility = "visible";
  BuTToN.style.visibility = "hidden";

 
}


function marketChanger() {
 
  First = new Image(50, 50);
  First.src = 'First.png';
  First.style.borderRadius = "50%";
  First.style.left = "40%";
  First.style.top = 40 + "%";
  var FIrst = document.querySelector('.B-content-first').appendChild(First);
  
 
  Second = new Image(50, 50);
  Second.src = 'Second.png';
  Second.style.borderRadius = "50%";
  document.querySelector('.B-content-second').appendChild(Second);

  Third = new Image(50, 50);
  Third.src = 'Third.png';
  Third.style.borderRadius = "50%";
  document.querySelector('.B-content-third').appendChild(Third);
}
function first(){ 
 img1 = 1;
 console.log(img1);
  
}
function second(){

 img1 = 2;
 
 console.log(img1);

}
function third(){

 img1 = 3;
  
 console.log(img1);
}
//end Market
function marketOut() {

  K.style.visibility = "hidden";
 
 BuTToN.style.visibility = "visible";

}


//Game functions
function game(){
  ScoreUp();
  StageChange();
  Pos();
  BestScore();
  Timer();
  GameAudio.play();
  
  
  console.log(InTerval);
  }
  volume();function ScoreUp(){
score++;
timer += 3; //Timer Up 
document.querySelector('.score').innerHTML = 'Score' + ' ' + score;


}
function Pos(){
posx = Math.floor(Math.random() *91);
posy = Math.floor(Math.random() *91);
document.getElementById("button").style.left = posx + "%";
document.getElementById("button").style.bottom = posy + "%";
}
//timer
function Timer(){
  if (timer > 0 ) {
    timer-- ;
  }
  if (timer == 0) {
      timer = timer;
      gameOver();
      
      }
  
  
document.querySelector('.timer').innerHTML = timer;
TimerSetting()
}
function TimerSetting(){
 if (score >= 0 && score < 5) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,1000);
 }
 if (score >= 5 && score < 10) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,900);
 }
 if (score >= 10 && score < 20) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,700);
 }
 if (score >= 20 && score < 25) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,500);
 }
 if (score >= 25 && score < 35) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,300);
 }
 if (score >= 35) {
  clearInterval(InTerval);
  InTerval = setInterval(Timer,100);
 }
 
}
//stage
function StageChange() {
  document.querySelector('.stage').innerHTML = " Stage " + Stage;

  if (score >= 0 && score < 5) {
    Stage = 1;
   }
   if (score >= 5 && score < 10) {
    Stage = 2;
   }
   if (score >= 10 && score < 20) {
    Stage = 3;
   }
   if (score >= 20 && score < 25) {
    Stage = 4;
   }
   if (score >= 25 && score < 35) {
    Stage = 5;
   }
   if (score >= 35) {
    Stage = 6;
   }
 
 }
 //bestscore
function BestScore(){
  if (score > bestscore) {
    bestscore = score;
    document.querySelector('.BestScore').innerHTML = " Your Best Score " + bestscore;
    }

}
//volume
function music() {
    
    audio = new Audio('auDio.mp3'); 
    GameAudio = new Audio('GameAudio.mp3');
}
function volume(){
  img = document.createElement('img');
  img.setAttribute('src', 'xma1.jpg')
  img.setAttribute('width', '30px');
  img.setAttribute('height', '30px');
  img.style.borderRadius = "50%";
  var ImG = document.querySelector(".test-image").appendChild(img);
  }
function audioVolume() {
  Volume++ ;
  if (Volume%2 == 0) {
    img.setAttribute('src', 'xma.jpg')
    audio.volume = 0;
    GameAudio.volume = 0;
  }
  else {
    img.setAttribute('src', 'xma1.jpg')
    audio.volume = 1;
    GameAudio.volume = 1;
  }
}
//gameover
function gameOver() {
  GameAudio.pause();
  audio.play();
if (timer == 0) { 
  
  timer=timer;
  document.querySelector('.Over-Score').innerHTML = "your Score"+" "+score;   
  var buTTon = document.querySelector('.button');
  var mainGgameover = document.querySelector('.main-gameover');
  mainGgameover.style.animation = "anim 1s";
  mainGgameover.style.visibility = "visible";
  mainGgameover.style.opacity = "1";
  buTTon.style.opacity = "0";
   }
}
//restart
function Restart(){
  timer = 100;
  score = 0;
  Stage = 0;
  audio.pause();
  GameAudio.play();
  clearInterval(InTerval);
  document.querySelector('.score').innerHTML = 'Score' + ' ' + score;
  var buTton = document.querySelector('.button');
  var mainGameover = document.querySelector('.main-gameover');
  mainGameover.style.animation = "anim 1.s";
  mainGameover.style.visibility = "hidden";
  mainGameover.style.opacity = "0";
  buTton.style.opacity = "1";
  
}

