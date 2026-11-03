const textMeBtn = document.querySelector('#text-me-btn');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('#closeModalBtn');

textMeBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  overlay.style.display='block';
})

closeModalBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  overlay.style.display ='none';
})
