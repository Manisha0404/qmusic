let play_pause=document.getElementById("play_pause")
let audioElement=new Audio("./Songs/song10.mp3")
let song_bar=document.getElementById("sound_progress_bar")
let album_name=document.getElementById("album_name")
let playButtons=document.querySelectorAll(".play i")
let currentPlayingIndex=-1
let songs=[
    "./Songs/song1.mp3",
    "./Songs/song2.mp3",
    "./Songs/song3.mp3",
    "./Songs/song4.mp3",
    "./Songs/song5.mp3",
    "./Songs/song6.mp3",
    "./Songs/song7.mp3",
    "./Songs/song8.mp3",
    "./Songs/song9.mp3",
    "./Songs/song10.mp3",
    "./Songs/song11.mp3",
    "./Songs/song12.mp3"
]
let songNames=[
    "Hoyna Hoyna",
    "Heeriye",
    "Anuvanuvu",
    "Kabhi Kabhi Adithi",
    "Tera Hone laga Hoon",
    "Tum Se Hi",
    "Chitti",
    "Hey Ranguley",
    "Pehli Nazar Mein",
    "Kesariya",
    "Urike Urike",
    "Nee Yadalo Naaku"
]
play_pause.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")
    }
    else{
        audioElement.pause()
        play_pause.classList.remove("fa-pause")
        play_pause.classList.add("fa-play")
    }
})

audioElement.addEventListener("timeupdate",()=>{
    let progress=(audioElement.currentTime/audioElement.duration)*100
    console.log(progress)
   song_bar.value=progress
})

song_bar.addEventListener("change",()=>{
    audioElement.currentTime=(song_bar.value*audioElement.duration)/100

})

playButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        if(currentPlayingIndex!=index){
            if(currentPlayingIndex!==-1){
                playButtons[currentPlayingIndex].classList.replace("fa-pause","fa-play")
            }
            audioElement.src=songs[index]
            audioElement.play()
            button.classList.replace("fa-play","fa-pause")
            play_pause.classList.replace("fa-play","fa-pause")
            currentPlayingIndex=index
            album_name.innerText=songNames[index]
        }
        else
        {
            if(audioElement.paused){
                audioElement.play()
                button.classList.replace("fa-play","fa-pause")
                play_pause.classList.replace("fa-play","fa-pause")
            }
            else{
                audioElement.pause()
                button.classList.replace("fa-pause","fa-play")
                play_pause.classList.replace("fa-pause","fa-play")
            }
        }
    })
})
//forward and backward
let count=-1
let forward=document.querySelector(".fa-forward")
let backward=document.querySelector(".fa-backward")

forward.addEventListener("click",()=>{
    if(count<11){
        count++
        audioElement.src=songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }

})
backward.addEventListener("click",()=>{
    if(count>0){
        count--
        audioElement.src=songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }
})