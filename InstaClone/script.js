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
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Luna Carter",
    profilePic: "",
    post: "",
    isFollowed: true
  },
  {
    userName: "Mason Rivera",
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Elena Brooks",
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Leo Mitchell",
    profilePic: "",
    post: "",
    isFollowed: true
  },
  {
    userName: "Ariana Flores",
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Xavier Hunt",
    profilePic: "",
    post: "",
    isFollowed: true
  },
  {
    userName: "Nova Bennett",
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Finn Parker",
    profilePic: "",
    post: "",
    isFollowed: false
  },
  {
    userName: "Scarlett Hayes",
    profilePic: "",
    post: "",
    isFollowed: true
  }
];

function post()
{
  let clutter = "";
  users.forEach(() =>
  {
    clutter += 'aaj' ;
  }
  )
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
