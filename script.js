window.onload = function() {
    song.pause();
  };
  
const songs=[
{
        name:"Shubh-Elevated",
        link:"3.mp3",
        image_src:"3.jpg"
},
{
    name:"Shubh-Cheques",
    link:"2.mp3",
    image_src:"2.jpg"
},
{
    name:"Shub-One-Love",
    link:"1.mp3",
    image_src:"1.jpg"
},

{
    name:"Parmish Verma-Check it out",
    link:"4.mp3",
    image_src:"4.jpg"
},

];

//index of array
var index = 0;

//information variables
var image = document.querySelector(".thumb-image");
var song_name = document.querySelector(".song-name");
var song = document.querySelector(".songs");

//control-panel variables
var progress = document.querySelector(".progress-bar");
var fwbtn = document.querySelector("#fw");
var playbtn = document.querySelector("#play");
var bwbtn = document.querySelector("#bw");

//putting values of array to html elements
image.src = songs[index].image_src;
song_name.innerHTML = songs[index].name;
song.src = songs[index].link;

//when song is loaded then this function is called
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

//condition for play button
playbtn.addEventListener("click",function(){
    if(playbtn.classList.contains("fa-circle-play"))
{
    song.play();
    playbtn.classList.remove("fa-circle-play");
    playbtn.classList.add("fa-circle-pause");
}
else
{
    song.pause();
    playbtn.classList.remove("fa-circle-pause");
    playbtn.classList.add("fa-circle-play");
}

})


if(song.play())
{
    setInterval(()=>{
        progress.value = song.currentTime;
        if(song.duration == song.currentTime)
        {
        index++;
        image.src = songs[index].image_src;
        song_name.innerHTML = songs[index].name;
        song.src = songs[index].link;
        song.play();   
        }
    },1000);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
  };
  

//forward or backward
fwbtn.addEventListener("click",function(){
    index++;
    if(index > songs.length)
    {
        index = 0;
        image.src = songs[index].image_src;
        song_name.innerHTML = songs[index].name;
        song.src = songs[index].link;
        song.play();
        playbtn.classList.add("fa-circle-pause");
    }
    else
    {
        image.src = songs[index].image_src;
        song_name.innerHTML = songs[index].name;
        song.src = songs[index].link;
        song.play();
        playbtn.classList.add("fa-circle-pause");
    }
});
    bwbtn.addEventListener("click",function(){
        index = index-1;
        if(index < 0)
        {
            index = songs.length;
            image.src = songs[index].image_src;
            song_name.innerHTML = songs[index].name;
            song.src = songs[index].link;
            song.play();
        }
        else
        {
            image.src = songs[index].image_src;
            song_name.innerHTML = songs[index].name;
            song.src = songs[index].link;
            song.play();
        }
    
    });

    //Dark or Light Mode
var body = document.querySelector("body");
var main = document.querySelector(".main");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var h2 = document.querySelector("h2");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
function lightmode(){
    body.style.backgroundColor = "white"
    button2.style.border = "solid 1.5px black"
    button2.style.color = "black"
    button2.style.height = "45px"
    button2.style.width = "170px"
    button2.style.fontSize = "18px"
    button2.style.borderRadius = "50px"
    main.style.backgroundColor = "white"
    main.style.color = "black"
    fwbtn.style.color = "black"
    bwbtn.style.color = "black"
    playbtn.style.color = "black"
    h2.style.color = "black"
    song_name.style.color = "black"
    progress.style.backgroundColor = "black"
    button2.style.cursor = "pointer"
}
function darkmode(){
    button1.style.border = "solid 1.5px white"
    button1.style.color = "white"
    button1.style.height = "45px"
    button1.style.width = "170px"
    button1.style.fontSize = "18px"
    button1.style.borderRadius = "50px"
    body.style.backgroundColor = "black"
    body.style.color = "black"
    main.style.backgroundColor = "black"
    main.style.color = "white"
    fwbtn.style.color = "white"
    bwbtn.style.color = "white"
    playbtn.style.color = "white"
    h2.style.color = "white"
    song_name.style.color = "white"
    progress.style.backgroundColor = "white"
    button2.style.cursor = "pointer"
}


button1.addEventListener("click", lightmode);
button2.addEventListener("click",darkmode)


// Mouse Follower





