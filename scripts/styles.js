const stepArr = Array.from(document.querySelectorAll('.step'))

stepArr[0].addEventListener('click', () => {
  window.location.href = '../beans.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../3-brewingTools.html'
})