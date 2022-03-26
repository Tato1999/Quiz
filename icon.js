
var firstIcon, secondIcon, thirdIcon, setup;
function imageInner(){
    firstIcon = new Image(100, 100);
    firstIcon.src = 'First.png'
    firstIcon.style.borderRadius = "50%";
    document.getElementById('image1').appendChild(firstIcon);
    
    secondIcon = new Image(100, 100);
    secondIcon.src = 'Second.png'
    secondIcon.style.borderRadius = "50%";
    document.getElementById('image2').appendChild(secondIcon);
  
    thirdIcon = new Image(100, 100);
    thirdIcon.src = 'Third.png'
    thirdIcon.style.borderRadius = "50%";
    document.getElementById('image3').appendChild(thirdIcon);
}
function click1(){
    setup = 1;
    localStorage.setItem('setup', setup);
}
function click2(){
    setup = 2;
    localStorage.setItem('setup', setup);
}
function click3(){
    setup = 3;
    localStorage.setItem('setup', setup);
}
  imageInner();