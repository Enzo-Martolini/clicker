let button = document.getElementById("sectionClicker");
let button50 = document.getElementById("bonus50");
let button125 = document.getElementById("bonus125");
let button500 = document.getElementById("bonus500");
let button1000 = document.getElementById("bonus1000");
let sova = document.getElementById("sova");

let div1 = document.getElementById("1");
let div2 = document.getElementById("2");
let div3 = document.getElementById("3");
let div4 = document.getElementById("4");
let div5 = document.getElementById("5");
let div6 = document.getElementById("6");
let div7 = document.getElementById("7");
let div8 = document.getElementById("8");
let div9 = document.getElementById("9");
let div10 = document.getElementById("10");

let numberOfClick = 0;

// Déclaration des variables booléennes pour contrôler la lecture des sons
let ghostSoundPlayed = false;
let spectreSoundPlayed = false;
let vandalSoundPlayed = false;
let odinSoundPlayed = false;

let sonsArmes = new Audio();

if (bonus1000 == true) {
  sonsArmes.src = "sons/son odin.mp3";
} else if (bonus500 == true) {
  sonsArmes.src = "sons/son vandal.mp3";
} else if (bonus125 == true) {
  sonsArmes.src = "sons/son spectre.mp3";
} else if (bonus50 == true) {
  sonsArmes.src = "sons/son ghost.mp3";
}

// Ajoutez cette ligne pour jouer le son après avoir défini la source
sonsArmes.play();

button.addEventListener("click", function () {
  numberOfClick += Number(valeurClic);
  console.log(numberOfClick);
  updateCompteur();

  localStorage.setItem("nombreDeClick", numberOfClick);

  // Ajoutez cette condition pour vérifier si le bonus50 est activé
  if (bonus50) {
    // Jouer le son lorsque le bonus50 est activé
    sonsArmes.src = "sons/son ghost.mp3";
    sonsArmes.play();
  }
  if (bonus125) {
    // Jouer le son lorsque le bonus50 est activé
    sonsArmes.src = "sons/son spectre.mp3";
    sonsArmes.play();
  }
  if (bonus500) {
    // Jouer le son lorsque le bonus50 est activé
    sonsArmes.src = "sons/son vandal.mp3";
    sonsArmes.play();
  }
  if (bonus1000) {
    // Jouer le son lorsque le bonus50 est activé
    sonsArmes.src = "sons/son odin.mp3";
    sonsArmes.play();
  }
});

var audio = new Audio("sons/son accueil.mp3"); // initialisation de l'audio
audio.loop = true; // active la mise en boucle

// Définition d'une fonction pour gérer la mise en boucle
function loopAudio() {
  audio.currentTime = 0; // rembobiner la musique au début
  audio.play(); // relancer la lecture
}

// Ajout d'un écouteur d'événements pour détecter la fin de la musique
audio.addEventListener("ended", loopAudio);

// Lancement de la musique
audio.play();

if (localStorage.getItem("nombreDeClick")) {
  numberOfClick = Number(localStorage.getItem("nombreDeClick"));
}

let interval = 1000;
let intervalID;

let valeurClic = 1;

bonus50 = false;
bonus125 = false;
bonus500 = false;
bonus1000 = false;
bonusTemp = false;

if (localStorage.getItem("bonus50")) {
  bonus50 = localStorage.getItem("bonus50");
}

if (localStorage.getItem("bonus125")) {
  bonus125 = localStorage.getItem("bonus125");
}

if (localStorage.getItem("bonus500")) {
  bonus500 = localStorage.getItem("bonus500");
}

if (localStorage.getItem("bonus1000")) {
  bonus500 = localStorage.getItem("bonus1000");
}

console.log(bonus50);
console.log(bonus125);
console.log(bonus500);
console.log(bonus1000);

button50.addEventListener("click", startAutoClicker);

function startAutoClicker() {
  if (numberOfClick >= 50 && bonus50 != true) {
    numberOfClick -= 50; // Soustraire 50 du compteur de clics
    interval = 1000;
    autoClicker();
    startInterval();
    bonus50 = true;
    localStorage.setItem("bonus50", bonus50);
    button50.classList.add("true");
  }
}

