import { loadUI } from "./loadUI";

function generateToday() {
	const todayContainer = document.createElement('div');
	todayContainer.classList.add('today-container');

	const todayHeader = document.createElement('h1');
	todayHeader.textContent = 'Today';
	todayContainer.appendChild(todayHeader);

	const tasksContainer = document.createElement('div');
	todayContainer.appendChild(tasksContainer);

	return todayContainer;
}

function loadToday() {
  const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateToday());
}

export default loadToday;