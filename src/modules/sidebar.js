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

	return sidebar;
}

function loadSidebar() {
	const content = document.querySelector('.content');
	content.appendChild(generateSidebar());
}

export default loadSidebar;