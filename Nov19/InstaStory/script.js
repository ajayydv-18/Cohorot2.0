let arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story: "https://plus.unsplash.com/premium_photo-1673758905792-f3fa0e3860f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1568196004494-b1ee34f3b436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1727107047534-99afc152baf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    story: "https://images.unsplash.com/photo-1722507389858-0d0b5356dc13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1595435757684-8bdd368d1cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1683849116569-90e86ebfc1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  },
  {
    dp: "https://images.unsplash.com/photo-1639365982753-817166f4850a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1610227221484-e584b91f178f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
  },
  {
    dp: "https://images.unsplash.com/photo-1648322032202-73cb85f354be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    story: "https://images.unsplash.com/photo-1633939546998-33da75291c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1725958019856-070da1a8be88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    story: "https://images.unsplash.com/photo-1638890825565-a049576f0ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  },
];
let nav = document.querySelector(".nav");
let fullscreen = document.querySelector('.fullscreen');
let clutter = "";
arr.forEach((elem , id)=>
{
    clutter += ` <div class="story"><img id="${id}" src="${elem.dp}" alt=""></div>`;
})
nav.innerHTML = clutter;
nav.addEventListener('click' , function(dets){
    fullscreen.style.display = 'block';
    let val =  arr[dets.target.id].story;
    fullscreen.style.backgroundImage = `url(${val})`;

    setTimeout(()=>{
    fullscreen.style.display = "none";
    },2000)
    // console.log("hello");
    //console.log(dets);//yha aihume pointer event milta hai iska matlab hota hai jab bhi humne kisi lemnt ko selct karo to usk ksath kya kya hua wo yha dikhta hai
    //console.log(arr[dets.target.id]);//click karne par hume wo array ka index milega jisko humne click kiya hai
    // fullscreen.style.display = "block";
    
})
