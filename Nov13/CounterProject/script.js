let h1 = document.querySelector("h1");
let btnInc = document.querySelector("#btnInc");
let btnDec = document.querySelector("#btnDec");
let a = 0;
btnInc.addEventListener("click",function()
{
    a++;
    h1.innerHTML = a;
})
btnDec.addEventListener("click",function()
{
    if(a<0) {
        a=0;
    }
    else{
        
        h1.innerHTML = a;
        a--;
    }
    
})
