import { loadUI } from "./loadUI";
import { tasks } from "../index";

const dateToday = parseDate(Date());

function generateToday() {
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

function parseDate(dateToParse) {
	const date = dateToParse.toString();
	const dateValuesArray = date.split(' ');
	const dayNumber = dateValuesArray[2];
	const month = dateValuesArray[1];
	const year = dateValuesArray[3];

	return `${dayNumber}/${month}/${year}`;
}

function loadToday() {
  const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateToday());
}

export default loadToday;