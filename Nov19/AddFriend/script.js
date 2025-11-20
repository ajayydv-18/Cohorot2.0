let btn = document.querySelector("button");
let close = document.querySelector("#close");
let main = document.querySelector("main");
let count = 0;

btn.addEventListener('click', ()=>
{
    if(count == 0)
    {
    btn.innerHTML = "Following";
    btn.style.backgroundColor = "#2c3035ff";
    count = 1;
    }
    else{
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "#4A5DF9";
        count = 0;
    }
})
close.addEventListener('click' , ()=>
{
        main.innerHTML = "";
})