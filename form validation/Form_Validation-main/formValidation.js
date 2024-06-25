function validateForm(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementById('errorMessages');

    // Clear previous error messages
    errorMessages.innerHTML = "";

    // Validation criteria
    if (fullName.length < 5) {
        showError("Full Name must be at least 5 characters");
    }

    if (!email.includes('@')) {
        showError("Enter a valid Email ID");
    }

    if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        showError("Enter a valid 10-digit Phone Number");
    }

    if (password === 'password' || password === fullName || password.length < 8) {
        showError("Password must be at least 8 characters and not be 'password'");
    }

    if (password !== confirmPassword) {
        showError("Password and Confirm Password do not match");
    }

    // Additional conditions can be added as needed

    // If no errors, submit the form
    if (errorMessages.innerHTML === "") {
        alert("Form submitted successfully!");
        // You can add further actions like sending data to a server here
    }
}

function showError(message) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML += `<p>${message}</p>`;
}
