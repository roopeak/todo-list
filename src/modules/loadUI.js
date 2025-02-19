import loadHeader from './header';
import loadSidebar from './sidebar';

const content = document.querySelector('.content');

export function loadUI() {
	content.textContent = '';
	loadHeader();
	loadSidebar();
};