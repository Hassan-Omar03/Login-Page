window.onload = function init() {
    // You can place any initialization logic here if needed
};

function validateForm(event) {
    // Prevent form from submitting initially
    event.preventDefault();

    // Get form elements
    const email = document.getElementById('entersweeps');
    const checkbox1 = document.getElementById('desc-1');
    const checkbox2 = document.getElementById('desc-2');
    const emailError = document.getElementById('email-error');

    // Simple email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    // Validate email
    if (!email.value || !emailPattern.test(email.value)) {
        email.classList.add('error'); // Add error class for styling invalid email
        emailError.style.display = 'block'; // Show the error message
        valid = false; // Mark form as invalid
    } else {
        email.classList.remove('error'); // Remove error class if valid
        emailError.style.display = 'none'; // Hide the error message
    }

    // Validate checkboxes
    if (!checkbox1.checked || !checkbox2.checked) {
        valid = false; // Mark form as invalid if checkboxes are not checked
    }

    // If valid, redirect to Page 2
    if (valid) {
        window.location.href = '../Page 2/index.html'; // Make sure this path is correct
    }
}

// Add event listener to the form to trigger validation
document.getElementById('landerform').addEventListener('submit', validateForm);
