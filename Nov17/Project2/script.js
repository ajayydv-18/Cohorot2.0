let btn = document.querySelector("button");

let text = document.querySelector(".text");
text.innerHTML = `"Quotes"`;
text.style.fontSize = "15px";
text.style.fontWeight = "800";
const arr = [
  "Believe in yourself.",
  "Every day is a new beginning.",
  "Stay positive, work hard.",
  "Dream big and dare to fail.",
  "Success starts with self-discipline.",
  "Small steps lead to big results.",
  "Don’t stop until you’re proud.",
  "Progress, not perfection.",
  "Focus on the good.",
  "Your only limit is you.",
  "Be stronger than your excuses.",
  "Great things take time.",
  "Do it with passion or not at all.",
  "Doubt kills more dreams than failure ever will.",
  "Work hard in silence.",
  "Push yourself; no one else will.",
  "One day at a time.",
  "Stay humble, stay kind.",
  "Never stop learning.",
  "Start where you are.",
  "Believe you can.",
  "Don’t wait for opportunity. Create it.",
  "Difficult roads lead to beautiful destinations.",
  "Success is a journey.",
  "Choose joy.",
  "Everything is figureoutable.",
  "Be the energy you want to attract.",
  "Grow through what you go through.",
  "Stay patient and trust your journey.",
  "Consistency creates results.",
  "Take the risk or lose the chance.",
  "Mindset is everything.",
  "Be a better you.",
  "The best view comes after the hardest climb.",
  "You are capable of amazing things.",
  "Nothing is impossible.",
  "Keep going; keep growing.",
  "Be your own hero.",
  "Live in the moment.",
  "Stay focused.",
  "Good things are coming.",
  "If not now, when?",
  "Start small, think big.",
  "Make yourself proud.",
  "Enjoy the little things.",
  "Failure is not the opposite of success.",
  "You’ve got this.",
  "Turn pain into power.",
  "Chase the vision, not the money.",
  "Hard work beats talent.",
  "Never give up.",
  "Stay curious.",
  "Success requires action.",
  "Be fearless.",
  "Stay hungry, stay foolish.",
  "Trust the process.",
  "Dream, plan, execute.",
  "Your future is created today.",
  "Make every day count.",
  "Be yourself.",
  "Think less, do more.",
  "Learn from yesterday.",
  "Act with purpose.",
  "Don’t look back.",
  "Believe more, doubt less.",
  "Discipline equals freedom.",
  "Do something today your future self will thank you for.",
  "Turn your wounds into wisdom.",
  "Control what you can control.",
  "Stay determined.",
  "Make it happen.",
  "Success is earned.",
  "Let your actions speak.",
  "Find your fire.",
  "Rise and shine.",
  "You are enough.",
  "Better days are coming.",
  "Keep moving forward.",
  "Focus on progress.",
  "Stay true to your path."
];
let num = -1;

btn.addEventListener('click', ()=>
{
    num++;

    text.innerHTML = " ";
    let h2 = document.createElement('h2');
    if(num<arr.length)
    {
        h2.innerHTML = arr[num];
    }
    if(num == arr.length)
    {
        btn.style.backgroundColor = "#444";
        btn.style.pointerEvents = "none";
        btn.style.border = "1px solid white"
    }
    
    text.append(h2);
    console.log(text);
    

})