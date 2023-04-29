const stepArr = Array.from(document.querySelectorAll(".step"));
const styleChoice = Array.from(document.getElementsByName("style-type"));

styleChoice.forEach((choice) => {
  choice.addEventListener("change", getStyleInfo);
});

function getStyleInfo() {
  styleChoice.forEach((style) => {
    if (style.checked) {
      localStorage.setItem("styleChoice", style.value);
      console.log(`Coffee style selected: ${style.value}`);
    }
  });
}

// const saveBtn = document.getElementById('save-choices');
// saveBtn.addEventListener('click', getStyleInfo );
