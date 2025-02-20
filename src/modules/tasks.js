import { loadUI } from "./loadUI";
import Task from './Task';


let tasks = [
	{
		title: 'Clean a house',
		dueDate: 'not set',
		priority: 'normal',
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

	if (tasks.length > 0) {
		tasks.map((task) => {
			const taskCard = document.createElement('div');
			const taskDone = document.createElement('input');
			taskDone.type = 'checkbox';

			
			taskDone.addEventListener('click', () => {
				removeTask(task.title);
			})
			
			
			const taskTitle = document.createElement('h3');
			
			taskTitle.textContent = task.title;
			
			allTasksContainer.appendChild(taskCard);
			taskCard.appendChild(taskDone);
			taskCard.appendChild(taskTitle);
			
			if (task.dueDate === 'not set') {
				const taskDate = document.createElement('input');
				taskDate.type = 'date';

				taskDate.addEventListener('change', () => {
					let input = taskDate.value;
					let dateEntered = new Date(input);
					task.dueDate = parseDate(dateEntered);
					loadTasks();
				})

				taskCard.appendChild(taskDate);
			} else {
				const taskDate = document.createElement('p');
				taskDate.textContent = task.dueDate;
				taskCard.appendChild(taskDate);
			}
		});
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
	const newTask = new Task(title, 'not set', 'normal');
	tasks.push(newTask);
	console.log(tasks);
}

function removeTask(taskTitle) {
	tasks = tasks.filter(task => task.title !== taskTitle);
	loadTasks();
}

function parseDate(dateToParse) {
	const date = dateToParse.toString();
	const dateValuesArray = date.split(' ');
	const dayNumber = dateValuesArray[2];
	const month = dateValuesArray[1];
	const year = dateValuesArray[3];

	return `${dayNumber}/${month}/${year}`;
}

function loadTasks() {
	const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateTasks());
}

export default loadTasks;