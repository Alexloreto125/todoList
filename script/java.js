const InputType = document.getElementById("input-list");
const listOfThings = document.getElementById("listOfThings");
const addTask = () => {
  if (InputType.value === "") {
    alert("Input Vuoto");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputType.value;
    listOfThings.appendChild(li);
    let cancel = document.createElement("span");
    cancel.innerHTML = "\u00d7";
    li.appendChild(cancel);
    InputType.value = "";
  }

  listOfThings.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  });
};
