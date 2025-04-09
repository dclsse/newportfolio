
    const greetingClock = document.getElementById("greeting-clock");

    const updateClockAndGreeting = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        let greeting = "";
        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        greetingClock.textContent = `${greeting} It's ${timeString}.`;
    };

    // Call it once initially
    updateClockAndGreeting();

    // Update the greeting and clock every minute
    setInterval(updateClockAndGreeting, 60000); // Refresh every 60 seconds

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
            
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
   

   // Contact Form Popup Toggle
const toggle = document.getElementById('contactToggle');
const popup = document.getElementById('contactFormPopup');
const closeBtn = document.getElementById('closeForm');

// Show popup when toggle button is clicked
toggle.addEventListener('click', () => {
  popup.style.display = 'flex';  // Show popup
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';  // Hide popup
});

// Close popup if user clicks outside of the form
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';  // Hide popup
  }
});

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Send form data using EmailJS
  emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();  // Reset the form after successful submission
    }, (error) => {
      alert("Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
    });
});




