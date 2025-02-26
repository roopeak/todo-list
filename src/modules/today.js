import { loadUI } from "./loadUI";
import { generateTodayTasks } from "./generateTasks";

function loadToday() {
  const content = document.querySelector('.content');
	loadUI();
	content.appendChild(generateTodayTasks());
}

export default loadToday;