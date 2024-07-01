document.addEventListener('DOMContentLoaded', (event) => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');
    const windChillElement = document.getElementById('windChill');

    // Function to calculate wind chill
    function calculateWindChill(temperature, windSpeed) {
        if (temperature && windSpeed) {
            const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16)
                            + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return Math.round(windChill * 10) / 10; // Round to one decimal place
        }
        return null;
    }

    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString();
    lastModifiedElement.textContent = formattedDate;

    // Example values for temperature and wind speed (replace with actual data if available)
    const temperature = 15; // Example temperature in Celsius
    const windSpeed = 5; // Example wind speed in km/h

    // Calculate wind chill and display
    const windChill = calculateWindChill(temperature, windSpeed);
    if (windChill !== null) {
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
});
