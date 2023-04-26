/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const stepItemArr = Array.from(document.querySelectorAll('.step_item'))
const startBtn = document.querySelector('.start_btn')
const homeContainer = document.querySelector('.home_container')

async function stepFunc(el, url) {
  el.addEventListener('click', () => {
    window.location.href = url
  })
}

/* step to sub-page
Promise.all([
  stepFunc(stepItemArr[0],'beans.html'), 
  stepFunc(stepItemArr[1],'../2-coffeeStyles.html'),
  stepFunc(stepItemArr[2],'../3-brewingTools.html'),
  stepFunc(stepItemArr[3],'../4-addingFlavors.html')
])
*/
// scrolling from top page and bottom page 
let isStepPage = false

// click start to move
startBtn.addEventListener('click', () => {
  isStepPage = true
  homeContainer.style.marginTop = '-100vh'
})

window.onmousewheel = document.onmousewheel = (e) => {
  if (e.wheelDelta < 0 && !isStepPage) {
    isStepPage = true
    homeContainer.style.marginTop = '-100vh'
  } else if (e.wheelDelta > 0 && isStepPage) {
    isStepPage = false
    homeContainer.style.marginTop = '0'
  }
}


