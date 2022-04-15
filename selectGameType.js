var typePointText = document.getElementById('typePointId');
if(localStorage.getItem('point') == undefined){
    typePointText.innerHTML = 'Your Coins:  0';
}else{
    typePointText.innerHTML = 'Your Coins ' + localStorage.getItem('point');
}
var pointsToBuy = localStorage.getItem('point')*1;
var secondBuyCount = 0;
var thirdBuyCount = 0;
unlockSecondStage();
function buySecondStage(){
    if(pointsToBuy*1 >= 250){
        pointsToBuy-= 250;
        localStorage.setItem('point', pointsToBuy);
        typePointText.innerHTML = 'Your Coins ' + localStorage.getItem('point');
        secondBuyCount++;
        localStorage.setItem('secondBuy',secondBuyCount)
    }else{
        alert('u dont have enough coins')
    }
    unlockSecondStage();
}
function unlockSecondStage(){
    secondBuyCount = localStorage.getItem('secondBuy')*1;
    if(secondBuyCount == 1){
        document.getElementById('startStage2Security').style.visibility ='hidden';
        document.getElementById('startStage2').style.visibility = 'visible';
    }
}
unlockThirdStage();
function buyThirdStage(){
    if(pointsToBuy*1 >= 500){
        pointsToBuy-= 500;
        localStorage.setItem('point', pointsToBuy);
        typePointText.innerHTML = 'Your Coins ' + localStorage.getItem('point');
        thirdBuyCount++;
        localStorage.setItem('thirdBuy',thirdBuyCount)
    }else{
        alert('u dont have enough coins')
    }
    unlockThirdStage(); 
}
function unlockThirdStage(){
    thirdBuyCount = localStorage.getItem('thirdBuy')*1;
    if(thirdBuyCount == 1){
        document.getElementById('startStage3Security').style.visibility ='hidden';
        document.getElementById('startStage3').style.visibility = 'visible';
    }
}