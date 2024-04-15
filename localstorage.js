var maSection = document.getElementById('maSection');
var numberElement = document.getElementById('number');

var clickCount = localStorage.getItem('clickCount') || 0;

numberElement.textContent = clickCount;

maSection.addEventListener('click', function() {

    numberElement.textContent = ++clickCount;

    localStorage.setItem('clickCount', clickCount);
});



