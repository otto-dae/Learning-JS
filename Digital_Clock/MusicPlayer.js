musicName = document.getElementById("MusicName");
musicImg = document.getElementById("ImageMusic");
musicAudio = document.getElementById("MainAudio");
playButton = document.getElementById("PlayButton");
muteButton = document.getElementById("MuteButton");
IsMusic = document.getElementById("PlayButton").value;
VolumeSlider = document.getElementById("VolumeSlider");
let songIndex = 1;

window.addEventListener("load", ()=>{
    LoadMusic(songIndex);
})

function LoadMusic(songIndex){
    musicName.textContent = musicList[songIndex -1].name;
    musicImg.src = musicList[songIndex -1].img;
    musicAudio.src = musicList[songIndex -1].src;
}

function PlayPause(){
    if(IsMusic === "Paused"){
        musicAudio.play()
        IsMusic = "Playing";
        playButton.src = "Digital_Clock_Resources/PlaySong.png";
    }
    else{
        musicAudio.pause()
        IsMusic = "Paused";
        playButton.src = "Digital_Clock_Resources/PauseSong.png";
    }
}

function PrevSong(){
    songIndex--;
    songIndex < 1 ? songIndex = 1 : songIndex = songIndex;
    LoadMusic(songIndex);
    IsMusic = "Paused";
    PlayPause();
}
function NextSong(){
    songIndex++;
    songIndex > musicList.length ? songIndex = musicList.length : songIndex = songIndex;
    LoadMusic(songIndex);
    IsMusic = "Paused";
    PlayPause();
}


VolumeSlider.addEventListener("mousemove", function(){
var volumeValue = VolumeSlider.value;
colorSlider = 'linear-gradient(90deg, rgb(255, 255, 255)'+volumeValue+'%, rgb(82, 81, 81)'+volumeValue+'%)';
VolumeSlider.style.background = colorSlider;
if(volumeValue == 0){
    muteButton.src = "Digital_Clock_Resources/Mute.png";
    musicAudio.volume = VolumeSlider.value/100;
}
else{
    muteButton.src = "Digital_Clock_Resources/Unmute.png";
    musicAudio.volume = VolumeSlider.value/100;
}
});


MuteButton.addEventListener("click", () =>{
    if(musicAudio.volume != 0 || VolumeSlider.value==0)
        {
            musicAudio.volume = 0;
            VolumeSlider.value = 0;
            muteButton.src = "Digital_Clock_Resources/Mute.png";
        }
    else{
        musicAudio.volume = VolumeSlider.value;
        muteButton.src = "Digital_Clock_Resources/Unmute.png";
    }
});

musicAudio.addEventListener("timeupdate", (e) =>{
});
