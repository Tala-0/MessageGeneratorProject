const message = new Object();
message.planets = [
  "Mars",
  "Venus",
  "Neptune",
  "Mercury",
  "Saturn",
  "Jupiter",
  "Uranus",
  "Pluto",
];

message.energies = [
  "tired",
  "happy",
  "fast",
  "slow",
  "athletic",
  "comfy",
  "crafty",
  "nurturing",
];

message.tasks = [
  "sleep",
  "party",
  "take a cold shower",
  "garden",
  "go for a walk",
  "cook",
  "clean",
  "invite friends",
];

function generateMessage() {
  let pt1 =
    "The moon is in " + Math.floor(Math.random() * message.planets.length);
}

// Create a button element
const button = document.createElement("button");

// Set the button text to 'Can you click me?'
button.innerText = "Want to know your horoscope for the day?";

button.id = "mainButton";

// Attach the "click" event to your button
button.addEventListener("click", () => {
  // When there is a "click"
  // it shows an alert in the browser
  alert("Oh, you clicked me!");
});

document.body.appendChild(button);
("J");
