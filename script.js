const button = document.getElementById('start')
const light  = document.getElementById('light')
const text = document.getElementById('text')

function func(){
  button.classList.toggle('active')
  light.classList.toggle('on')
  text.classList.toggle('text')
}
