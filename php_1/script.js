/*let temperature = 20;
let isNight = false;
let weather = "sunny";


function toggleDayNight() {
    isNight = !isNight;
    document.body.classList.toggle("night");

    temperature = isNight ? 12 : 20;
    updateUI();
    showStatus(isNight ? "🌙 Night Mode" : "☀️ Day Mode");
}


function cycleWeather() {
    const rain = document.getElementById("rain");
    const snow = document.getElementById("snow");
    const rainSound = document.getElementById("rainSound");

    rain.innerHTML = "";
    snow.innerHTML = "";

    if (weather === "sunny") {
        weather = "rain";
        startRain(rain, rainSound);
        temperature = 18;
        showStatus("🌧️ Rain started");
    }

    else if (weather === "rain") {
        weather = "cloud";
        rainSound.pause();
        temperature = 20;
        showStatus("☁️ Cloudy");
    }

    else {
        weather = "sunny";
        rainSound.pause();
        temperature = 25;
        showStatus("☀️ Sunny");
    }

    updateSky();
    updateUI();
}


function startRain(rain, sound) {
    rain.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        let drop = document.createElement("div");
        drop.className = "drop";

        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = (0.5 + Math.random()) + "s";
        drop.style.animationDelay = Math.random() * 2 + "s";

        rain.appendChild(drop);
    }

    sound.volume = 0.4;
    sound.play().catch(()=>{});
}


function updateSky() {
    const sky = document.getElementById("sky");

    if (weather === "sunny") {
        sky.style.background = "linear-gradient(to bottom, #87ceeb, transparent)";
    }

    if (weather === "rain") {
        sky.style.background = "linear-gradient(to bottom, #5dade2, transparent)";
    }

    if (weather === "cloud") {
        sky.style.background = "linear-gradient(to bottom, #d1d5db, transparent)";
    }
}


function updateUI() {
    document.getElementById("temperatureDisplay").innerText =
        `🌡️ ${temperature}°C`;
}


function showStatus(msg) {
    const el = document.getElementById("statusMessage");
    el.innerText = msg;
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 2000);
}

*/


let temperature = 20;
let isNight = false;
let weather = "sunny";

/* =========================
   🌙 DAY / NIGHT
========================= */
function toggleDayNight() {
    isNight = !isNight;
    document.body.classList.toggle("night");

    temperature = isNight ? 12 : 20;
    updateUI();
    showStatus(isNight ? "🌙 Night Mode" : "☀️ Day Mode");
}

/* =========================
   🌦️ WEATHER SYSTEM
========================= */
function cycleWeather() {
    const rain = document.getElementById("rain");
    const snow = document.getElementById("snow");
    const rainSound = document.getElementById("rainSound");

    if (rain) rain.innerHTML = "";
    if (snow) snow.innerHTML = "";

    if (weather === "sunny") {
        weather = "rain";
        startRain();
        temperature = 18;

        if (rainSound) {
            rainSound.volume = 0.4;
            rainSound.play().catch(()=>{});
        }

        showStatus("🌧️ Rain started");
    }

    else if (weather === "rain") {
        weather = "cloud";
        if (rainSound) {
            rainSound.pause();
            rainSound.currentTime = 0;
        }

        temperature = 20;
        showStatus("☁️ Cloudy");
    }

    else {
        weather = "sunny";
        if (rainSound) {
            rainSound.pause();
            rainSound.currentTime = 0;
        }

        temperature = 25;
        showStatus("☀️ Sunny");
    }

    updateSky();
    updateUI();
}

/* =========================
   🌧️ RAIN SYSTEM
========================= */
function startRain() {
    const rain = document.getElementById("rain");
    if (!rain) return;

    rain.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        let drop = document.createElement("div");
        drop.className = "drop";

        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = (0.5 + Math.random()) + "s";
        drop.style.animationDelay = Math.random() * 2 + "s";

        rain.appendChild(drop);
    }
}

/* =========================
   🌤️ SKY UPDATE
========================= */
function updateSky() {
    const sky = document.getElementById("sky");
    if (!sky) return;

    if (weather === "sunny") {
        sky.style.background = "linear-gradient(to bottom, #87ceeb, transparent)";
    }

    if (weather === "rain") {
        sky.style.background = "linear-gradient(to bottom, #5dade2, transparent)";
    }

    if (weather === "cloud") {
        sky.style.background = "linear-gradient(to bottom, #d1d5db, transparent)";
    }
}

/* =========================
   🌡️ UI UPDATE
========================= */
function updateUI() {
    const temp = document.getElementById("temperatureDisplay");
    if (temp) {
        temp.innerText = `🌡️ ${temperature}°C`;
    }
}

/* =========================
   📢 STATUS MESSAGE
========================= */
function showStatus(msg) {
    const el = document.getElementById("statusMessage");
    if (!el) return;

    el.innerText = msg;
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 2000);
}

/* =========================
   🧩 FIX MISSING FUNCTIONS
========================= */

function changeTemperature() {
    temperature += 2;
    if (temperature > 30) temperature = 10;

    updateUI();
    showStatus("🌡️ Temperature changed");
}

function addAnimal(type) {
    showStatus("🐾 Added " + type);
}

function feedAnimals() {
    const food = document.getElementById("foodContainer");
    if (!food) return;

    for (let i = 0; i < 10; i++) {
        let pellet = document.createElement("div");
        pellet.className = "food-pellet";

        pellet.style.left = Math.random() * 100 + "%";
        pellet.style.top = "10%";

        food.appendChild(pellet);

        setTimeout(() => pellet.remove(), 3000);
    }

    showStatus("🍖 Animals are eating");
}

function speedUp() {
    showStatus("⚡ Speed boosted");
}

function toggleSound() {
    const lake = document.getElementById("lakeSound");
    if (!lake) return;

    if (lake.paused) {
        lake.play().catch(()=>{});
        showStatus("🔊 Sound ON");
    } else {
        lake.pause();
        showStatus("🔇 Sound OFF");
    }
}

function interactAnimal(el) {
    el.style.transform = "scale(1.3)";
    setTimeout(() => {
        el.style.transform = "";
    }, 300);
}