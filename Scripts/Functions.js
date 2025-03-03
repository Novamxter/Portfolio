
function setInitialClipPath(){
    const rect=checkbox.getBoundingClientRect()
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    dayBackgroundMain.style.clipPath = `circles(0% at ${centerX}px ${centerY}px)`;
}
function setLinksTopValue() {
    const height = navUl.offsetHeight;
    addLinks.style.setProperty("--menu-height", `${height + 30}px`);
}
function handleSticky() {
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
function handleHamMenu() {
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
function handleActiveClass() {
    hamButton.classList.toggle("active");
    navUl.classList.toggle("active");
    hamItem.forEach(item => item.classList.toggle("item-zoom"));
    addLinks.classList.toggle("active-add");
}
function highlightActiveMenu() {
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