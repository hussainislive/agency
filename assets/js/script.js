const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true, // Enable smooth scrolling on mobile devices
    lerp: 0.1
});


let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  document.getElementById("install-btn").style.display = "block";
});

document.getElementById("install-btn").addEventListener("click", () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User installed the app");
    } else {
      console.log("User dismissed the install prompt");
    }
    deferredPrompt = null;
  });
});
