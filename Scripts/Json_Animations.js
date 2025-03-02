let planeAnimation = lottie.loadAnimation({
    container: document.getElementById('plane-animation'), // The div where the animation will render
    renderer: 'svg', // Options: 'svg', 'canvas', 'html'
    loop: true, // Set to false if you want it to play once
    autoplay: true, // Set to false if you want to control when it plays
    path: './assets/Json/plane_Animation.json' // Path to your .json animation file
  });
  
  let confirmAnimation = lottie.loadAnimation({
    container: document.getElementById('confirm-animation'), // The div where the animation will render
    renderer: 'svg', // Options: 'svg', 'canvas', 'html'
    loop: true, // Set to false if you want it to play once
    autoplay: true, // Set to false if you want to control when it plays
    path: './assets/Json/confirm_Animation.json' // Path to your .json animation file
  });