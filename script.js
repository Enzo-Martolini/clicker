let button = document.getElementById("sectionClicker");
let button50 = document.getElementById("bonus50");
let button125 = document.getElementById("bonus125");
let button500 = document.getElementById("bonus500");
let button1000 = document.getElementById("bonus1000");

let div1 = document.getElementById("1")
let div2 = document.getElementById("2")
let div3 = document.getElementById("3")
let div4 = document.getElementById("4")
let div5 = document.getElementById("5")
let div6 = document.getElementById("6")
let div7 = document.getElementById("7")
let div8 = document.getElementById("8")
let div9 = document.getElementById("9")
let div10 = document.getElementById("10")


let numberOfClick = 0;

if (localStorage.getItem("nombreDeClick")){
    numberOfClick = localStorage.getItem("nombreDeClick");
}

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
    updateCompteur();

    localStorage.setItem('nombreDeClick', numberOfClick);
});

function startAutoClicker () {
    if (numberOfClick >= 50 && bonus50 !=true) {
        interval=1000;
        autoClicker();
        startInterval();
        bonus50=true;
        localStorage.setItem('bonus50', bonus50);
        button50.classList.add("true")
    }
}


function autoClicker() {
        numberOfClick++;

        localStorage.setItem('nombreDeClick', numberOfClick);

        console.log(numberOfClick)
        updateCompteur();

        if (numberOfClick >= 100) {
            div1.classList.remove("false");
        }
        
        if (numberOfClick >= 200) {
            div2.classList.remove("false");
        }
        
        if (numberOfClick >= 300) {
            div3.classList.remove("false");
        }
        
        if (numberOfClick >= 400) {
            div4.classList.remove("false");
            changerImage();
        }

        if (numberOfClick >= 500) {
            div5.classList.remove("false");
        }

        if (numberOfClick >= 600) {
            div6.classList.remove("false");
            changerImage();
        }

        if (numberOfClick >= 700) {
            div7.classList.remove("false");
        }

        if (numberOfClick >= 800) {
            div8.classList.remove("false");
        }

        if (numberOfClick >= 900) {
            div9.classList.remove("false");
        }
        
        if (numberOfClick >= 1000) {
            div10.classList.remove("false");
            changerImage();
        }
        
    }

function startInterval () {
    intervalID = setInterval(autoClicker, interval);
}


button125.addEventListener('click', function () {
    if (numberOfClick >= 125 && bonus125 !=true) {
    bonus125 = true;
    localStorage.setItem('bonus125', bonus125);
    interval = 500;
    updateInterval();
    console.log(interval)
    console.log(bonus125)
    button125.classList.add("true")

    }
});

button500.addEventListener('click', function () {
    if (numberOfClick >= 500 && bonus500 !=true) {
    bonus500 = true;
    localStorage.setItem('bonus500', bonus500);
    interval = 250;
    updateInterval();
    console.log(bonus500)
    button500.classList.add("true")

    }
});

button1000.addEventListener('click', function () {
    if (numberOfClick >= 1000 && bonus1000 !=true) {
    bonus1000 = true;
    localStorage.setItem('bonus1000', bonus1000);
    interval = 125;
    updateInterval();
    console.log(bonus1000)
    button1000.classList.add("true")

    }
});

if (bonus50 == "true") {
    autoClicker();
    startInterval();
    console.log("50")
    button50.classList.add("true")

}

if (bonus125 == "true") {
    interval = 500;
    updateInterval();
    button125.classList.add("true")

}

if (bonus500 == "true") {
    interval = 125;
    updateInterval();
    button500.classList.add("true")

}


function updateInterval() {
    clearInterval(intervalID); // Efface l'ancien intervalle
    intervalID = setInterval(autoClicker, interval); // Définit le nouvel intervalle
}

function updateCompteur () {
   let compteur = document.getElementById("compteur");
   compteur.textContent = numberOfClick;
}

    function changerImage() {

        let image = document.querySelector(".gekko img");
    
        if (numberOfClick > 400) 
        {
            image.setAttribute("src", "/images/Verti.png");
        };

        if (numberOfClick > 600)
        {
            image.setAttribute("src", "/images/Altego.png");
        };

        if (numberOfClick > 1000)
        {
            image.setAttribute("src", "/images/Mordicus.png");
        };
    }


