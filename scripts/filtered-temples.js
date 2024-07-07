// Define an array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];

document.addEventListener('DOMContentLoaded', () => {
    const templeContainer = document.getElementById('temple-container');
    const year = document.getElementById('year');
    const lastModified = document.getElementById('last-modified');
    
    // Set the current year for the copyright notice
    year.textContent = new Date().getFullYear();
    // Set the last modified date for the document
    lastModified.textContent = document.lastModified;

    // Function to create a temple card HTML structure based on temple object data
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        
        templeContainer.appendChild(card);
    }

    // Function to display temples based on a filtering function
    function displayTemples(filterFn) {
        templeContainer.innerHTML = ''; // Clear previous content
        const filteredTemples = filterFn ? temples.filter(filterFn) : temples; // Apply filter if provided
        filteredTemples.forEach(createTempleCard); // Create temple cards for filtered temples
    }

    // Object containing filter functions for different menu options
    const filters = {
        home: null, // Display all temples
        old: temple => new Date(temple.dedicated).getFullYear() < 1900, // Filter temples dedicated before 1900
        new: temple => new Date(temple.dedicated).getFullYear() > 2000, // Filter temples dedicated after 2000
        large: temple => temple.area > 90000, // Filter temples with area greater than 90000 sq ft
        small: temple => temple.area < 10000, // Filter temples with area less than 10000 sq ft
    };

    // Event listeners for navigation links to apply filters
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const filterKey = event.target.id;
            displayTemples(filters[filterKey]); // Display temples based on selected filter
        });
    });

    displayTemples(); // Initially display all temples
});
