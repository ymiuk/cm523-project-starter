const btnArr = Array.from(document.querySelectorAll('.item'))
/*
const backBtn = document.querySelector('.back')
const submitBtn = document.querySelector('.submitBtn')
const img = document.querySelector('.img')
const homeContainer = document.querySelector('.home_container')

// coffee IMG that show up after button clicked
const imgArr = [
  'https://images.unsplash.com/photo-1593231269103-6667d6905882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
  'https://images.unsplash.com/photo-1574914629385-46448b767aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1583165278997-0250ea5d72e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXNwcmVzc298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1618576230663-9714aecfb99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9jaGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1462917882517-e150004895fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003s.jpg'
]
// clear results
function clearClass() {
  btnArr.forEach(item => {
    item.setAttribute('class', 'item')
  })
}

// while item chosen
function setChosenClass(el, index) {
  clearClass()
  el.setAttribute('class', 'item chosen')
  img.setAttribute('src', imgArr[index])
  img.style.display = 'block'
}

btnArr.forEach((item, index) => {
  item.addEventListener('click', () => {
    submitBtn.style.opacity = 1;
    submitBtn.style.pointerEvents = 'auto'
    setChosenClass(item, index)
  })
})

// submit button
submitBtn.addEventListener('click', () => {
  submitBtn.setAttribute('class', 'chosen')
  // isStepPage = true
  homeContainer.style.marginTop = '-100vh'
})

// Back to homepage

backBtn.addEventListener('click', () => {
  window.location.href = '../index.html'
})


// let isStepPage = false


// window.onmousewheel = document.onmousewheel = (e) => {
//   if (e.wheelDelta < 0 && !isStepPage) {
//     isStepPage = true
//     homeContainer.style.marginTop = '-100vh'
//   } else if (e.wheelDelta > 0 && isStepPage) {
//     isStepPage = false
//     homeContainer.style.marginTop = '0'
//   }
// }


/*  <legend>Dinner</legend>
<input type="radio" name="dinnerChoices" id="dinnerChoiceFish" value="Fish"> Fish
<input type="radio" name="dinnerChoices" id="dinnerChoiceChicken" value="Chicken"> Chicken
<input type="radio" name="dinnerChoices" id="dinnerChoiceVeggies" value="Veggies"> Veggies
</fieldset> 

<input type="radio" name="flavor-type" id="flavor-input" value="Whole Milk"><label for="flavor-input">Whole Milk</label>

/*to display the user input, input = any choices*/
function getOrder(){
  beanChoice.forEach( bean => {
    if (bean.checked) {
      localStorage.setItem('bean choice', bean.value )
      console.log('your bean is ' + bean.value);

    }
  });
  roastChoice.forEach( roast => {
    if (roast.checked) {
      localStorage.setItem('roast choice', roast.value )
      console.log('the roast of bean you picked is ' + roast.value);

    }
  });
  styleChoice.forEach( style => {
    if (style.checked) {
      localStorage.setItem('style choice', style.value )
      console.log('your coffee style is ' + style.value);
    }
  });
  toolChoice.forEach( tool => {
    if (tool.checked) {
      localStorage.setItem('tool choice', tool.value )
      console.log('the tool you selected for your coffee is ' + tool.value);
    }
  });
  flavorChoice.forEach( flavor => {
    if (flavor.checked) {
      localStorage.setItem('flavor choice', flavor.value )
      console.log('the flavor you want to add is ' + flavor.value);
    }
  });
}

function printOrder(ord){
  result.textContent = `Thank you for your order of ${ord.bean} for bean, ${ord.style} for style, ${ord.tool} for tool, and ${ord.flavor} for flavor.`;
}

  