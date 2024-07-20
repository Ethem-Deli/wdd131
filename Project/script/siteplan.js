// scripts.js

// Update the year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Update the last modified date dynamically
document.getElementById("lastModified").textContent = document.lastModified;

// Implement FAQ toggle functionality
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const faqContent = item.nextElementSibling;
        faqContent.style.display = faqContent.style.display === "none" ? "block" : "none";
    });
});

// Live Chat button functionality
document.getElementById("liveChatButton").addEventListener("click", () => {
    alert("Live chat is currently not available. Please check back during our working hours.");
});
