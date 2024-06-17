document.addEventListener('DOMContentLoaded', (event) => {
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }

    const footer = document.querySelector('footer p:nth-child(2)');
    const now = new Date();
    footer.textContent = `Last Modification: ${formatDate(now)}`;
});
