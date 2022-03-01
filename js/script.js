
let array = document.querySelectorAll('.countdown-text');
const SCREEN = window.innerWidth;

if (SCREEN < 676) {
   array[0].innerHTML = 'DD';
   array[1].innerHTML = 'HH';
   array[2].innerHTML = 'MM';
   array[3].innerHTML = 'SS';
}