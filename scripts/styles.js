const stepArr = Array.from(document.querySelectorAll('.step'))
/*
stepArr[0].addEventListener('click', () => {
  window.location.href = '../beans.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../3-brewingTools.html'
})
*/

const styleChoice = Array.from(document.getElementsByName('style-type'));

const saveBtn = document.getElementById('save-choices');

styleChoice[0].addEventListener('change', getStyleInfo);
styleChoice[1].addEventListener('change', getStyleInfo);
styleChoice[2].addEventListener('change', getStyleInfo);
styleChoice[3].addEventListener('change', getStyleInfo);
styleChoice[4].addEventListener('change', getStyleInfo);
styleChoice[5].addEventListener('change', getStyleInfo);

saveBtn.addEventListener('click', getStyleInfo );
  
  function getStyleInfo(){
    styleChoice.forEach( style => {
      if (style.checked) {
        localStorage.setItem('roast choice', style.value )
        console.log('your coffee style is ' + style.value);
      }
    });
}