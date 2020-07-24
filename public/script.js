const composebtn = document.querySelector('.compose-btn');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.fa');

composebtn.addEventListener('click', () => {
   modal.style.display = "block"
})

closeIcon.addEventListener('click', () => {
   modal.style.display = "none"
});


const likes = document.querySelectorAll('.like i');
const unlikes = document.querySelectorAll('.unlike i');

likes.forEach(like => {
   like.addEventListener('click', () => {
      like.style.color = "aquamarine";
   });
})

unlikes.forEach(unlike => {
   unlike.addEventListener('click', () => {
      unlike.style.color = "#DF5F4E";
   });
})

