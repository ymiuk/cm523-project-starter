const stepArr = Array.from(document.querySelectorAll('.step'))
/*
stepArr[0].addEventListener('click', () => {
  window.location.href = '../index.html'
})

stepArr[1].addEventListener('click', () => {
  window.location.href = '../2-coffeeStyles.html'
})
*/
const beanChoice = Array.from(document.getElementsByName('bean-type'));
const roastChoice = Array.from(document.getElementsByName('roast-type'));

const saveBtn = document.getElementById('save-choices');

beanChoice[0].addEventListener('change', getBeanInfo);
beanChoice[1].addEventListener('change', getBeanInfo);

saveBtn.addEventListener('click', getBeanInfo );

function getBeanInfo(){
  beanChoice.forEach( bean => {
    if (bean.checked) {
      localStorage.setItem('bean choice', bean.value )
      console.log('your bean is ' + bean.value);

    }
  });
}
  // roast goes here

  roastChoice[0].addEventListener('change', getRoastInfo);
  roastChoice[1].addEventListener('change', getRoastInfo);
  roastChoice[2].addEventListener('change', getRoastInfo);
  
  saveBtn.addEventListener('click', getRoastInfo );
  
  function getRoastInfo(){
    roastChoice.forEach( roast => {
      if (roast.checked) {
        localStorage.setItem('roast choice', roast.value )
        console.log('the roast of bean you picked is ' + roast.value);
  
      }
    });
}