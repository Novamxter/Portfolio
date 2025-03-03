import { setSkillProgress, setToolProgress } from "./P-progress.js";
import { setReadMore, handleSticky, handleHamMenu, highlightActiveMenu, setInitialClipPath, setLinksTopValue } from "./Functions.js"

const hamButton = document.querySelector(".hamburger");
const navUl = document.querySelector(".ham-item-ul");
const navbar = document.querySelector("nav");
const addLinks = document.querySelector(".additional-links");
const checkbox = document.querySelector(".toggleCheckbox");
const dayBackgroundMain = document.querySelector(".animateMainBg");
const hamItem = document.querySelectorAll(".ham-item");

document.addEventListener('DOMContentLoaded', () => {
  setSkillProgress();
  setToolProgress()
  setReadMore();
  handleSticky();
  handleHamMenu();
  highlightActiveMenu();
  setInitialClipPath();
  setLinksTopValue();
  window.addEventListener("resize", () => {
    setLinksTopValue();
  });
})

checkbox.addEventListener("click", () => {
  const rect = checkbox.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  navbar.classList.toggle("animateNavBg");
  //dayBackgroundNav.classList.toggle('dayBgNav')
  if (!dayBackgroundMain.classList.contains("dayBgMain")) {
    dayBackgroundMain.style.clipPath = `circle(200% at ${centerX}px ${centerY}px)`;
    dayBackgroundMain.classList.add("dayBgMain");
  } else {
    dayBackgroundMain.style.clipPath = `circle(0% at ${centerX}px ${centerY}px)`;
    dayBackgroundMain.classList.remove("dayBgMain");
  }
  document.documentElement.classList.toggle("day-theme");
});





/*document.querySelectorAll('.nav-link').forEach(n=>{
  n.addEventListener('click',()=>{
    ham.classList.remove('active')
    nav.classList.remove('active')
  })
})*/
