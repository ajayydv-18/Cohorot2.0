/**
 * Dom :- document object model 
 * hum pane poore website ko ek tree ke form mein dekh skte hai jha humare pass kai saare nodes hote hai aur un sabhi nodes ke subnodes hote hai
 * isi ko hum dom kehte hai
 * dom manupulation :- js ka use kar ke html aur css ko change karna dom manupulation kehlata hai
 * 
 * dom manupulation ke 4 tareeke hote hai :- 
 * 1.phla hota hai selection krna
 * 2.content ko change krna ya html ko chnage karna
 * 3.stl ko chnage karna 
 * 4.event listeners ko use karna
 */
let h1 = document.querySelector("h1");//tag ka selection agar kai saare tags honge to ye bas unme se pehla hi slect krta hai poore ko select krne ke liye hum use krte hai 

let h4 = document.querySelectorAll("h1");//ye jitne hi h1 honge unko select kar lega
let h1class = document.querySelector(".h1");//class ka selection
let h1id = document.querySelector("#h1");//id ka selection

//aur bhi kai saare tareeke hote hai 
/**
 * 1.getElementById :- document.getELementById("hello"); ye jiski id hello hogi usko select karega
 * 2.getElementsByClass :- document.getElementsByClass("hii"); ye jiski class ki value hii hogi usko select karega;
 */
// ye tha ki kaise slect karte hai **************************************************************
/**
 * ab dekhenge ki kaise change krte hai
 * teen kareeke hote hai
 * 
 * 1. innerHtml :- ye html bhi add kar skta hai
 * 2.innerText :- bas text hi chnage kar skta hai aur thoda slow hota hai
 * 3.textContent :- ye bhi bas text hi change karta hai par faster hot ahai thoda sa
 * Hum change teeno se kar skte hai par hum mostle use karte hai innerHtml to change
 * 
 */
h1.innerText = "Mai badal chuka hu !";

//*************************************************************

/**
 * Third pillar is styling
 * elemt.styl.property = "value of that property";
 */
h1.style.color = "red";

/**
 * the fourth pillar is event listerner 
 * website par jo bhi ghata ghatit ho rhai usko hum event kehte hai aur uske upar track rakhna event lister kehlat ahai
 * jaise ki mouse move kiya ye ek event hai mouse kha kha gaya ye event listener hai
 */
h1.addEventListener("click",function(){
    console.log("I am being run by event listener ")
})
