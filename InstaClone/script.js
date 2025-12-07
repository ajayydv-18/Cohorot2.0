const storyArray = [
  {
    name: "Aarav Mehta",
    profile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: true,
  },
  {
    name: "Nisha Rao",
    profile:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: false,
  },
  {
    name: "Karan Singh",
    profile:
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: true,
  },
  {
    name: "Maya Kapoor",
    profile:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: false,
  },
  {
    name: "Rohan Verma",
    profile:
      "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: true,
  },
  {
    name: "Priya Nair",
    profile:
      "https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: false,
  },
  {
    name: "Sahil Gupta",
    profile:
      "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: true,
  },
  {
    name: "Isha Patel",
    profile:
      "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: false,
  },
  {
    name: "Vikram Joshi",
    profile:
      "https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: true,
  },
  {
    name: "Anita Sharma",
    profile:
      "https://plus.unsplash.com/premium_photo-1682095659073-e9150c144092?w=500&auto=format&fit=crop&q=60",
    storyClick:
      "https://plus.unsplash.com/premium_photo-1682095659073-e9150c144092?w=500&auto=format&fit=crop&q=60",
    isCloseFriend: false,
  },
];
const users = [
  {
    userName: "Zayden Cole",
    profilePic: "https://images.unsplash.com/photo-1552954277-0c45bd503b54?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1552954277-0c45bd503b54?w=500&auto=format&fit=crop&q=60",
    likes: 124,
    comments: 18,
    isFollowed: false,
    postDescription: "New day, new energy ✨🔥"
  },
  {
    userName: "Luna Carter",
    profilePic: "https://images.unsplash.com/photo-1711894904251-78b075a124f4?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1711894904251-78b075a124f4?w=500&auto=format&fit=crop&q=60",
    likes: 532,
    comments: 44,
    isFollowed: true,
    postDescription: "Soft vibes & sunshine moments 🌸🌞💫"
  },
  {
    userName: "Mason Rivera",
    profilePic: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1575439462433-8e1969065df7?w=500&auto=format&fit=crop&q=60",
    likes: 278,
    comments: 12,
    isFollowed: false,
    postDescription: "Finding peace in little things 🌿✨"
  },
  {
    userName: "Elena Brooks",
    profilePic: "https://plus.unsplash.com/premium_photo-1681234557177-cdaa392ede04?w=500&auto=format&fit=crop&q=60",
    post: "https://plus.unsplash.com/premium_photo-1681234557177-cdaa392ede04?w=500&auto=format&fit=crop&q=60",
    likes: 804,
    comments: 67,
    isFollowed: false,
    postDescription: "Coffee and confidence ☕💁‍♀️✨"
  },
  {
    userName: "Leo Mitchell",
    profilePic: "https://plus.unsplash.com/premium_photo-1683121850784-a6bdf87c6150?w=500&auto=format&fit=crop&q=60",
    post: "https://plus.unsplash.com/premium_photo-1683121850784-a6bdf87c6150?w=500&auto=format&fit=crop&q=60",
    likes: 351,
    comments: 22,
    isFollowed: true,
    postDescription: "Adventure begins where comfort ends 🌍🔥"
  },
  {
    userName: "Ariana Flores",
    profilePic: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1620523162656-4f968dca355a?w=500&auto=format&fit=crop&q=60",
    likes: 690,
    comments: 39,
    isFollowed: false,
    postDescription: "Brighter days ahead 😊🌈✨"
  },
  {
    userName: "Xavier Hunt",
    profilePic: "https://images.unsplash.com/photo-1711894904366-4f6f7e8affea?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1711894904366-4f6f7e8affea?w=500&auto=format&fit=crop&q=60",
    likes: 412,
    comments: 15,
    isFollowed: true,
    postDescription: "Focused. Driven. unstoppable 💪🚀"
  },
  {
    userName: "Nova Bennett",
    profilePic: "https://images.unsplash.com/photo-1564038079594-99ba184fd036?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1564038079594-99ba184fd036?w=500&auto=format&fit=crop&q=60",
    likes: 233,
    comments: 9,
    isFollowed: false,
    postDescription: "Moonlit thoughts and peaceful nights 🌙💫"
  },
  {
    userName: "Finn Parker",
    profilePic: "https://images.unsplash.com/photo-1541257710737-06d667133a53?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1541257710737-06d667133a53?w=500&auto=format&fit=crop&q=60",
    likes: 987,
    comments: 81,
    isFollowed: false,
    postDescription: "Making memories worth keeping 📸❤️"
  },
  {
    userName: "Scarlett Hayes",
    profilePic: "https://images.unsplash.com/photo-1628196237219-9d0ab2abeee1?w=500&auto=format&fit=crop&q=60",
    post: "https://images.unsplash.com/photo-1628196237219-9d0ab2abeee1?w=500&auto=format&fit=crop&q=60",
    likes: 729,
    comments: 56,
    isFollowed: true,
    postDescription: "Dancing through the chaos 🎶💃🔥"
  }
];



