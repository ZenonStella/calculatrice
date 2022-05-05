let nb1 = document.getElementById('nb1');
let calcul = document.getElementById('calcul');
let nb2 = document.getElementById('nb2');
let result = document.getElementById('result');


// var qui determine le lieu de stokage des chiffres
let line = nb1;

function getNumber(val) {
    line.innerHTML += val
// if (calcul.innerHTML != '') {
//     nb2.innerHTML += val
// }else{
//     nb1.innerHTML += val
// }
}
function getAddOperator(operator) {
    calcul.innerText = operator;
    line = nb2;
}
function reset() {
    nb1.innerHTML = '';
    nb2.innerHTML = '';
    calcul.innerHTML = '';
    result.innerHTML = '';
}
