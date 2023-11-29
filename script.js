function scrollToForm() {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

function submitForm() {
    // Add your form submission logic here
    alert('Form submitted! We will get in touch with you soon.');
    document.getElementById('carForm').reset();
}
