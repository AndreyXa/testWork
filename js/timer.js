function getTimeRemaining(endtime) {
   let t = Date.parse(endtime) - Date.parse(new Date());
   let seconds = Math.floor((t / 1000) % 60);
   let minutes = Math.floor((t / 1000 / 60) % 60);
   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   let days = Math.floor(t / (1000 * 60 * 60 * 24));
   return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
   };
}

function initializeClock(endtime) {
   let days = document.querySelector('.days');
   let hours = document.querySelector('.hours');
   let minutes = document.querySelector('.minutes');
   let seconds = document.querySelector('.seconds');

   function updateClock() {
      let t = getTimeRemaining(endtime);

      days.innerHTML = t.days + ' :';
      hours.innerHTML = ('0' + t.hours).slice(-2) + ' :';
      minutes.innerHTML = ('0' + t.minutes).slice(-2) + ' :';
      seconds.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
         clearInterval(timeinterval);
      }
   }

   updateClock();
   let timeinterval = setInterval(updateClock, 1000);
}

const deadline = 'December 31 2022 00:00:00 GMT+0300';
initializeClock(deadline);