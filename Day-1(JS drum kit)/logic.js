document.addEventListener('keydown', function(event) {
    const key = event.key;
    playAudio(key);
});

function playAudio(key) {
    const audioPlayer = document.getElementById("audioPlayer");
    switch (key) {
        case 'a':
            audioPlayer.src = 'src/boom.wav';
            break;
        case 's':
            audioPlayer.src = 'src/clap.wav';
            break;
        case 'd':
            audioPlayer.src = 'src/hihat.wav';
            break;
        case 'f':
            audioPlayer.src = 'src/kick.wav';
            break;
        case 'g':
            audioPlayer.src = 'src/openhat.wav';
            break;
        case 'h':
            audioPlayer.src = 'src/ride.wav';
            break;
        case 'j':
            audioPlayer.src = 'src/snare.wav';
            break;
        case 'k':
            audioPlayer.src = 'src/tink.wav';
            break;
        case 'l':
            audioPlayer.src = 'src/tom.wav';
            break;
        default:
            return;
    }
    audioPlayer.play();
}
