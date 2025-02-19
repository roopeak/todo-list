import { loadUI } from "./loadUI";
import { Task } from "./Task";


let tasks = [
	{
		name: 'Clean a house'
	}
];

function generateTasks() {
	const allTasksContainer = document.createElement('div');
	allTasksContainer.classList.add('tasks-container');
	
	const tasksHeader = document.createElement('h1');
	tasksHeader.textContent = 'All tasks';
	allTasksContainer.appendChild(tasksHeader);

	const newTask = document.createElement('div');
	newTask.textContent = 'New task';
	allTasksContainer.appendChild(newTask);

	if (tasks.length != 0) {
		for (let i = 0; i < tasks.length; i++) {
			const taskCard = document.createElement('div');
			const taskTitle = document.createElement('h3');

			taskTitle.textContent = tasks[i].title;

			allTasksContainer.appendChild(taskCard);
			taskCard.appendChild(taskTitle);
		}
	}

	// Event listeners to new task
	newTask.addEventListener('mouseover', () => {
		newTask.style.backgroundColor = 'black';
		newTask.style.color = 'white';
		newTask.style.cursor = 'pointer';

		newTask.addEventListener('mouseout', () => {
			newTask.style.backgroundColor = 'white';
			newTask.style.color = 'black';
		});
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
		allTasksContainer.appendChild(newTaskInputContainer);

		const taskSubmit = document.getElementById('task-submit');
		const taskCancel = document.getElementById('cancel-task-add');

		taskSubmit.addEventListener('click', () => {
			const taskTitle = document.getElementById('task-input').value;
			
			if (taskTitle != '') {
				addTask(document.getElementById('task-input').value)
				loadTasks();
			}
		});

		taskCancel.addEventListener('click', () => {
			loadTasks();
		})
	});
	
	return allTasksContainer;
}

function addTask(title) {
	const newTask = new Task(title);
	tasks.push(newTask);
	console.log(tasks);
}

function loadTasks() {
	const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateTasks());
}

export default loadTasks;