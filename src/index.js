document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit" ,function(e){
   e.preventDefault()
  console.log(createToDo(e.target.new_task.value));
  form.reset()
   
  });
  function createToDo(todo) {
    let li = document.createElement("li")
    li.textContent = '${todo}';
  }
  
});

