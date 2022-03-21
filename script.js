var QUESTION1 = {
  Quest: 'Which shape are the typical orbits of comets?',
  ANS1: 'Triangle',
  ANS2: 'Rectangular',
  ANS3: 'Elliptical',
  ANS4: 'Help',
  correctAnw: 'ANS3',
};
var QUESTION2 = {
  Quest:
    'According to Isaac Newton, he was inspired to formulate the theory of gravitation when watching the fall of which fruit from a tree?',
  ANS1: 'Grapes',
  ANS2: 'Apple',
  ANS3: 'Pearls',
  ANS4: 'Help',
  correctAnw: 'ANS2',
};
var QUESTION3 = {
  Quest:
    'Which natural force helps us slows down the car when pulling the brake?',
  ANS1: 'Resistance force',
  ANS2: 'Friction force',
  ANS3: 'Tension force',
  ANS4: 'Help',
  correctAnw: 'ANS2',
};
var QUESTION4 = {
  Quest:
    'Which of the following energy resources generates most of the electricity used all over the world?',
  ANS1: 'Fossil fuels',
  ANS2: 'Renewable energy resources',
  ANS3: 'Nuclear power',
  ANS4: 'Help',
  correctAnw: 'ANS1',
};
var QUESTION5 = {
  Quest: 'Which of the following speeds is faster??',
  ANS1: 'The speed of sound',
  ANS2: 'The speed of light',
  ANS3: 'The speed of electricity',
  ANS4: 'Help',
  correctAnw: 'ANS2',
};
var QUESTION6 = {
  Quest: 'Which of the following can be measured by the unit horsepower or HP?',
  ANS1: 'Electrical resistance',
  ANS2: 'The output of motors',
  ANS3: 'Air temperature',
  ANS4: 'Help',
  correctAnw: 'ANS2',
};
var QUESTION7 = {
  Quest: 'There are 4 states of matter in physics: gas, liquid, solid, and …',
  ANS1: 'Electron',
  ANS2: 'Crystal',
  ANS3: 'Plasma',
  ANS4: 'Help',
  correctAnw: 'ANS3',
};
var QUESTION8 = {
  Quest: 'Which kind of lens is used to make a magnifying glass?',
  ANS1: 'Convex lens',
  ANS2: 'Concave lens',
  ANS3: 'Plano concave lens',
  ANS4: 'Help',
  correctAnw: 'ANS1',
};
var QUESTION9 = {
  Quest: 'How many colours are there in sunlight?',
  ANS1: '7',
  ANS2: '3',
  ANS3: '1',
  ANS4: 'Help',
  correctAnw: 'ANS1',
};
var QUESTION10 = {
  Quest: 'How can we calculate the velocity of a vehicle?',
  ANS1: 'Divide the travelled distance by the taken time',
  ANS2: 'Divide the taken time by the travelled distance',
  ANS3: 'Multiply the travelled distance with the taken time',
  ANS4: 'Help',
  correctAnw: 'ANS1',
};
var QUESTION_LIST = [
  QUESTION1,
  QUESTION2,
  QUESTION3,
  QUESTION4,
  QUESTION5,
  QUESTION6,
  QUESTION7,
  QUESTION8,
  QUESTION9,
  QUESTION10,
];
var DELETE_QUESTION = false;
var test = localStorage.getItem('point');
var test1 = localStorage.getItem('Quest');
var LIST_NUM = Math.floor(Math.random() * 10);
const CONST_list_NUM = LIST_NUM;
var QUESTION_VALUE;
var ANS1_VALUE;
var ANS2_VALUE;
var ANS3_VALUE;
var ANS4_VALUE;
var correctAnw_value;
var CHECK_ANS1 = false;
var CHECK_ANS2 = false;
var CHECK_ANS3 = false;
var CHECK_ANS4 = false;

var style1;
var style2;
var style3;

var startGamePoint = 0;
/*function submitClick() {
  AddQuestionInHtml();
  checkAns();
}*/

