const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
const slider = document.getElementById("slider");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

const imageArray = [
  "https://freepngimg.com/thumb/car/11-2-car-picture.png",
  "./assets/pngegg (6).png",
  "./assets/newcar2-removebg-preview.png",
  "./assets/bus2-removebg-preview.png",
  "https://th.bing.com/th/id/R.f33cf38ca8ffd16e0d74c1c0b488e6fa?rik=fJRkDZtpLif1Tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcar-png--2000.png&ehk=NNUZMtBWVKsm0rdwbqInd9upaYDYo6ztYC62khvQebc%3d&risl=&pid=ImgRaw&r=0",
  // "https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png",
  // "https://th.bing.com/th/id/R.ceee8ccf05c1e458dac5fdd9dd0d71e7?rik=lXmrJwPS9dKcgg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-hd-of-car-audi-png-hd-png-image-2505.png&ehk=TYMNLgUAstCSxLa%2fHN50J51SKq%2f8AjyeynAFcUfEegg%3d&risl=1&pid=ImgRaw&r=0",
  // "https://th.bing.com/th/id/R.9052ad8da8f202ddc156c25f34d6fd1c?rik=nlkKLYI8fPWZ%2fg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Photo.png&ehk=3sUxHFuF6H3gz5sLgPZmnqhw1%2fVjAIi7yecdiiBu69c%3d&risl=&pid=ImgRaw&r=0",
  // Add more images as needed
];

let currentIndex = 0;

function showSlide(index) {
  const newPosition = -index * 100 + "%";
  slider.style.transform = "translateX(" + newPosition + ")";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

// Dynamically add images to the slider
imageArray.forEach((imageUrl) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "Slider Image";
  image.classList.add("image");

  slide.appendChild(image);
  slider.appendChild(slide);
});

// Show the initial slide
showSlide(currentIndex);



const scroller = document.querySelectorAll(".scroller-in h4");

scroller.forEach((item) => {
    item.addEventListener("mouseover", (idx)=> {
        console.log("hii");
        item.style.color="#123558";
        item.style.webkitTextStroke="#123558";
    })
    item.addEventListener("mouseout", (idx)=> {
        console.log("hii");
        item.style.color="transparent";
        item.style.webkitTextStroke="2px #123558";
    })
})





document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".js-testimonials-slider", {
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".js-testimonials-pagination",
        clickable: true,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
      },
    });
  });