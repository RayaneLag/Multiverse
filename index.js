window.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".section1", { opacity: 1, duration: 1, delay: 1 });
});

const img = document.getElementById("img");
const vid = document.getElementById("vid");
const overlay = document.getElementById("overlay");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("mybtn");
const myh1 = document.getElementById("myh1");
const myP = document.getElementById("myP");

function playVideo() {
  vid.style.display = "block";
  vid.play();
  vid.muted = false;
  overlay.style.zIndex = 1;
  gsap.fromTo(
    vid,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: "power4.out" }
  );
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  vid.pause();
  vid.currentTime = 0;
  vid.style.display = "none";
  overlay.style.zIndex = -1;
  document.body.style.overflow = "auto";
}

img.addEventListener("click", function () {
  if (vid.style.display === "block") {
    closeVideo();
  } else {
    playVideo();
  }
});

vid.addEventListener("ended", function () {
  closeVideo();
});

let clickedYes = false;
let clickedNo = false;

yesButton.addEventListener("click", function () {
  if (!clickedYes) {
    gsap.to(myh1, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      onComplete: function () {
        myh1.textContent = "Welcome to the Spider Society!";
        gsap.to(myh1, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        });
      },
    });
    img.classList.add("img-clicked");
    clickedYes = true;
  } else {
    gsap.to(myh1, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      onComplete: function () {
        myh1.textContent =
          "Should We Believe in the Existence of the Multiverse?";
        gsap.to(myh1, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        });
      },
    });
    img.classList.remove("img-clicked");
    clickedYes = false;
  }
});

noButton.addEventListener("click", function () {
  if (!clickedNo) {
    gsap.to(myh1, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      onComplete: function () {
        myh1.textContent = "Dommage!";
        gsap.to(myh1, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        });
      },
    });
    clickedNo = true;
  } else {
    gsap.to(myh1, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      onComplete: function () {
        myh1.textContent =
          "Should We Believe in the Existence of the Multiverse?";
        gsap.to(myh1, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        });
      },
    });
    clickedNo = false;
  }
});

noButton.addEventListener("mouseenter", function () {
  if (!clickedNo) {
    gsap.to(noButton, {
      x: Math.random() * 800 - 400,
      y: Math.random() * 800 - 400,
    });
  }
});

function blink() {
  gsap.to(myP, {
    opacity: 0,
    duration: 0.5,
    ease: "power1.inOut",
    onComplete: function () {
      gsap.to(myP, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: blink,
      });
    },
  });
}

blink();
