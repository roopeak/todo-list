import loadTasks from "./allTasks";
import loadToday from "./today";
import loadWeek from "./week";

let projects = [
	{
		name: 'An example project',
		tasks: [
			{
				name: 'An example task name',
				dueDate: '01/04/2025',
				priority: 'normal'
			},
		]
	},
	{
		name: 'Another example project',
		tasks: [
			{
				name: 'An example task name',
				dueDate: '10/03/2025',
				priority: 'high',
			},
			{
				name: 'Another example task name',
				dueDate: '15/03/2025',
				priority: 'low'
			}
		]
	}
];

function generateSidebar() {
	const sidebar = document.createElement('aside');
	const sidebarLinks = document.createElement('nav');
	sidebar.appendChild(sidebarLinks);

	const tasks = document.createElement('p');
	tasks.textContent = 'All tasks';

	const todayTasks = document.createElement('p');
	todayTasks.textContent = 'Today';

	const weekTasks = document.createElement('p');
	weekTasks.textContent = 'This week';

	sidebarLinks.appendChild(tasks);
	sidebarLinks.appendChild(todayTasks);
	sidebarLinks.appendChild(weekTasks);

	const projects = document.createElement('nav');
	sidebar.appendChild(projects);

	const projectsHeader = document.createElement('h2');
	projectsHeader.textContent = 'Projects';
	projects.appendChild(projectsHeader);

	const addProject = document.createElement('p');
	addProject.textContent = 'Create a project';
	projects.appendChild(addProject);

	// Event listeners to all tasks
	tasks.addEventListener('mouseover', () => {
		tasks.style.backgroundColor = 'white';
		tasks.style.cursor = 'pointer';
	
		tasks.addEventListener('mouseout', () => {
			tasks.style.backgroundColor = 'bisque';
		})
	})

	tasks.addEventListener('click', () => {
		console.log('load all tasks');
		loadTasks();
	})

  // Event listeners to today
	todayTasks.addEventListener('mouseover', () => {
		todayTasks.style.backgroundColor = 'white';
		todayTasks.style.cursor = 'pointer';

		todayTasks.addEventListener('mouseout', () => {
			todayTasks.style.backgroundColor = 'bisque';
		});
	});

	todayTasks.addEventListener('click', () => {
		console.log("load today's tasks");
		loadToday();
	});

	// Event listeners to this week
	weekTasks.addEventListener('mouseover', () => {
		weekTasks.style.backgroundColor = 'white';
		weekTasks.style.cursor = 'pointer';

		weekTasks.addEventListener('mouseout', () => {
			weekTasks.style.backgroundColor = 'bisque';
		});
	});

	weekTasks.addEventListener('click', () => {
		console.log("load week's tasks");
		loadWeek();
	});

	// Event listeners to create a project
	addProject.addEventListener('mouseover', () => {
		addProject.style.backgroundColor = 'white';
		addProject.style.cursor = 'pointer';

		addProject.addEventListener('mouseout', () => {
			addProject.style.backgroundColor = 'bisque';
		});
	});

	addProject.addEventListener('click', () => {
		console.log("load create a project");
		const createProjectContainer = document.createElement('div');
		createProjectContainer.classList.add('create-project-container');

		createProjectContainer.innerHTML = 
			`
				<input 
					type='text'
					id='project-name'
					placeholder='Enter project name'
					required>
				<button class='create-project-button'>
					Create
				</button>
				<button class='cancel-project-button'>
					Cancel
				</button>
			`;
		sidebar.appendChild(createProjectContainer);

		const createButton = document.querySelector('.create-project-button');
		createButton.addEventListener('click', () => addProjectToSidebar('hello'))
	});

	return sidebar;
}

function addProjectToSidebar(name) {
	console.log(name)
}

function loadSidebar() {
	const content = document.querySelector('.content');
	content.appendChild(generateSidebar());
}

export default loadSidebar;