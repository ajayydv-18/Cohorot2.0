let box = document.querySelector("#box");
let btn = document.querySelector("button");
btn.addEventListener('click',()=>
{
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    box.style.backgroundColor= `rgb(${a},${b},${c})`;
    //jab bhi string mien value pass karna hota hai to string template ka use karte hai
})