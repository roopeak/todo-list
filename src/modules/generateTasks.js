import Task from './Task';
import loadTasks from './allTasks';

let tasks = [
	{
		title: 'Clean a house',
		dueDate: 'not set',
		priority: 'normal',
	},
	{
		title: 'Take out trash',
		dueDate: '1/Mar/2025',
		priority: 'low',
	},
	{
		title: 'Study for an exam',
		dueDate: '5/Mar/2025',
		priority: 'high',
	},
	{
		title: 'Pay invoices',
		dueDate: '26/Feb/2025',
		priority: 'high',
	},
	{
		title: 'Buy groceries',
		dueDate: '26/Feb/2025',
		priority: 'low',
	}	
];

// Helper function to create an element with class and content
function createElement(type, className = '', textContent = '') {
	const element = document.createElement(type);
	if (className) element.classList.add(className);
	if (textContent) element.textContent = textContent;
	return element;
}

// Create task card with its content
function createTaskCard(task) {
	const taskCard = createElement('div', 'task-card');
	const taskDone = document.createElement('input');
	taskDone.type = 'checkbox';
	taskDone.addEventListener('click', () => removeTask(task.title));

	const taskTitle = createElement('h3', '', task.title);
	const changePriorityButton = createElement('button', '', 'Normal');
	const taskDate = task.dueDate === 'not set' ? createDateInput(task) : createDateDisplay(task);

	taskCard.append(taskDone, taskTitle, taskDate, changePriorityButton);

	// Handle priority button click event
	changePriorityButton.addEventListener('click', () => {
		changePriorityButton.textContent = changePriorityButton.textContent === 'Low'
			? 'Normal' : changePriorityButton.textContent === 'Normal'
			? 'High' : 'Low';
		task.priority = changePriorityButton.textContent.toLowerCase();
	});

	return taskCard;
}

// Create input field for date
function createDateInput(task) {
	const taskDate = document.createElement('input');
	taskDate.type = 'date';

	taskDate.addEventListener('change', () => {
		let input = taskDate.value;
		let dateEntered = new Date(input);
		task.dueDate = parseDate(dateEntered);
		loadTasks();
	});

	return taskDate;
}

// Create a display paragraph for the date
function createDateDisplay(task) {
	const taskDate = createElement('p', '', task.dueDate);

	taskDate.addEventListener('mouseover', () => {
		taskDate.style.cursor = 'pointer';
	});

	taskDate.addEventListener('click', () => {
		const dateInput = document.createElement('input');
		dateInput.type = 'date';
		dateInput.valueAsDate = new Date(task.dueDate);

		dateInput.addEventListener('change', () => {
			let input = dateInput.value;
			let dateEntered = new Date(input);
			task.dueDate = parseDate(dateEntered);
			loadTasks();
		});

		taskDate.replaceWith(dateInput);
		dateInput.focus();
	});

	return taskDate;
}

// Create and display the "All tasks" container
export function generateAllTasks() {
	const allTasksContainer = createElement('div', 'tasks-container');
	const tasksHeader = createElement('h1', '', 'All tasks');
	const newTask = createElement('div', '', 'New task');

	allTasksContainer.append(tasksHeader, newTask);

	if (tasks.length > 0) {
		tasks.forEach(task => {
			const taskCard = createTaskCard(task);
			allTasksContainer.appendChild(taskCard);
		});
	}

	// Event listeners for new task functionality
	addNewTaskListeners(newTask, allTasksContainer);

	return allTasksContainer;
}

// Add listeners to handle the creation of a new task
function addNewTaskListeners(newTask, allTasksContainer) {
	newTask.addEventListener('mouseover', () => {
		newTask.style.backgroundColor = 'black';
		newTask.style.color = 'white';
		newTask.style.cursor = 'pointer';
	});

	newTask.addEventListener('mouseout', () => {
		newTask.style.backgroundColor = 'white';
		newTask.style.color = 'black';
	});

	newTask.addEventListener('click', () => {
		newTask.textContent = '';
		const newTaskInputContainer = createNewTaskInputForm(allTasksContainer);
		allTasksContainer.appendChild(newTaskInputContainer);
	});
}

// Create form elements for adding a new task
function createNewTaskInputForm(allTasksContainer) {
	const newTaskInputContainer = createElement('div');
	newTaskInputContainer.innerHTML = `
		<form>
			<input type='text' id='task-input' placeholder='Enter a task' required>
			<input type='submit' id='task-submit' value='Add'>
		</form>
		<button id='cancel-task-add'>Cancel</button>
	`;
	allTasksContainer.appendChild(newTaskInputContainer);

	const taskSubmit = document.getElementById('task-submit');
	const taskCancel = document.getElementById('cancel-task-add');
	console.log(taskSubmit)
	taskSubmit.addEventListener('click', () => {
		const taskTitle = document.getElementById('task-input').value;
		if (taskTitle != '') {
			addTask(taskTitle);
			loadTasks();
		}
	});

	taskCancel.addEventListener('click', () => {
		loadTasks();
	});

	return newTaskInputContainer;
}

// Generate Today Tasks Container
export function generateTodayTasks() {
	const todayTasksContainer = createElement('div', 'tasks-container');
	const todayHeader = createElement('h1', '', 'Today tasks');
	const newTask = createElement('div', '', 'New task');

	todayTasksContainer.append(todayHeader, newTask);

	if (tasks.length > 0) {
		tasks.forEach(task => {
			if (task.dueDate === parseDate(Date())) {
				const taskCard = createTaskCard(task);
				todayTasksContainer.appendChild(taskCard);
			}
		});
	}

	// Event listeners for new task functionality
	addNewTaskListeners(newTask, todayTasksContainer);

	return todayTasksContainer;
}

// Generate This Week Tasks Container
export function generateWeekTasks() {
	const weekContainer = createElement('div', 'week-container');
	const weekHeader = createElement('h1', '', 'This week');
	const newTask = createElement('div', '', 'New task');

	weekContainer.appendChild(weekHeader, newTask);

	for (let i = 0; i < 7; i++) {
		let date = new Date();
		date.setDate(date.getDate() + i);
		if (tasks.length > 0) {
			tasks.forEach(task => {
				if (task.dueDate === parseDate(date)) {
					const taskCard = createTaskCard(task);
					weekContainer.appendChild(taskCard);
				}
			})
		}
		console.log(parseDate(date));
	}
	addNewTaskListeners(newTask, weekContainer);

	return weekContainer;
}

function addTask(title) {
	const newTask = new Task(title, 'not set', 'normal');
	tasks.push(newTask);
}

function removeTask(taskTitle) {
	tasks = tasks.filter(task => task.title !== taskTitle);
	loadTasks();
}

// Parse date to 01/Jan/2025 format
function parseDate(dateToParse) {
	const date = dateToParse.toString();
	const dateValuesArray = date.split(' ');
	const dayNumber = dateValuesArray[2];
	const month = dateValuesArray[1];
	const year = dateValuesArray[3];

	return `${dayNumber}/${month}/${year}`;
}
