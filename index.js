var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})


document.getElementById("more-btn").addEventListener("click", function() {
    var extraInfo = document.getElementById("extra-info");
    if (extraInfo.classList.contains("hidden")) {
        extraInfo.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        extraInfo.classList.add("hidden");
        this.textContent = "Read More";
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // You can replace this alert with an AJAX request to send form data to your backend.
    alert("Thank you for your message! I will get back to you soon.");
    
    // Clear the form
    document.getElementById("contact-form").reset();
});



// Add event listener for scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    // Check if the page has been scrolled more than 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add class for background and text color change
    } else {
        header.classList.remove('scrolled'); // Remove class to reset to default
    }
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