function AddQuestionInHtml() {
  QUESTION_VALUE = QUESTION_LIST[LIST_NUM].Quest;
  ANS1_VALUE = QUESTION_LIST[LIST_NUM].ANS1;
  ANS2_VALUE = QUESTION_LIST[LIST_NUM].ANS2;
  ANS3_VALUE = QUESTION_LIST[LIST_NUM].ANS3;
  ANS4_VALUE = QUESTION_LIST[LIST_NUM].ANS4;
  correctAnw_value = QUESTION_LIST[LIST_NUM].correctAnw;

  AddAnsHtml1();
  AddAnsHtml2();
  AddAnsHtml3();
  AddAnsHtml4();

  document.getElementById('contentQuestion').innerHTML = QUESTION_VALUE;
  changeQuestion();
}
function AddAnsHtml1() {
  document.getElementById('firstAnswer').innerHTML = ANS1_VALUE;
}
function AddAnsHtml2() {
  document.getElementById('secondAnswer').innerHTML = ANS2_VALUE;
}
function AddAnsHtml3() {
  document.getElementById('thirdAnswer').innerHTML = ANS3_VALUE;
}
function AddAnsHtml4() {
  document.getElementById('fourAnswer').innerHTML = ANS4_VALUE;
}
window.addEventListener('load', function () {
  console.log('All assets are loaded');
  AddQuestionInHtml();
  AddAnsHtml1();
  AddAnsHtml2();
  AddAnsHtml3();
  AddAnsHtml4();
});

/*var RADIO_LIST = document.getElementsByName('checkAnswer');
var i;

function checkAns() {
  var RADIO_LIST_LENGHT = RADIO_LIST.length;
  for (i = 0; i < RADIO_LIST_LENGHT; i++) {
    if (RADIO_LIST[i].checked) {
      if (RADIO_LIST[i].value === correctAnw_value) {
        console.log('correct');
        DELETE_QUESTION = true;
        test++;
      } else if (i == 3) {
        console.log('SKIP');
      } else {
        DELETE_QUESTION = true;
        console.log('uncorect');
      }
    }
  }
  //removeQuestion();
  localStorage.setItem('point', test);
  console.log(localStorage.getItem('point'));
}*/
/*function removeQuestion() {
  if (DELETE_QUESTION == true) {
    QUESTION_LIST.splice(LIST_NUM, 1);
    console.log(QUESTION_LIST);
  } else {
    console.log('onlySkip');
  }
}*/
function chekAnsClick1() {
  if ('ANS1' == correctAnw_value) {
    CHECK_ANS1 = true;
    pointCounterInHtml();
    changeColor1();
    setTimeout(AddQuestionInHtml, 300);
  } else {
    CHECK_ANS1 = false;
    changeColor1();
    console.log('uncorrect');
    setTimeout(AddQuestionInHtml, 300);
  }
}
function chekAnsClick2() {
  if ('ANS2' == correctAnw_value) {
    CHECK_ANS2 = true;
    pointCounterInHtml();
    changeColor2();
    setTimeout(AddQuestionInHtml, 200);
  } else {
    console.log('uncorrect');
    CHECK_ANS2 = false;
    changeColor2();
    setTimeout(AddQuestionInHtml, 200);
  }
}
function chekAnsClick3() {
  if ('ANS3' == correctAnw_value) {
    CHECK_ANS3 = true;
    pointCounterInHtml();
    changeColor3();
    setTimeout(AddQuestionInHtml, 200);
  } else {
    CHECK_ANS3 = false;
    console.log('uncorrect');
    changeColor3();
    setTimeout(AddQuestionInHtml, 200);
  }
}
function chekAnsClick4() {
  CHECK_ANS4 = true;
  setTimeout(AddQuestionInHtml, 200);
}

