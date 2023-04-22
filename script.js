console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('songs/kahanisuno.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let playingSongName=document.getElementById('playingSongName');
let song=document.getElementsByClassName('songItemPlay');


let songs=[
    {songName: "Kahani Suno" , filePath: "songs/kahanisuno.mp3" , coverPath:"image/cover1.jpg"},
    {songName: "Chill Mode" , filePath: "songs/ChillMode.mp3" , coverPath:"image/cover2.jpeg"},
    {songName: "Cause Of You" , filePath: "songs/CauseOfYou.mp3" , coverPath:"image/cover3.jpeg"},
    {songName: "Take it Easy" , filePath: "songs/TakeItEasy.mp3" , coverPath:"image/cover4.jpeg"},
    {songName: "Cheatin" , filePath: "songs/Cheatin.mp3" , coverPath:"image/cover5.jpeg"},
    {songName: "Jatta By Harnoor" , filePath: "songs/Jatta.mp3" , coverPath:"image/cover6.jpeg"},
    {songName: "Jumke By Harnoor" , filePath: "songs/Jhumke.mp3" , coverPath:"image/cover7.jpeg"},
    {songName: "Praise By Armaan Bedil" , filePath: "songs/Praise.mp3" , coverPath:"image/cover8.jpeg"},
    {songName: "Wah Kya Nazare By Harnoor" , filePath: "songs/WahKyaNazare.mp3" , coverPath:"image/cover9.jpeg"},
    {songName: "Trei Galiyon Mein By Guri" , filePath: "songs/TeriGaliyonMein.mp3" , coverPath:"image/cover10.jpeg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//song play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

       song[songIndex].classList.remove('fa-play-circle');
       song[songIndex].classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        song[songIndex].classList.remove('fa-pause-circle');
        song[songIndex].classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// //listen to event
audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
  console.log(progress);
  if(progress==100){
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    song[songIndex].classList.remove('fa-play-circle');
       song[songIndex].classList.add('fa-pause-circle');
    playingSongName.innerText=songs[songIndex].songName;
    audioElement.src= songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        songIndex =parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src= songs[songIndex].filePath;
    audioElement.currentTime=0;
    playingSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    e.target.classList.remove('fa-pause-circle');
       e.target.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}
    })

})
if(audioElement.currentTime==100){
    console.log(audioElement.currentTime);
    song[songIndex].classList.remove('fa-pause-circle');
        song[songIndex].classList.add('fa-play-circle');

}

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.src= songs[songIndex].filePath;
    playingSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    song[songIndex].classList.remove('fa-play-circle');
       song[songIndex].classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    song[songIndex].classList.remove('fa-play-circle');
       song[songIndex].classList.add('fa-pause-circle');
    playingSongName.innerText=songs[songIndex].songName;
    audioElement.src= songs[songIndex].filePath;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
