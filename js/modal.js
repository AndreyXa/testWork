let closeModal = document.querySelector('.modal-text');
let closeModal2 = document.querySelector('.imgclose');
let modal = document.querySelector('.modal');

closeModal.onclick = function () {
   modal.classList.remove('modal_active');
}
closeModal2.onclick = function () {
   modal.classList.remove('modal_active');
}

let form = document.querySelector('.form');
form.addEventListener('submit', formSend);



function formSend(e) {
   e.preventDefault();
   let request = new XMLHttpRequest();
   
   request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
         console.log('SUCCESS!');
         modal.classList.add('modal_active');
         form.reset();
      } else {
         console.log('error');
      }
   }

   request.open(this.method, this.action, true);
   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   let data = new FormData(this);

   request.send(data);
}