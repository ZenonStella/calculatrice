// let btnAdd = document.getElementById('btn+');
// let btnSub = document.getElementById('btn-');
// let btnModulo = document.getElementById('btn%');
// let btnX = document.getElementById('btnx');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');
// let btn6 = document.getElementById('btn6');
// let btn7 = document.getElementById('btn7');
// let btn8 = document.getElementById('btn8');
// let btn9 = document.getElementById('btn9');
// let btnCE = document.getElementById('btnCE');
// let btnEq = document.getElementById('btn=');
let nb1 = document.getElementById('calcul');
let calcul = document.getElementById('result1');
let nb2 = document.getElementById('result2');
let val3 = document.getElementById('result3');

function getNumber(val) {
    nb1.innerHTML += val
}
function getAddOperator(operator) {
    calcul.innerText = operator
}

