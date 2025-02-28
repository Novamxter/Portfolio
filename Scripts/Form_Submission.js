console.log("hello")
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
       document.querySelector('.form-success-alert').style.display = "flex";
        this.reset(); // Reset form fields after submission
    } else {
        alert("Something went wrong. Please try again!");
    }
});