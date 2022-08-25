document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createToDo(e.target.new-task-description.value);
   
  });

});

function createToDo(e) {
  let li = document.createElement("li");
  li.innerText = e;
  document.getElementById("tasks").appendChild(li);
  let btn = document.createElement("button");
  btn.innerText = "X";

  li.appendChild(btn);
}
function removeTask(element) {
  element.addEventListener('click', () => element.
  parentNode.remove()
  )
}