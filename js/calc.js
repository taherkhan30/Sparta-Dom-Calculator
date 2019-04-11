var btn = document.getElementById('calc-seven');
var btn = document.getElementById('calc-eight');
var btn = document.getElementById('calc-nine');
var btn = document.getElementById('calc-four');
var btn = document.getElementById('calc-five');
var btn = document.getElementById('calc-six');
var btn = document.getElementById('calc-one');
var btn = document.getElementById('calc-two');
var btn = document.getElementById('calc-three');
var btn = document.getElementById('calc-zero');
var clearBtn = document.getElementById('calc-ac');
var display = document.getElementById('calc-display');

var equals = document.getElementById('calc-equals');
var addition = document.getElementById('calc-addition');
var substraction = document.getElementById('calc-minus');
var division = document.getElementById('calc-divide');
var multiplication = document.getElementById('calc-multiply');

var operator = document.getElementsByClassName('operator');
var calcNum = document.getElementsByClassName('buttonNum');
var calcNumClr = document.getElementsByClassName('buttonClear');
var displayValElement = document.getElementById('screen');
var displayVal = '0';
var pendingVal;
var evalStringArray =[];


var updateDisplayVal = (clickObj) => {

  var btnText = clickObj.target.innerText;

  if (displayVal === '0')
    displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;

}

var performOperation = (clickObj) => {

  var operator = clickObj.target.innerText ;
  switch (operator){
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+')
      break;

    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-')
      break;

    case '/':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('/')
      break;

    case '*':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('*')
      break;

    case '=':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(' '));
      displayVal =  evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray - [];
      break;

    default:
      break;
  }

}

clearBtn.onclick =() => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray =[];
  displayValElement.innerHTML = displayVal;
}

for (var i = 0; i < calcNum.length; i++) {
  calcNum[i].addEventListener('click', updateDisplayVal, false)
}
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', performOperation, false)
}
