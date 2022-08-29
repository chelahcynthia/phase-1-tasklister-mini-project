
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
		tasks.appendChild(li)
		if ( li.innerText === '') {
			li.remove()
		}
		let button = document.createElement('button')
		button.innerText = "x"
		li.appendChild(button)
		removeToDo(button)
		
		form.reset()
	}}
  
	function removeToDo(element) {
		element.addEventListener('click', () => {
element.parentNode.remove()
		})
	}



