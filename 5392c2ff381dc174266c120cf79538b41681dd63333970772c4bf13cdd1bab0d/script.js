document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage'); // Add an element in HTML for this

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: form.elements['name'].value,
            email: form.elements['email'].value,
            interest: form.elements['interest'].value
        };

        console.log('Form Data:', formData);
        confirmationMessage.textContent = 'Thank you for registering!'; // Display confirmation message
    });
});
