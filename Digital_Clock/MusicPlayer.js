musicName = document.getElementById("MusicName");
musicImg = document.getElementById("ImageMusic");
musicAudio = document.getElementById("MainAudio");
playButton = document.getElementById("PlayButton");
muteButton = document.getElementById("MuteButton");
IsMusic = document.getElementById("PlayButton").value;
VolumeSlider = document.getElementById("VolumeSlider");
nonActiveSideAudio = document.getElementById("ColorContainerSlider");
activeSideAudio = document.getElementById("ColorSlider");
songProgressBar = document.getElementById("SongProgress")
songProgressBarArea = document.getElementById("SongProgressArea")

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
    musicAudio.volume = VolumeSlider.value/100
    activeSideAudio.style.width = `${VolumeSlider.value}` + '%';
    if(VolumeSlider.value > 0){
        muteButton.src = "Digital_Clock_Resources/Unmute.png";
    }
    else{
        muteButton.src = "Digital_Clock_Resources/Mute.png";

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
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progresWidth = (currentTime/duration) * 100;
    songProgressBar.style.width = `${progresWidth}` +'%';

    musicAudio.addEventListener("loadeddata", ()=>{
        songTotalDuration = document.getElementById("FullDuration");

        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration/60);
        let totalSec = Math.floor(audioDuration%60);
        songTotalDuration.innerText = `${totalMin}:${totalSec}`;
    })
    songCurrentTime = document.getElementById("CurrentTime");

    let currentMin = Math.floor(currentTime/60);
    let currentSec = Math.floor(currentTime%60);
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    songCurrentTime.innerText = `${currentMin}:${currentSec}`
});

songProgressBarArea.addEventListener("click", (e)=>{
    let progresWidthVal = songProgressBarArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = musicAudio.duration;

    musicAudio.currentTime = (clickedOffsetX/progresWidthVal) *songDuration;
});

musicAudio.addEventListener("ended", ()=>{
    songIndex++;
    songIndex > musicList.length ? songIndex = musicList.length : songIndex = songIndex;
    LoadMusic(songIndex);
    IsMusic = "Paused";
    PlayPause();

});
