const stepArr = Array.from(document.querySelectorAll(".step"));
const toolChoice = Array.from(document.getElementsByName("tool-type"));

toolChoice.forEach((choice) => {
  choice.addEventListener("change", getToolInfo);
});

function getToolInfo() {
  toolChoice.forEach((tool) => {
    if (tool.checked) {
      localStorage.setItem("toolChoice", tool.value);
      console.log(`Tool selected: ${tool.value}`);
    }
  });
}

const saveBtn = document.getElementById("save-choices");
saveBtn.addEventListener("click", getToolInfo);
