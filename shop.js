var newDiv = document.createElement('div');
newDiv.textContent = 'alooooooooooooooooooooooooooo';
newDiv.setAttribute('class', 'new-element');
document.body.appendChild(newDiv);

var elementToRemove = document.getElementById('div');
elementToRemove.remove();
