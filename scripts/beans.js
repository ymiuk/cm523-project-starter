const stepArr = Array.from(document.querySelectorAll(".step"));
const beanChoice = Array.from(document.getElementsByName("bean-type"));
const roastChoice = Array.from(document.getElementsByName("roast-type"));

beanChoice.forEach((choice) => {
  choice.addEventListener("change", getBeanInfo);
});

roastChoice.forEach((choice) => {
  choice.addEventListener("change", getRoastInfo);
});

function getBeanInfo() {
  beanChoice.forEach((bean) => {
    if (bean.checked) {
      localStorage.setItem("beanChoice", bean.value);
      console.log(`Bean selected: ${bean.value}`);
    }
  });
}

function getRoastInfo() {
  roastChoice.forEach((roast) => {
    if (roast.checked) {
      localStorage.setItem("roastChoice", roast.value);
      console.log("Roast selected: " + roast.value);
    }
  });
}

// const saveBtn = document.getElementById("save-choices");
// saveBtn.addEventListener("click", getBeanInfo);
// saveBtn.addEventListener("click", getRoastInfo);

