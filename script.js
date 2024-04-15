let button = document.getElementById("btn");
let buttonAutoClick = document.getElementById("auto");
let buttonX2 = document.getElementById("btnX2");

let interval = 1000;
let intervalID;

button.addEventListener('click', function () {
    numberOfClick++;
    console.log(numberOfClick);
});

buttonX2.addEventListener('click', function () {
    interval = 500;
    console.log(interval);
    updateInterval();
});

let numberOfClick = 0;

function autoClicker() {
    numberOfClick++;
    updateInterval();
    console.log('autoclicker')
}

// Créer une fonction pour actualiser l'intervalle
function updateInterval() {
    clearInterval(intervalID); // Efface l'ancien intervalle
    intervalID = setInterval(autoClicker, interval); // Définit le nouvel intervalle
}