function changeColor1() {
  style1 = document.getElementById('firstAnswer');
  style2 = document.getElementById('secondAnswer');
  style3 = document.getElementById('thirdAnswer');
  if (CHECK_ANS1 != true) {
    style1.style.backgroundColor = 'red';
  } else if (CHECK_ANS1) {
    style1.style.backgroundColor = 'green';
  }
}
function changeColor2() {
  style1 = document.getElementById('firstAnswer');
  style2 = document.getElementById('secondAnswer');
  style3 = document.getElementById('thirdAnswer');
  if (CHECK_ANS2 != true) {
    style2.style.backgroundColor = 'red';
  } else if (CHECK_ANS2) {
    style2.style.backgroundColor = 'green';
  }
}
function changeColor3() {
  style1 = document.getElementById('firstAnswer');
  style2 = document.getElementById('secondAnswer');
  style3 = document.getElementById('thirdAnswer');
  if (CHECK_ANS3 != true) {
    style3.style.backgroundColor = 'red';
  } else if (CHECK_ANS3) {
    style3.style.backgroundColor = 'green';
  }
}
var testStop = 0;
function changeQuestion() {
  console.log(LIST_NUM);
  if (testStop == QUESTION_LIST.length - 1) {
    console.log('adadasda');
  } else if (LIST_NUM < QUESTION_LIST.length - 1) {
    LIST_NUM += 1;
    testStop++;
  } else if (LIST_NUM == QUESTION_LIST.length - 1) {
    LIST_NUM = 0;
  }
  changeColorWhenChangeQuest();
}
function gamePointUp() {
  if (testStop < QUESTION_LIST.length - 1) {
    startGamePoint++;
  }
}
function pointCounterInHtml() {
  gamePointUp();
  document.getElementById('pointDivIdIn').innerHTML = startGamePoint;
}
function changeColorWhenChangeQuest() {
  style1 = document.getElementById('firstAnswer');
  style2 = document.getElementById('secondAnswer');
  style3 = document.getElementById('thirdAnswer');
  if (darkChanger) {
    darkMode();
  } else {
    style1.style.backgroundColor = '';
    style2.style.backgroundColor = '';
    style3.style.backgroundColor = '';
  }
}
var darkChanger = false;
function darkMode() {
  document.body.style.background = 'black';
  document.getElementById('firstAnswer').style.color = 'white';
  document.getElementById('secondAnswer').style.color = 'white';
  document.getElementById('thirdAnswer').style.color = 'white';
  document.getElementById('fourAnswer').style.color = 'white';
  document.getElementById('contentQuestion').style.color = 'white';
  document.getElementById('firstAnswer').style.backgroundColor = '#381900';
  document.getElementById('secondAnswer').style.backgroundColor = '#381900';
  document.getElementById('thirdAnswer').style.backgroundColor = '#381900';
  document.getElementById('fourAnswer').style.backgroundColor = '#381900';
  document.getElementById('contentQuestion').style.backgroundColor = '#381900';
  document.getElementById('contentMain').style.backgroundColor = '#170700';
  document.getElementById('pointDivId').style.backgroundColor = '#381900';
  console.log('dadsada');
}
function lightMode() {
  document.body.style.background = '';
  document.getElementById('firstAnswer').style.color = 'black';
  document.getElementById('secondAnswer').style.color = 'black';
  document.getElementById('thirdAnswer').style.color = 'black';
  document.getElementById('fourAnswer').style.color = 'black';
  document.getElementById('contentQuestion').style.color = 'black';
  document.getElementById('firstAnswer').style.backgroundColor = '';
  document.getElementById('secondAnswer').style.backgroundColor = '';
  document.getElementById('thirdAnswer').style.backgroundColor = '';
  document.getElementById('fourAnswer').style.backgroundColor = '';
  document.getElementById('contentQuestion').style.backgroundColor = '';
  document.getElementById('contentMain').style.backgroundColor = '#b9b9b9';
  console.log('dadsada');
}
function darkModeClick() {
  if (darkChanger) {
    document.body.style.background = '';
    document.getElementById('firstAnswer').style.color = 'black';
    document.getElementById('secondAnswer').style.color = 'black';
    document.getElementById('thirdAnswer').style.color = 'black';
    document.getElementById('fourAnswer').style.color = 'black';
    document.getElementById('contentQuestion').style.color = 'black';
    document.getElementById('firstAnswer').style.backgroundColor = '';
    document.getElementById('secondAnswer').style.backgroundColor = '';
    document.getElementById('thirdAnswer').style.backgroundColor = '';
    document.getElementById('fourAnswer').style.backgroundColor = '';
    document.getElementById('contentQuestion').style.backgroundColor = '';
    document.getElementById('contentMain').style.backgroundColor = '#b9b9b9';
    document.getElementById('pointDivId').style.backgroundColor = 'gold';
    console.log('dadsada');
    darkChanger = false;
  } else if (darkChanger != true) {
    document.body.style.background = 'black';
    document.getElementById('firstAnswer').style.color = 'white';
    document.getElementById('secondAnswer').style.color = 'white';
    document.getElementById('thirdAnswer').style.color = 'white';
    document.getElementById('fourAnswer').style.color = 'white';
    document.getElementById('contentQuestion').style.color = 'white';
    document.getElementById('firstAnswer').style.backgroundColor = '#381900';
    document.getElementById('secondAnswer').style.backgroundColor = '#381900';
    document.getElementById('thirdAnswer').style.backgroundColor = '#381900';
    document.getElementById('fourAnswer').style.backgroundColor = '#381900';
    document.getElementById('contentQuestion').style.backgroundColor =
      '#381900';
    document.getElementById('contentMain').style.backgroundColor = '#170700';
    document.getElementById('pointDivId').style.backgroundColor = '#381900';
    console.log('dadsada');
    darkChanger = true;
  }
}
setInterval(nameInner, 100);
function nameInner() {
  var nameValueInLocal = localStorage.getItem('name');
  var nameInDocumet = document.getElementById('nameIn');
  if (nameValueInLocal != null) {
    nameInDocumet.innerHTML = 'Name: ' + nameValueInLocal;
  } else {
    nameInDocumet.innerHTML = 'First log In';
  }
}

