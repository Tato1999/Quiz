var nameText;
var nameTextValue;
var nameValueInLocal;
var nameInDocumet;
var nameInDocumetIn;
nameValueInLocal = localStorage.getItem('name');
setInterval(nameInner, 100);
function nameInLocal() {
  nameText = document.getElementById('name');
  nameTextValue = nameText.value;
  if (nameTextValue != null && nameValueInLocal == null) {
    localStorage.setItem('name', nameTextValue);
  } else {
    console.log('error');
  }
  console.log(nameTextValue);
  nameValueInLocal = localStorage.getItem('name');
  nameInner();
}
function nameInner() {
  nameInDocumet = document.getElementById('yorName');
  if (nameValueInLocal != null) {
    nameInDocumet.innerHTML = 'Your Name: ' + nameValueInLocal;
  } else {
    nameInDocumet.innerHTML = 'First log In';
  }
}
function clearName() {
  localStorage.removeItem('name');
}
