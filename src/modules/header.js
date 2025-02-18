function generateHeader() {
	const header = document.createElement('header');

	const headerText = document.createElement('h1');
	headerText.textContent = 'Todo App';
	header.appendChild(headerText);

	return header;
}

function loadHeader() {
  const content = document.querySelector('.content');
	content.appendChild(generateHeader());
}

export default loadHeader;