function autoClicker() {
  console.log("valeurClic:", valeurClic);

  if (bonusTemp == true) {
    valeurClic = 10;
  } else if (bonus500 == true) {
    valeurClic = 2;
  } else if (bonus1000 == true) {
    valeurClic = 4;
  } else {
    valeurClic = 1;
  }
  numberOfClick += valeurClic;

  localStorage.setItem("nombreDeClick", numberOfClick);

  console.log(numberOfClick);
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

function startInterval() {
  intervalID = setInterval(autoClicker, interval);
}

button125.addEventListener("click", function () {
  if (numberOfClick >= 125 && bonus125 != true) {
    numberOfClick -= 125; // Soustraire 125 du compteur de clics
    bonus125 = true;
    localStorage.setItem("bonus125", bonus125);
    interval = 500;
    updateInterval();
    console.log(interval);
    console.log(bonus125);
    button125.classList.add("true");
  }
});

button500.addEventListener("click", function () {
  if (numberOfClick >= 500 && bonus500 != true) {
    numberOfClick -= 500; // Soustraire 500 du compteur de clics
    // Arrêter l'intervalle existant
    clearInterval(intervalID);

    // Lancer l'autoClicker avec la nouvelle valeur de valeurClic
    autoClicker();

    // Redémarrer l'intervalle avec la nouvelle valeur de valeurClic
    startInterval();

    // Mettre à jour le statut du bonus et les éléments DOM
    bonus500 = true;
    localStorage.setItem("bonus500", bonus500);
    console.log(bonus500);
    button500.classList.add("true");
  }
});

button1000.addEventListener("click", function () {
  if (numberOfClick >= 1000 && bonus1000 != true) {
    numberOfClick -= 1000; // Soustraire 1000 du compteur de clics
    bonus1000 = true;
    localStorage.setItem("bonus1000", bonus1000);
    interval = 125;
    updateInterval();
    console.log(bonus1000);
    button1000.classList.add("true");
  }
});

if (bonus50 == "true") {
  autoClicker();
  startInterval();
  console.log("50");
  button50.classList.add("true");
}

if (bonus125 == "true") {
  interval = 500;
  autoClicker();
  updateInterval();
  button125.classList.add("true");
}

if (bonus500 == "true") {
  autoClicker();
  valeurClic = parseInt(2);
  button500.classList.add("true");
}

function updateInterval() {
  clearInterval(intervalID); // Efface l'ancien intervalle
  intervalID = setInterval(autoClicker, interval); // Définit le nouvel intervalle
}

function updateCompteur() {
  let compteur = document.getElementById("compteur");
  compteur.textContent = numberOfClick;
}

function changerImage() {
  let image = document.querySelector(".gekko img");

  if (numberOfClick > 400) {
    image.setAttribute("src", "/images/Verti.png");
  }

  if (numberOfClick > 600) {
    image.setAttribute("src", "/images/Altego.png");
  }

  if (numberOfClick > 1000) {
    image.setAttribute("src", "/images/Mordicus.png");
  }
}

function randomSova() {
  console.log("tentative sova");
  var randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
  if (randomNum == 5) {
    sova.style.display = "block";
    console.log("Maintenant");
  }
}

let intervalIDSova;

// Définir une fonction pour appeler randomConsoleLog toutes les minutes
function startLogging() {
  randomSova();
  intervalIDSova = setInterval(randomSova, 36000);
}

// Appeler startLogging pour démarrer le processus de logging
startLogging();

sova.addEventListener("click", function () {
  backgroundImage = document.getElementById("background");
  backgroundImage.setAttribute("src", "images/icebox.jpg");
  sova.style.display = "none";
  clearInterval(intervalIDSova);
});

var secondesEcoulees = 0;

function bonusTemporaire() {
  var randomNum = Math.floor(Math.random() * 10);

  if (randomNum == 4) {
    secondesEcoulees++;
    bonusTemp = true;
    console.log("bonus actif");
    console.log(secondesEcoulees);

    if (secondesEcoulees >= 2) {
      bonusTemp = false;
      console.log("Fin de l'exécution après 30 secondes.");
      randomNum = null;
    }
  }

  console.log("Tentative bonus temporaire");
  console.log(randomNum);
}

var intervalIdDoubleClics = setInterval(bonusTemporaire, 60000);
