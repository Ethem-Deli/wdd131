document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const windChillSpan = document.getElementById('windChill');

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Calculate and set wind chill
    const temperature = 10; // °C
    const windSpeed = 5; // km/h
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = windChill !== "N/A" ? `${windChill.toFixed(1)}°C` : "N/A";
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }
    return "N/A";
}
