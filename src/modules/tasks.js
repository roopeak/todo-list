import { loadUI } from "./loadUI";

function generateTasks() {
	const tasksContainer = document.createElement('div');
	tasksContainer.classList.add('tasks-container');
	
	const tasksHeader = document.createElement('h1');
	tasksHeader.textContent = 'All tasks';
	tasksContainer.appendChild(tasksHeader);

	const newTask = document.createElement('div');
	newTask.textContent = 'New task';
	tasksContainer.appendChild(newTask);

	// Event listeners to new task
	newTask.addEventListener('mouseover', () => {
		newTask.style.backgroundColor = 'black';
		newTask.style.color = 'white';
		newTask.style.cursor = 'pointer';

		newTask.addEventListener('mouseout', () => {
			newTask.style.backgroundColor = 'white';
			newTask.style.color = 'black';
		});

		newTask.addEventListener('click', () => {
			newTask.textContent = '';
			const newTaskInputContainer = document.createElement('div');
			newTaskInputContainer.innerHTML = 
				`
					<form submit=addTask()>
						<input
							type='text'
							id='task-input'
							placeholder='Enter a task'
							required>
						<input
							type='submit'
							id='task-submit'
							value='Add'>
					</form>
				`;
			tasksContainer.appendChild(newTaskInputContainer);

			const taskSubmit = document.getElementById('task-submit');

			taskSubmit.addEventListener('click', () => {
				newTaskInputContainer.innerHTML = '';
				loadTasks();
			});
		});
	});
	


	return tasksContainer;
}

function loadTasks() {
	const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateTasks());
}

export default loadTasks;