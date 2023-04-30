/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const stepItemArr = Array.from(document.querySelectorAll('.step_item'))
const startBtn = document.querySelector('.start_btn')
const homeContainer = document.querySelector('.home_container')

async function stepFunc(el, url) {
  el.addEventListener('click', () => {
    window.location.href = url
  })
}

// scrolling from top page and bottom page 
let isStepPage = false

// click Start to move
/* 
startBtn.addEventListener('click', () => {
  isStepPage = true
  homeContainer.style.marginTop = '-100vh'
})
*/

window.onmousewheel = document.onmousewheel = (e) => {
  if (e.wheelDelta < 0 && !isStepPage) {
    isStepPage = true
    homeContainer.style.marginTop = '-100vh'
  } else if (e.wheelDelta > 0 && isStepPage) {
    isStepPage = false
    homeContainer.style.marginTop = '0'
  }
}

startBtn.addEventListener('click', () => {
  const innerHeight = window.innerHeight
  window.scrollTo({
    top: innerHeight,
    behavior: 'smooth'
  })
})


