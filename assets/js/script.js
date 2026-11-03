const textMeBtn = document.querySelector('#text-me-btn');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('#closeModalBtn');
const sendFormBtn = document.querySelector('#send-Form-Btn');
const userName = document.querySelector('#nameField');
const userEmail = document.querySelector('#emailField');
const contactReason = document.querySelector('#reasonContact');
const contactDate = document.querySelector('#dateField');
const contactMessage = document.querySelector('#reasonCall');
const acceptTerms = document.querySelector('#acceptTerms');
const myForm = document.querySelector('#myForm');
const contactTitle = document.querySelector('#contacts-title');
const contactPar = document.querySelector('#contacts-par')

const contactRequest ={
  name:'',
  email:'',
  reason:'',
  appointment:'',
  message:'',
  accept:false,
}

textMeBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  overlay.style.display='block';
})

closeModalBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  overlay.style.display ='none';
})

myForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  contactRequest.name=userName.value.trim();
  contactRequest.email = userEmail.value.trim();
  contactRequest.reason = contactReason.value;
  contactRequest.appointment = contactDate.value;
  contactRequest.accept = acceptTerms.checked;
  contactRequest.message=contactMessage.value;
  overlay.style.display='none';
  contactTitle.textContent =`Ciao ${contactRequest.name}`;
  contactPar.textContent= `Verrai contattato in data ${contactRequest.appointment} all'indirizzo email : ${contactRequest.email} ti ringrazio nel frattempo per il tuo messaggio : ${contactRequest.message}`;
  myForm.reset();
})


