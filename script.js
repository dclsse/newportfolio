
// INTERSECTION OBSERVER FOR ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// CONTACT FORM POPUP TOGGLE
const toggle = document.getElementById("contactToggle");
const popup = document.getElementById("contactFormPopup");
const closeBtn = document.getElementById("closeForm");

if (toggle && popup && closeBtn) {
  toggle.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}

// EMAILJS INITIALIZATION & FORM SUBMISSION
if (typeof EMAILJS_CONFIG !== "undefined") {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          this
        )
        .then(() => {
          alert("Message sent successfully!");
          this.reset();
        })
        .catch((error) => {
          alert("Failed to send. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
  }
}
