document.addEventListener("DOMContentLoaded", function(){
  let animationContainers = document.querySelectorAll(".animation-container");
  
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        let container = entry.target;
        let animationFile = container.getAttribute("data-animation");
        if (!container.dataset.loaded) { // Load only once
          lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: true,
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

// let planeAnimation = lottie.loadAnimation({
//     container: document.getElementById('plane-animation'), // The div where the animation will render
//     renderer: 'svg', // Options: 'svg', 'canvas', 'html'
//     loop: true, // Set to false if you want it to play once
//     autoplay: true, // Set to false if you want to control when it plays
//     path: './assets/Json/loading_plane_Animation.json' // Path to your .json animation file
//   });
  
// let confirmAnimation = lottie.loadAnimation({
//     container: document.getElementById('confirm-animation'), // The div where the animation will render
//     renderer: 'svg', // Options: 'svg', 'canvas', 'html'
//     loop: false, // Set to false if you want it to play once
//     autoplay: true, // Set to false if you want to control when it plays
//     path: './assets/Json/confirm_Animation.json' // Path to your .json animation file
//   });