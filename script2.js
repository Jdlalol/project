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