// scripts/temples.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const date = new Date();
    yearSpan.textContent = date.getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
