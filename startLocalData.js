var nameText;
var nameTextValue;
var nameValueInLocal;
var nameInDocumet;
var nameInDocumetIn;
var startIcon;
var deleteClickCount;
var changeIconValue;
setInterval(nameInnerIn,10);
function nameInLocal() {
  nameText = document.getElementById('name');
  nameTextValue = nameText.value;
  if (nameTextValue != null && nameValueInLocal == null) {
    localStorage.setItem('name', nameTextValue);
  } else {
    console.log('error');
  }
  console.log(nameTextValue);
  nameInnerIn();
}
function nameInnerIn() {
  nameValueInLocal = localStorage.getItem('name');
  nameInDocumet = document.getElementById('yorName');
  if (nameValueInLocal != null) {
    nameInDocumet.innerHTML = 'Hello ' + nameValueInLocal;
  } else {
    nameInDocumet.innerHTML = 'First log In';
  }
}
function clearName() {
  if(sessionStorage.getItem("deleteClickCount") == undefined){
    sessionStorage.setItem("deleteClickCount", 0);
    alert("if U log out, u lost all data. Click again If u are accepted");
  }else if(sessionStorage.getItem("deleteClickCount") == "0"){
    localStorage.clear();
    sessionStorage.removeItem("deleteClickCount");
  }
}
function iconInMe(){
  changeIconValue = localStorage.getItem('setup')
  startIcon = new Image (100,100);
  startIcon.style.borderRadius = "50%";
  if(changeIconValue == null){
    startIcon.src = 'main.jpg';
  } else if(changeIconValue === "1"){
    startIcon.src = 'First.jpg';
  } else if(changeIconValue === "2"){
    startIcon.src = 'Second.jpg';
  } else if(changeIconValue === "3"){
    startIcon.src = 'Third.jpg';
  }
  document.getElementById('image').appendChild(startIcon);
  console.log(changeIconValue);
}
window.addEventListener('load', function(){
  iconInMe();
});

