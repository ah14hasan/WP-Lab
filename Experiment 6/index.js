document.getElementById('addElement').addEventListener('click', function () {
    const newElement = document.createElement('p');
    newElement.textContent = 'New Element Added!';
    newElement.className = 'text-lg';
    document.getElementById('container').appendChild(newElement);
});

document.getElementById('removeElement').addEventListener('click', function () {
    const container = document.getElementById('container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});

document.getElementById('moveElement').addEventListener('click', function () {
    const container = document.getElementById('container');
    if (container.firstChild) {
        container.appendChild(container.firstChild);
    }
});

document.getElementById('changeStyle').addEventListener('click', function () {
    const element = document.getElementById('element1');
    element.style.color = element.style.color === 'red' ? 'black' : 'red';
    element.style.fontFamily = element.style.fontFamily === 'Arial' ? 'Times New Roman' : 'Arial';
});
