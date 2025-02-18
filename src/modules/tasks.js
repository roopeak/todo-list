function generateTasks() {
	const tasksContainer = document.createElement('div');
	tasksContainer.classList.add('tasks-container');
	
	const tasksHeader = document.createElement('h1');
	tasksHeader.textContent = 'All tasks';
	tasksContainer.appendChild(tasksHeader);

	const newTask = document.createElement('p');
	newTask.textContent = 'New task';
	tasksContainer.appendChild(newTask);

	return tasksContainer;
}

function loadTasks() {
	const content = document.querySelector('.content');
	content.appendChild(generateTasks());
}

export default loadTasks;