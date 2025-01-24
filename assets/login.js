const logInForm = document.getElementById("logInForm");
logInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Getting Values from the form
    const emailInput = logInForm.email.value;
    const passwordInput = logInForm.password.value;

    //Getting Error Divs
    const emailError = document.querySelector(".emailError");
    const passwordError = document.querySelector(".passwordError");

    // Setting Error Divs To Empty
    emailError.innerHTML = "";
    passwordError.innerHTML = "";


    // Constructing Regex Patterns
    const emailPatttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailPatttern.test(emailInput)) {
        emailError.innerHTML = "Please enter a valid email";
        throw Error('Terminate');
    }

    if (!passwordPattern.test(passwordInput)) {
        passwordError.innerHTML = "Password must contain 8 characters and atleast one uppercase letter, lowercase, a number,and a special character";
        throw Error('Terminate');
    }
})

// Password Eye Icon
function togglePasswordVisibility() {
    const passwordField = document.getElementById("passwordField");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}