let card = document.querySelector('.card');
function post() {
  let clutter = "";
  users.forEach((elem , idx) => {
    clutter += `<div class="cardTop">
            <div class="topLeft">
              <div class="cardTopImg">
                <img
                  src="${elem.profilePic}"
                  alt=""
                />
              </div>
              <h5 class="userName">${elem.userName} .</h5>
              <h5 class="time">10h</h5>
            </div>
            <div class="topRight">
              <h5>${elem.isFollowed === true? "Follow":""}</h5>
              <i class="ri-more-fill"></i>
            </div>
          </div>
          <div class="cardMid">
            <img src="${elem.post}" alt="">
          </div>
          <div class="cardBottom">
            <div class="cardBottomTop">
              <div class="bottomLeft">
                <div class="like"><i class="ri-heart-fill"></i></div>
                <div class="comment"><i class="ri-chat-3-line"></i></div>
                <div class="share"><i class="ri-share-forward-line"></i></div>
              </div>
              <div class="bottomRight">
                <div class="save">
                  <i class="ri-heart-add-line"></i>
                </div>
              </div>
            </div>
            <div class="cradBottomMid">
              <h3 class="likes">${elem.likes} likes</h3>
            </div>
            <div class="cardBottomBottom">
              <p>${elem.userName}<span>.....</span> ${elem.postDescription} </p>
              <p class="para">View  All  ${elem.comments}  Comments</p>
              <p class="para"> Add  Comments ....</p>
            </div>
          </div>`;
  });
  card.innerHTML = clutter;

  let userPost = document.querySelectorAll('.cardMid')
  let like = document.querySelectorAll('.like');
  console.log(like);
  let count = 0;
  
  userPost.forEach((elem , idx)=>
  {    
    elem.addEventListener('dblclick' , ()=>{      
    if(count === 1)
    {
      count = 0;
      like[idx].style.background= "white";
      like[idx].style.backgroundClip = "text";
      like[idx].style.color = "transparent";
    }
    else
    {     
      like[idx].style.background= "red";
      like[idx].style.backgroundClip = "text";
      like[idx].style.color = "transparent";
      count++;
    }
    })
  })
}

function story() {
  let stories = document.querySelector(".stories");
  let overlay = document.querySelector(".overlay");
  let clutter = "";
  storyArray.forEach((elem, idx) => {
    clutter += `<div class="storyWrapper">
            <div class="story">
            <img src="${elem.profile}" alt="">
          </div>
          <div class="text">
            <p>${elem.name}</p>
          </div> 
        </div> `;
  });
  //adding all story to stories

  stories.innerHTML = clutter;

  //overlay addition

  document.querySelectorAll(".story").forEach((elem, idx) => {
    console.log(elem);
    if (storyArray[idx].isCloseFriend === true) {
      elem.style.background = "transparent";
      elem.style.backgroundColor = "green";
    }

    elem.addEventListener("click", () => {
      let moving = 0;
      let interval;
      elem.style.background = "grey";
      overlay.style.display = "block";
      overlay.innerHTML = `
   <div class="outerDiv">
     <div class="innerDiv"></div>
   </div>
   <img src="${storyArray[idx].storyClick}" alt="">`;

      //overlay ke upar lining wala effect dena
      let n = 50;
      moving = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        document.querySelector(".innerDiv").style.width = `${moving++}%`;
        if(moving > 100) clearInterval(interval);
      }, n);
      //overlay ko defualt timer dene ke liye

      let timeout = setTimeout(() => {
        overlay.style.display = "none";
      }, n * 102);

      //overlay ko cick par remove krne ke liye
      overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        clearInterval(interval);
        moving = 0;
        clearTimeout(timeout);
      });
    });
  });
}
story();
post();
