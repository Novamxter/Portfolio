
const hamButton = document.querySelector(".hamburger");
const navUl = document.querySelector(".ham-item-ul");
const navbar = document.querySelector("nav");
const addLinks = document.querySelector(".additional-links");
const checkbox = document.querySelector(".toggleCheckbox");
const dayBackgroundMain = document.querySelector(".animateMainBg");
const hamItem = document.querySelectorAll(".ham-item");

export function setInitialClipPath(){
    const rect=checkbox.getBoundingClientRect()
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    dayBackgroundMain.style.clipPath = `circles(0% at ${centerX}px ${centerY}px)`;
}
export function setReadMore() {
    const boxes = document.querySelectorAll(".service-box");
    boxes.forEach(box => {
        const btn = box.querySelector(".read-more-btn");
        const serviceBox = box.querySelector(`p`);
        btn.addEventListener("click", () => {
            if (
                serviceBox.style.maxHeight === "var(--service-height)" ||
                !serviceBox.style.maxHeight
            ) {
                serviceBox.style.maxHeight = serviceBox.scrollHeight + "px";
                btn.textContent = "read less";
                serviceBox.style.opacity = "1";
            } else {
                serviceBox.style.maxHeight = "var(--service-height)";
                serviceBox.style.opacity = "0.7";
                btn.textContent = "...read More";
            }
        });
    });
}
export function setLinksTopValue() {
    const height = navUl.offsetHeight;
    addLinks.style.setProperty("--menu-height", `${height + 30}px`);
}
export function handleSticky() {
    const stickyHeadings = document.querySelectorAll(".section-title");
    stickyHeadings.forEach(stickyHeading => {
        window.addEventListener("scroll", () => {
            const rect = stickyHeading.getBoundingClientRect();
            if (rect.top === 45) {
                stickyHeading.classList.add("stuck");
            } else {
                stickyHeading.classList.remove("stuck");
            }
        });
    });
}
export function handleHamMenu() {
    hamButton.addEventListener("click", () => {
        handleActiveClass();
    });
    hamItem.forEach(item => {
        item.addEventListener("click", () => {
            handleActiveClass();
        });
    });
    addLinks.querySelectorAll("div").forEach(link => {
        link.addEventListener("click", () => {
            handleActiveClass();
        });
    });
}
export function handleActiveClass() {
    hamButton.classList.toggle("active");
    navUl.classList.toggle("active");
    hamItem.forEach(item => item.classList.toggle("item-zoom"));
    addLinks.classList.toggle("active-add");
}
export function highlightActiveMenu() {
    document
        .querySelector(".ham-item:nth-child(1)")
        .classList.add("active-ham-link");
    hamItem.forEach(item =>
        item.addEventListener("click", () => {
            hamItem.forEach(item => item.classList.remove("active-ham-link"));
            item.classList.toggle("active-ham-link");
        })
    );
    //for tracking current section
    document.addEventListener("DOMContentLoaded", () => {
        const main = document.querySelector("main");
        const sections = main.querySelectorAll(":scope > section");
        const navLinks = document.querySelectorAll("nav .ham-item-ul .ham-item a");
        const changeActiveLink = () => {
            let currentSection = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop; //section's height value at top
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute("id");
                }
            });
            navLinks.forEach(link => {
                link.parentElement.classList.remove("active-ham-link");
                if (link.getAttribute("href").includes(currentSection)) {
                    link.parentElement.classList.add("active-ham-link");
                }
            });
        };
        window.addEventListener("scroll", changeActiveLink);
    });
}