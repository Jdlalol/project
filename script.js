// Event listener for form submission
document.getElementById('inputForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const response = document.getElementById('response');
    
    if (userInput === "") {
        alert("Please enter a topic!");
        return;
    }
    
    // Simple UI update based on user input
    response.innerHTML = `<p>You selected: <strong>${userInput}</strong></p>`;
    
    // Validation Example (Checking if the input contains 'tech')
    if (userInput.toLowerCase().includes("tech")) {
        response.style.color = "green";
    } else {
        response.style.color = "red";
    }
});
const dropdown = document.getElementById("browser");

dropdown.addEventListener("change", (event) => {
    // Stop all sounds first
    const allSounds = document.querySelectorAll("audio");
    allSounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0; // Reset playback
    });

    // Play the sound based on the selected value
    const selectedValue = event.target.value;
    let soundToPlay = null;

    if (selectedValue === "ie") {
        soundToPlay = document.getElementById("ie-sound");
    } else if (selectedValue === "mozilla") {
        soundToPlay = document.getElementById("mozilla-sound");
    }

    // Play the selected sound if it exists
    if (soundToPlay) {
        soundToPlay.play();
    }
});

