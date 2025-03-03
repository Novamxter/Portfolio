document.addEventListener("DOMContentLoaded", function(){
  let animationContainers = document.querySelectorAll(".animation-container");
  
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        let container = entry.target;
        console.log(container.getAttribute("data-loop-value"))
        let loopValue = container.getAttribute("data-loop-value")
        let animationFile = container.getAttribute("data-animation");
        if (!container.dataset.loaded) { // Load only once
          lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: loopValue==="true"?true:false,
            autoplay: true,
            path: `./assets/Json/${animationFile}.json`
          });
          container.dataset.loaded = "true"; // Mark as loaded
        }
        observer.unobserve(container); // Stop observing once loaded
      }
    });
  }, { threshold: 0.5 });
  animationContainers.forEach(container => observer.observe(container));
});

