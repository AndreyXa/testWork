let closeModal = document.querySelector('.modal-text');
let closeModal2 = document.querySelector('.imgclose');
let modal = document.querySelector('.modal');
let modalTitle = document.querySelector('.modal-title');
let modalSubtitle = document.querySelector('.modal-subtitle');

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
   console.log(request);
   request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
         modal.classList.add('modal_active');
         form.reset();
      } else {
         modal.classList.add('modal_active');
         modalTitle.innerHTML = 'ERROR';
         modalSubtitle.remove();
      }
   }

   request.open(this.method, this.action, true);
   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   let data = new FormData(this);

   request.send(data);
}