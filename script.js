window.onload = function() {
    song.pause();
  };
  
const songs=[

{
    name:"Shubh-Cheques",
    link:"music/2.mp3",
    image_src:"thumb-pic/2.webp"
},

{
    name:"Parmish Verma-Check it out",
    link:"music/4.mp3",
    image_src:"thumb-pic/4.webp"
},

{
    name:"Softly-Karan Aujla",
    link:"music/5.mp3",
    image_src:"thumb-pic/5.webp"
},
{
    name:"On Top-Karan Aujla",
    link:"music/6.mp3",
    image_src:"thumb-pic/6.webp"
},
{
    name:"Calaboose-Sidhu Moose Wala",
    link:"music/7.mp3",
    image_src:"thumb-pic/7.webp"
},
{
    name:"Signed To God",
    link:"music/8.mp3",
    image_src:"thumb-pic/8.webp"
},
{
    name:"Afterhours- BIR",
    link:"music/9.mp3",
    image_src:"thumb-pic/9.webp"
},
{
    name:"Shub-One-Love",
    link:"music/1.mp3",
    image_src:"thumb-pic/1.webp"
}
];


//index of array
var index = 0;

//information variables
var image = document.querySelector(".thumb-image");
var song_name = document.querySelector(".song-name");
var song = document.querySelector(".songs");
var loop = document.querySelector("#loop");
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
        if(song.duration === song.currentTime)
        {
        if(index === 7)
        {
        index = 0;
        image.src = songs[index].image_src;
        song_name.innerHTML = songs[index].name;
        song.src = songs[index].link;
        song.play();
        }
    }
        if(song.duration === song.currentTime)
        {
        index ++;
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

    progress.addEventListener('click',function(){
        playbtn.classList.add("fa-circle-pause");
    })

loop.addEventListener('click',function(){
    song.loop = true;
})


    //Dark or Light Mode
var body = document.querySelector("body");
var main = document.querySelector(".main");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var h2 = document.querySelector("h2");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");


// Mouse Follower





