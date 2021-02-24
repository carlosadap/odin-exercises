const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
  console.log(e.target)
  e.target.style.background = 'blue';
})