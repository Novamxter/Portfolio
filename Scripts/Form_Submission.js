const successButton = document.querySelector('.success-alert-ok-button')
const failButton = document.querySelector('.fail-alert-ok-button')
document.getElementById("contactForm").addEventListener("submit", async function(event){
    event.preventDefault(); 
    // Prevent default form submission
    let formData = new FormData(this);
    let response = await fetch(this.action, {
        method: this.method,
        body: formData
    });

    let result = await response.json();

    if (result.success) {
      //alert("success")
      document.querySelector('.form-alert').style.display = "flex"
      document.querySelector('.form-success-alert').style.display = "flex";
      console.log("success")
      this.reset(); // Reset form fields after submission
    }else{
      //alert("Something went wrong. Please try again!");
      document.querySelector('.form-alert').style.display = "flex"
      document.querySelector('.form-fail-alert').style.display = "flex";
      this.reset();
    }
});
document.addEventListener('DOMContentLoaded',()=>{
  handleOkButton();
});

function handleSendButton(){
  
}
function startSendAnimation(){
  
}
function stopSendAnimation(){
  
}
function handleOkButton(){
  if(successButton){
    successButton.addEventListener('click',()=>{
      document.querySelector('.form-alert').style.display = "none"
      document.querySelector('.form-success-alert').style.display = "none";
    })
  }
  if(failButton){
    failButton.addEventListener('click',()=>{
      document.querySelector('.form-alert').style.display = "none"
      document.querySelector('.form-fail-alert').style.display = "none";
    })
  }
}

