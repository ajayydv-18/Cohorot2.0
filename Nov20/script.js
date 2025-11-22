let arr = [
  {
    name: "Dogs",
    image:
      "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Spider",
    image:
      "https://images.unsplash.com/photo-1598356918644-7a5af992f40c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVyfGVufDB8fDB8fHww",
  },
  {
    name: "Spider Man",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    name: "Iron Man",
    image:
      "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Thor",
    image:
      "https://media.istockphoto.com/id/1147508542/photo/man-in-cosplaying-thor-isolated-on-white-studio-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=PhNPgDsHPGuktZOwTnmyggy867SKyrFsNmRa1-lT6j4=",
  },
  {
    name: "Hammer",
    image:
      "https://images.unsplash.com/photo-1579445710183-f9a816f5da05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Black Widow",
    image:
      "https://plus.unsplash.com/premium_photo-1695725168393-8db11a3469c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwd2lkb3d8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "",
    image:
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "",
    image:
      "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "",
    image:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "",
    image:
      "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
let section = document.querySelector("section");
let image = document.querySelector("img");

function AddImage() {
  let clutter = "";
  arr.forEach(function (dets, idx)
   {
    clutter += `<div class="imageCard">
              <img src="${dets.image}" alt="">
              <div class="overlay">
                <div class="top">
                  <button>Save</button>
                </div>
                <div class="bottom">
                  <div class="bottomLeft">
                    <h3><i class="ri-arrow-right-up-line"></i> Click Here</h3>
                  </div>
                  <div class="bottomRight">
                    <i class="ri-upload-2-line"></i>
                    <i class="ri-arrow-right-up-line"></i>
                  </div>
                </div>
              </div>
            </div>`;
   });
  section.innerHTML = clutter;
}
AddImage();

