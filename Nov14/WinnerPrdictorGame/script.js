let box = document.querySelector("#box");
let aname = document.querySelector("#name")
let afullName = document.querySelector("#full-name")
let acaptain = document.querySelector("#captain-name")
let btn = document.querySelector("button");
let main = document.querySelector("main");
let img = document.querySelector("img");
let arr = [
    {
        name: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primaryColor: "#C5414E",
        secondaryColor: "#30171A",
        captain: "Virat Kohli",
        img: "https://imgs.search.brave.com/ey43m7EJleaXTWqFcMv93BeewZxbK61h31MI-h0huI4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tcndh/bGxwYXBlci5jb20v/aW1hZ2VzL3RodW1i/bmFpbC9yY2Itcmln/aHQtaGFuZC1iYXRz/bWFuLXZpcmF0LWtv/aGxpLThmYzNkNTFs/YmdnbWZiZnAuanBn"
    },

    {
        name: "MI",
        fullName: "Mumbai Indians",
        primaryColor: "blue",
        secondaryColor: "gold",
        captain: "Rohit Sharma",
        img:"https://imgs.search.brave.com/tfJdHX9tx6Gg2zTQRv3nZ8fjv233LeLb7EzZ-e0gyYo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjLzZh/LzVjL2RjNmE1Y2Rk/ZTdjNDRmOGM0YTI5/OGY0MmMxZWZkMjU1/LmpwZw"
    },

    {
        name: "CSK",
        fullName: "Chennai Super Kings",
        primaryColor: "#FBD604",
        secondaryColor: "#07346C",
        captain: "Mahendra Singh Dhoni(Thala)",
        img:"https://imgs.search.brave.com/6vc3xxEV4EZJn1zn4ToIePcqO8sXbQN00yQOnMXzzKI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC9k/ODljMGMxNzYxMTIz/ODEuWTNKdmNDd3hN/RGd3TERnME5Dd3dM/REkxTVEucG5n"
    },

    {
        name: "DC",
        fullName: "Delhi Capitals",
        primaryColor: "#C22835",
        secondaryColor: "#114099",
        captain: "Kl Rahul",
        img:"https://imgs.search.brave.com/xCuDYqIJaxL9C9ZIrJrBftChZY6K11RgnOH5awVGJ2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtd2VicC5raGVs/bm93LmNvbS9kNzI5/M2RlMmZhOTNiMjk1/MjhkYTIxNDI1M2Yx/ZDhkMC9uZXdzL3Vw/bG9hZHMvMjAyNS8w/NC9LTC1SYWh1bC1E/ZWxoaS1DYXBpdGFs/cy1JUEwtMjAyNS0x/MjgweDgwNS5qcGcu/d2VicA"
    },

    {
        name: "SRH",
        fullName: "Sun Risers Hyderabad",
        primaryColor: "Orange",
        secondaryColor: "Black",
        captain: "Pat Cummins",
        img:"https://imgs.search.brave.com/IrBNYEZx5mvmK-CNH9YeBvWD3F62b0s7FG1ehAydlc4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbmds/aXNoLmNkbi56ZWVu/ZXdzLmNvbS9zaXRl/cy9kZWZhdWx0L2Zp/bGVzLzIwMjUvMDMv/MjEvMTcwNTc0MS1w/YXQtY3VtbWlucy1z/cmgtcnMtMTgtY3Iu/anBnP2ltPUZpdEFu/ZEZpbGw9KDgwMCw2/MDAp"
    },

]
btn.addEventListener('click', ()=>
{
    let a = Math.floor(Math.random()*arr.length);
    box.style.backgroundColor= arr[a].secondaryColor;
    main.style.backgroundColor= arr[a].primaryColor;
    aname.innerHTML= arr[a].name;
    afullName.innerHTML= arr[a].fullName;
    acaptain.innerHTML= arr[a].captain;
    img.setAttribute("src",arr[a].img);
    
})