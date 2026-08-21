// Prosper Car Hire - website interactions

const whatsappNumber = "260774824415";

function createWhatsAppLink(vehicle) {
  const message = `Hello Prosper Car Hire, I'm interested in hiring the ${vehicle}. Could you please let me know if it is available and provide the rental rate?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Add vehicle-specific WhatsApp links
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const vehicle = link.dataset.car;
  link.href = createWhatsAppLink(vehicle);
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
