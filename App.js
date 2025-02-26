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
  "energized",
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
    "The moon is in " +
    message.planets[Math.floor(Math.random() * message.planets.length)];

  let pt2 =
    "You may feel " +
    message.energies[Math.floor(Math.random() * message.energies.length)];

  let pt3 =
    "You may want to " +
    message.tasks[Math.floor(Math.random() * message.tasks.length)];

  let msg = pt1 + "\n" + pt2 + "\n" + pt3;

  return msg;
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

  const msg = generateMessage();
  alert(msg);
});

document.body.appendChild(button);
