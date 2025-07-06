// Placeholder for future interactivity
console.log("Portfolio Loaded");
  function showThankYou() {
    // Delay showing success message
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'block';
    }, 2000);
    return true; // allow form to submit
  }
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formsubmit.co/ajax/asmithabanu1804@gmail.com", {
    method: "POST",
    body: data
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("formSuccess").style.display = "block";
      form.reset();
    })
    .catch(error => {
      console.error("Form submission error:", error);
      alert("❌ Failed to send message. Please try again.");
    });
});

