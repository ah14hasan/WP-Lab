// Select the form and all input fields
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const formSuccess = document.getElementById("formSuccess");

// Function to display error messages
const showError = (input, message, errorId) => {
    const errorDiv = document.getElementById(errorId);
    errorDiv.innerText = message;
};

// Function to clear error messages
const clearError = errorId => {
    const errorDiv = document.getElementById(errorId);
    errorDiv.innerText = "";
};

// Function to validate fields
const validateForm = () => {
    let isValid = true;

    // Name validation (only letters, at least 3 characters)
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(nameInput.value.trim())) {
        showError(nameInput, "Name must contain only letters and be at least 3 characters long.", "nameError");
        isValid = false;
    } else {
        clearError("nameError");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email address.", "emailError");
        isValid = false;
    } else {
        clearError("emailError");
    }

    // Password validation (at least 8 characters, 1 letter, 1 number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordInput.value.trim())) {
        showError(passwordInput, "Password must be at least 8 characters with at least one letter and one number.", "passwordError");
        isValid = false;
    } else {
        clearError("passwordError");
    }

    // Confirm Password validation
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        showError(confirmPasswordInput, "Passwords do not match.", "confirmPasswordError");
        isValid = false;
    } else {
        clearError("confirmPasswordError");
    }

    // Phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, "Phone number must be 10 digits only.", "phoneError");
        isValid = false;
    } else {
        clearError("phoneError");
    }

    // Age validation (must be a positive number between 16 and 120)
    const ageRegex = /^(1[6-9]|[2-9][0-9]|1[01][0-9]|120)$/;
    if (!ageRegex.test(ageInput.value.trim())) {
        showError(ageInput, "Age must be a number between 16 and 120.", "ageError");
        isValid = false;
    } else {
        clearError("ageError");
    }

    return isValid;
};

// Form submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting
    formSuccess.innerText = ""; // Clear previous success message

    if (validateForm()) {
        formSuccess.innerText = "Form submitted successfully!";
        form.reset(); // Clear all inputs
    }
});
