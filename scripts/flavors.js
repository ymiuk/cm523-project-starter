const stepArr = Array.from(document.querySelectorAll(".step"));
const flavorChoice = Array.from(document.getElementsByName("flavor-type"));

flavorChoice.forEach((choice) => {
  choice.addEventListener("change", getFlavorInfo);
});

function getFlavorInfo() {
  flavorChoice.forEach((flavor) => {
    if (flavor.checked) {
      localStorage.setItem("flavorChoice", flavor.value);
      console.log(`Flavor selected: ${flavor.value}`);
    }
  });
}

// const saveBtn = document.getElementById('save-choices');
// saveBtn.addEventListener('click', getFlavorInfo );
