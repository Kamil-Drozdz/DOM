// node,element - węzeł, tekst elementu
const addElement = (e, node = 'div', txt = 'txt', attr = '', value = '') => {
	e.preventDefault();
	const element = document.createElement(node);

	if (txt) {
		const text = document.createTextNode(txt);
		element.appendChild(text);
	}
	if (attr) {
		element.setAttribute(attr, value);
	}
	document.querySelector('.content').appendChild(element);
};

const searchElements = (e, nameElement) => {
	e.preventDefault();

	const infoElement = document.querySelector('.result');
	infoElement.textContent = '';
	const elements = document.querySelectorAll(nameElement);
	if (elements.length <= 0) {
		infoElement.innerHTML = `<p class="result__info"> W tym dokumencie nie znalazłem  elementów ${nameElement}</p>`;
	} else if (elements.length <= 1) {
		infoElement.innerHTML = `<p class="result__info"> W tym dokumencie znalazłem ${elements.length} element ${nameElement}</p>`;
		showInfo(elements, infoElement);
	} else {
		infoElement.innerHTML = `<p class="result__info"> W tym dokumencie znalazłem ${elements.length} elementów ${nameElement}</p>`;
		showInfo(elements, infoElement);
		return;
	}
};

const showInfo = (elements, infoElement) => {
	console.log(elements);
	elements.forEach(element => {
		const item = document.createElement('div');
		item.className = 'result__info-description';
		item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasa/klasy : ${element.className}</div>
        <div>Wysokość elementu (offsetHeight) : ${element.offsetHeight}</div>
        <div>Szerokość elementu (offsetWidth) : ${element.offsetWidth}</div>
        <div>Odległość od lewej krawędzi (offsetLeft) : ${element.offsetLeft}</div>
        <div>Odległość od górnej krawędzi (offsetTop) : ${element.offsetTop}</div>
        <div>liczba elementów dzieci(childElementCount) : ${element.childElementCount}</div>
        `;
		infoElement.appendChild(item);
	});
};

//listenery
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', e =>
	addElement(
		e,
		addForm.elements.node.value,
		addForm.elements.text.value,
		addForm.elements.attr.value,
		addForm.elements.value.value
	)
);

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', e => searchElements(e, searchForm.elements['searching-element'].value));

showInfo();
