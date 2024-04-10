console.log("docment loaded");
let leftBtn = document.querySelectorAll(".left-btn");
let rightBtn = document.querySelectorAll(".right-btn");
let slides = document.querySelectorAll(".carousel-img img");
let dotSlides = document.querySelectorAll(".dots");
console.log(leftBtn);
console.log(rightBtn);
console.log(slides);
console.log(dotSlides);
let currentIndex = 0;
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
};

const showDotSlide = (index) => {
  dotSlides.forEach((dot, i) => {
    if (i === index) {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "gray";
    }
  });
};

const nextSlide = () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  showDotSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
  showDotSlide(currentIndex);
};

rightBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    prevSlide();
  });
});
leftBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    nextSlide();
  });
});
showSlide(currentIndex);
showDotSlide(currentIndex);

//respn nav
let clicked = document.getElementById("respn-nav");
clicked.addEventListener("click", () => {
  let x = document.getElementById("rspn-item");
  if (x.className === "nav-rspn-item") {
    x.className += " responsive";
    x.style.display = "block";
  } else {
    x.className = "nav-rspn-item";
    x.style.display = "none";
  }
});
