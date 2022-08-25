
document.addEventListener("DOMContentLoaded", () => {
	createTodo()
});
let  createTodo= () => {
	let tasks = document.getElementById('tasks');
	let form = document.getElementById('create-task-form');
	form.onsubmit = (e) => {e.preventDefault();
		let newTask = document.getElementById('new-task-description').value;
		let li= document.createElement('li');
		li.appendChild(document.createTextNode(newTask));
		tasks.appendChild(li);
		form.reset()
	}}
  
  


