import { loadUI } from "./loadUI";
import { generateAllTasks } from "./generateTasks";

function loadTasks() {
	const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateAllTasks());
}

export default loadTasks;