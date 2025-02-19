import { loadUI } from "./loadUI";
import { Task } from "./Task";


let tasks = [
	{
		name: 'Clean a house'
	}
];

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
					<form>
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
					<button id='cancel-task-add'>Cancel</button>
				`;
			tasksContainer.appendChild(newTaskInputContainer);

			const taskSubmit = document.getElementById('task-submit');
			const taskCancel = document.getElementById('cancel-task-add');

			taskSubmit.addEventListener('click', () => {
				const taskName = document.getElementById('task-input').value;
				
				if (taskName != '') {
					addTask(document.getElementById('task-input').value)
					loadTasks();
				}
			});

			taskCancel.addEventListener('click', () => {
				loadTasks();
			})
		});
	});
	
	return tasksContainer;
}

function addTask(name) {
	const newTask = new Task(name);
	tasks.push(newTask);
	console.log(tasks);
}

function loadTasks() {
	const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateTasks());
}

export default loadTasks;