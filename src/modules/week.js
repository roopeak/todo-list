import { loadUI } from "./loadUI";

function generateWeek() {
	const weekContainer = document.createElement('div');
	weekContainer.classList.add('week-container');

	const weekHeader = document.createElement('h1');
	weekHeader.textContent = 'This week';
	weekContainer.appendChild(weekHeader);

	const tasksContainer = document.createElement('div');

	return weekContainer;
}

function loadWeek() {
  const content = document.querySelector('.content');
  loadUI();
  content.appendChild(generateWeek());
}

export default loadWeek;