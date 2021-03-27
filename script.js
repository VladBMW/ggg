
let video = document.getElementById('video');
let btn = document.getElementById('btn');
let mainT = document.getElementById('main-text');
let mainT2 = document.getElementById('main-text2');
let rectangleRed = document.getElementById('rectangle-red');
let under = document.getElementById('text-under');

btn.addEventListener("click" , function(){
    video.play(); 
    mainT.classList.toggle('none');
    rectangleRed.classList.toggle('none');
    under.classList.toggle('none');
    mainT2.classList.toggle('none');
    btn.classList.toggle('opacity');
})

