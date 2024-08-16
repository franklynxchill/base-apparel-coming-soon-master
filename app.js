const email = document.getElementById('email');
const error = document.getElementById('error');
const errorIcon = document.getElementById('error-icon');


email.addEventListener('input', () => {
  if(email.value.length == 0) {
    errorIcon.style.display = 'block';
    error.style.display = 'block';
    email.style.borderColor = 'hsl(0, 93%, 68%)';
    return false;
  }
  if(!email.value.match((/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
    errorIcon.style.display = 'block';
    error.style.display = 'block';
    email.style.borderColor = 'hsl(0, 93%, 68%)';
    return false;
  }
  else{
    errorIcon.style.display = 'none';
    error.style.display = 'none';
    email.style.borderColor = 'hsl(0, 36%, 70%)';
    return true;
  }
})