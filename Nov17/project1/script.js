let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener('click' , () =>
{
    let div = document.createElement("div");
    div.style.height = "100px";//ye string hai to aise likhenge
    div.style.width = "100px";
    
    let top = Math.random()*100;
    let left = Math.random()*100;

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let c4 = Math.random()*360;

    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = "absolute";
    div.style.rotate = `${c4}deg`
    
    div.style.top = `${top}%`;
    div.style.left = `${left}%`;
    main.appendChild(div);
    
})