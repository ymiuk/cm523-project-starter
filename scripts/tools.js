const stepArr = Array.from(document.querySelectorAll('.step'))
/*
stepArr[0].addEventListener('click', () => {
  window.location.href = '../2-coffeeStyles.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../4-addingFlavors.html'
})
*/

const toolChoice = Array.from(document.getElementsByName('tool-type'));

const saveBtn = document.getElementById('save-choices');

toolChoice[0].addEventListener('change', getToolInfo);
toolChoice[1].addEventListener('change', getToolInfo);
toolChoice[2].addEventListener('change', getToolInfo);
toolChoice[3].addEventListener('change', getToolInfo);
toolChoice[4].addEventListener('change', getToolInfo);

saveBtn.addEventListener('click', getToolInfo );
  
  function getToolInfo(){
    toolChoice.forEach( tool => {
      if (tool.checked) {
        localStorage.setItem('tool choice', tool.value )
        console.log('the tool you selected for your coffee is ' + tool.value);
      }
    });
}
