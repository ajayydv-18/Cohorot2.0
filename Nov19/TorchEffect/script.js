let main = document.querySelector('main');
let h1 = document.querySelector('h1');


main.addEventListener('mousemove',(dets)=>{
    let pos =document.querySelector('.torch');
    h1.style.opacity = 1;
    pos.style.setProperty('--x' , dets.clientX + "px")
    pos.style.setProperty('--y' , dets.clientY + "px")
})