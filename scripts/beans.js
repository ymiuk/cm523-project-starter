const stepArr = Array.from(document.querySelectorAll('.step'))

stepArr[0].addEventListener('click', () => {
  window.location.href = '../index.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../2-coffeeStyles.html'
})