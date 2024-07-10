document.addEventListener('DOMContentLoaded', function () {
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById('lastModified').textContent = document.lastModified;

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

                localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));

                alert('Thank you for your message!');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
