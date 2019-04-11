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

var calcNumOp = document.getElementsByClassName('operator');
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

for (var i = 0; i < calcNum.length; i++) {
  calcNum[i].addEventListener('click', updateDisplayVal, false)
}
// for (var i = 0; i < operator.length; i++) {
//   operators[i].addEventListener('click', performOperation, false)
// }


clearBtn.onclick =() => {
  displayVal= '0';
  pendingVal = undefined;
  evalStringArray =[];
  displayValElement.innerHTML = displayVal;
}
