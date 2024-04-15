let button = document.getElementById("click");
let button50 = document.getElementById("bonus50");
let button125 = document.getElementById("bonus125");
let button500 = document.getElementById("bonus500");
let button1000 = document.getElementById("bonus1000");

let numberOfClick = 45;

let interval = 1000;
let intervalID;


bonus50 = false;
bonus125 = false;
bonus500 = false;
bonus1000 = false;

if (localStorage.getItem("bonus50")) {
    bonus50 = localStorage.getItem("bonus50");
};

if (localStorage.getItem("bonus125")) {
    bonus125 = localStorage.getItem("bonus125");
};

if (localStorage.getItem("bonus500")) {
    bonus500= localStorage.getItem("bonus500");
};

if (localStorage.getItem("bonus1000")) {
    bonus500= localStorage.getItem("bonus1000");
};

console.log(bonus50);
console.log(bonus125);
console.log(bonus500);
console.log(bonus1000);



button50.addEventListener('click', startAutoClicker);

button.addEventListener('click', function () {
    numberOfClick++;
    console.log(numberOfClick)
    localStorage.setItem('nombreDeClick', numberOfClick);
});

function startAutoClicker () {
    if (numberOfClick >= 50 || bonus50 ==true) {
        autoClicker();
        startInterval();
        bonus50=true;
        localStorage.setItem('bonus50', bonus50);
    }
}


function autoClicker() {
        numberOfClick++;

        localStorage.setItem('nombreDeClick', numberOfClick);

        console.log(numberOfClick)
    }

function startInterval () {
    intervalID = setInterval(autoClicker, interval);
}


button125.addEventListener('click', function () {
    if (numberOfClick >= 100 || bonus125 ==true) {
    bonus125 = true;
    localStorage.setItem('bonus125', bonus125);
    interval = 500;
    updateInterval();
    console.log(bonus125)
    }
});

button500.addEventListener('click', function () {
    if (numberOfClick >= 500 || bonus500 ==true) {
    bonus500 = true;
    localStorage.setItem('bonus500', bonus500);
    interval = 250;
    updateInterval();
    console.log(bonus500)
    }
});

button1000.addEventListener('click', function () {
    if (numberOfClick >= 1000 || bonus1000 ==true) {
    bonus1000 = true;
    localStorage.setItem('bonus1000', bonus1000);
    interval = 125;
    updateInterval();
    console.log(bonus1000)
    }
});


function updateInterval() {
    clearInterval(intervalID); // Efface l'ancien intervalle
    intervalID = setInterval(autoClicker, interval); // Définit le nouvel intervalle
}





