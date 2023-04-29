const btnArr = Array.from(document.querySelectorAll(".item"));

// set up result page 
function setupOrder() {
  var beanChoice = document.getElementById("beanChoice");
  beanChoice.innerText = `Beans: ${localStorage.getItem("beanChoice")}`;
  var roastChoice = document.getElementById("roastChoice");
  roastChoice.innerText = `Roast: ${localStorage.getItem("roastChoice")}`;
  var styleChoice = document.getElementById("styleChoice");
  styleChoice.innerText = `Style: ${localStorage.getItem("styleChoice")}`;
  var toolChoice = document.getElementById("toolChoice");
  toolChoice.innerText = `Tool: ${localStorage.getItem("toolChoice")}`;
  var flavorChoice = document.getElementById("flavorChoice");
  flavorChoice.innerText = `Flavor: ${localStorage.getItem("flavorChoice")}`;
}
setupOrder();

document.querySelectorAll("#dropDownMenu li").forEach((li, i) => {
  setTimeout(() => {
    li.classList.add("show");
  }, 700 * i);
});
