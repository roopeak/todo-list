function generateAllTasks() {
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
				});
			
				taskCard.appendChild(taskDate);
			} else {
				const taskDate = document.createElement('p');
				taskDate.textContent = task.dueDate;
				taskCard.appendChild(taskDate);
		
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
			}

			const changePriorityButton = document.createElement('button');
			changePriorityButton.textContent = 'Normal';
			taskCard.appendChild(changePriorityButton);

			changePriorityButton.addEventListener('click', () => {
				if (changePriorityButton.textContent === 'Low') {
					changePriorityButton.textContent = 'Normal';
				} else if (changePriorityButton.textContent === 'Normal') {
					changePriorityButton.textContent = 'High';
				} else {
					changePriorityButton.textContent = 'Low';
				}

				task.priority = changePriorityButton.textContent.toLowerCase();
			})

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

function generateTodayTasks() {
	const todayContainer = document.createElement('div');
	todayContainer.classList.add('today-container');

	const todayHeader = document.createElement('h1');
	todayHeader.textContent = 'Today';
	todayContainer.appendChild(todayHeader);

	const tasksContainer = document.createElement('div');
	todayContainer.appendChild(tasksContainer);

	// tasks.map((task) => task.dueDate ===)

	return todayContainer;
}

function generateWeekTasks() {
	const weekContainer = document.createElement('div');
	weekContainer.classList.add('week-container');

	const weekHeader = document.createElement('h1');
	weekHeader.textContent = 'This week';
	weekContainer.appendChild(weekHeader);

	const tasksContainer = document.createElement('div');

	return weekContainer;
}