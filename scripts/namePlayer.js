const nameRead = document.getElementById("name");
let currentAudio = null; 

nameRead.addEventListener("click", () => {
    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;


    }
    let audio = new Audio("audo-recording/keerthanan-name-capture.mp3")
    currentAudio = audio;
    audio.play();

    
    
})