let bold = document.getElementById('bold');
let color = document.getElementById('color');
let wigth = document.getElementById('wigth');
let text = document.getElementById('text');

bold.addEventListener('click', function() {
    // console.log('ok');
    text.classList.toggle('fw-bold');
});
color.addEventListener('click', function() {
    text.classList.toggle('text-danger');
});
wigth.addEventListener('click', function() {
    text.classList.toggle('fs-2');
});

