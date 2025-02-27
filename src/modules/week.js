import { loadUI } from "./loadUI";
import { generateWeekTasks } from "./generateTasks";

function loadWeek() {
  const content = document.querySelector('.content');
  loadUI();
  content.appendChild(generateWeekTasks());
}

export default loadWeek;