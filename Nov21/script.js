// let btn = document.querySelectorAll("button");
let sound = [
   new Audio("./Sound/A0.mp3"),
   new Audio("./Sound/A1.mp3"),
   new Audio("./Sound/A2.mp3"),
   new Audio("./Sound/A3.mp3"),
   new Audio("./Sound/A4.mp3"),
   new Audio("./Sound/A5.mp3"),
   new Audio("./Sound/C1.mp3"),
   new Audio("./Sound/C2.mp3"),
   new Audio("./Sound/C3.mp3"),
   new Audio("./Sound/C4.mp3"),
   new Audio("./Sound/C5.mp3"),
   new Audio("./Sound/C6.mp3"),
   new Audio("./Sound/Ds1.mp3"),
   new Audio("./Sound/Ds2.mp3"),
   new Audio("./Sound/Ds3.mp3"),
   new Audio("./Sound/Ds4.mp3"),
   new Audio("./Sound/Ds5.mp3"),
   new Audio("./Sound/Fs1.mp3"),
   new Audio("./Sound/Fs2.mp3"),
   new Audio("./Sound/Fs3.mp3"),
   new Audio("./Sound/Fs4.mp3"),
   new Audio("./Sound/Fs5.mp3"),
]
// let main = document.querySelector("main");
  
// sound.forEach(function(arr)
// {
//    main.addEventListener("keydown" , function(dets)
// {
//    console.log(dets.key);
// })
// })

let button = document.querySelectorAll('button');
console.log(button[0])

window.addEventListener('keydown' , function(dets){
   sound.forEach((aud , idx)=>{
      if(dets.key == 0 && idx == 0)
      {
         aud.currentTime = 0;
         aud.play();
      }
      

      if(dets.key == 1 && idx == 1)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 2 && idx == 2)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 3 && idx == 3)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 4 && idx == 4)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 5 && idx == 5)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 6 && idx == 6)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 7 && idx == 7)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 8 && idx == 8)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 9 && idx == 9)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 'q' && idx == 10)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 'u' && idx == 11)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 'e' && idx == 12)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 'r' && idx == 13)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 't' && idx == 14)
      {
         aud.currentTime = 0;
         aud.play();
      }
        if(dets.key == 'y' && idx == 15)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'u' && idx == 16)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'i' && idx == 17)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'o' && idx == 18)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'p' && idx == 19)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'a' && idx == 20)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 's' && idx == 21)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'd' && idx == 0)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'f' && idx == 1)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'g' && idx == 2)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'h' && idx == 3)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'j' && idx == 4)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'k' && idx == 5)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'l' && idx == 6)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'z' && idx == 7)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'x' && idx == 8)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'c' && idx == 9)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'v' && idx == 10)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'b' && idx == 11)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'n' && idx == 12)
      {
         aud.currentTime = 0;
         aud.play();
      }
      if(dets.key == 'm' && idx == 13)
      {
         aud.currentTime = 0;
         aud.play();
      }

   })
   
})
console.log(sound.length);
