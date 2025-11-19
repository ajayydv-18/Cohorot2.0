let btn = document.querySelector("button");
let h1  = document.querySelector('h1');
let bar = document.querySelector(".i2box");
let box = document.querySelector(".box");
let num = 0;

btn.addEventListener('click', ()=>
{
    btn.style.pointerEvents = "none";
    let random =500 + Math.floor(Math.random()*100)
    let int = setInterval(function()
    {
        num++;
        h1.innerHTML = `${num}%`;
        bar.style.width = `${num}%`;
    },random);


    setTimeout(function(){
        clearInterval(int);
        btn.innerText = "Downloaded";
        btn.style.opacity = 0.5;
        let h3 = document.createElement("h3");
        h3.innerHTML = "<span>song.mp3</span> Downloaded!!";
        box.appendChild(h3);

    },random*100)
    
})