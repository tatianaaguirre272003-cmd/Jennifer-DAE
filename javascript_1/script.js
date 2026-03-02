let lakeName = "Digital Lake";
let fishPopulation = 12;
let waterTemperature = 28;

function checkLake() {
    let ecosystemScore = fishPopulation * waterTemperature;
    let message;

    if (fishPopulation > 10 && waterTemperature > 25) {
        message = "⚠️ El lago está en riesgo.";
    } else {
        message = "✅ El lago está estable.";
    }

    console.log("Lake:", lakeName);
    console.log("Score:", ecosystemScore);
    console.log(message);

    document.getElementById("result").innerText =
        "Score: " + ecosystemScore + " - " + message;
}