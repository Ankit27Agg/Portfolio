const button = document.getElementById('start')
const light  = document.getElementById('light')
const logo = document.getElementById('logo')

function func(){
  button.classList.toggle('active')
  light.classList.toggle('on')
  if(logo.textContent === 'Ankit Aggarwal'){
    logo.textContent = 'Hi';
  }
  else{
    logo.textContent = 'Ankit Aggarwal'
  }
}
