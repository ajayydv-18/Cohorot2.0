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
 new Audio("./Sound/Fs4.mp3"),
 new Audio("./Sound/Fs5.mp3")
];
console.log(sound.length);


let keys = [
  "0","1","2","3","4","5","6","7","8","9",
  "q","w","e","r","t","y","u","i","o","p",
  "a","s",'d','f','g','h','j','k','l','z',
  'x','c','v','b','n','m'
];
console.log(keys.length)

let btn = document.querySelectorAll("button");

function playSoundByIndex(idx) {
   if (typeof idx !== "number" || idx < 0 || idx >= sound.length) return;
   let aud = sound[idx];
   aud.currentTime = 0;
   aud.play();
}

window.addEventListener('keydown', function(dets) {
   console.log("hello");
   let k = dets.key.toLowerCase();
   let idx = keys.indexOf(k);   
   playSoundByIndex(idx);
});

btn.forEach(function(dets, i) {
   dets.addEventListener('click', function() {
      playSoundByIndex(i);
   });
});
