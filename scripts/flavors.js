const stepArr = Array.from(document.querySelectorAll('.step'))
/*
stepArr[0].addEventListener('click', () => {
  window.location.href = '../3-brewingTools.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../lastPage.html'
})
*/
const flavorChoice = Array.from(document.getElementsByName('flavor-type'));

const saveBtn = document.getElementById('save-choices');

flavorChoice[0].addEventListener('change', getFlavorInfo);
flavorChoice[1].addEventListener('change', getFlavorInfo);
flavorChoice[2].addEventListener('change', getFlavorInfo);
flavorChoice[3].addEventListener('change', getFlavorInfo);
flavorChoice[4].addEventListener('change', getFlavorInfo);
flavorChoice[5].addEventListener('change', getFlavorInfo);
flavorChoice[6].addEventListener('change', getFlavorInfo);

saveBtn.addEventListener('click', getFlavorInfo );
  
  function getFlavorInfo(){
    flavorChoice.forEach( flavor => {
      if (flavor.checked) {
        localStorage.setItem('roast choice', flavor.value )
        console.log('the flavor you want to add is ' + flavor.value);
      }
    });
}
