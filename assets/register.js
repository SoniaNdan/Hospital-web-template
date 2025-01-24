const RegisterForm = document.querySelector(".logInForm");
logInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Getting Values from the form
    const nameInput = logInForm.name.value;
    const lNameInput = logInForm.Lname.value
    const emailInput = logInForm.email.value;
    const passwordInput = logInForm.password.value;

    //Getting Error Divs
    const nameError = document.querySelector(".nameError");
    const lnameError = document.querySelector(".lnameError");
    const emailError = document.querySelector(".emailError");
    const passwordError = document.querySelector(".passwordError");

    // Setting Error Divs To Empty
    nameError.innerHTML = "";
    lnameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";


    // Constructing Regex Patterns 
    const namePattern = /^[a-zA-Z\s'-]+[a-zA-Z0-9\s']*$/;
    const lNamePattern = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/;
    const emailPatttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!namePattern.test(nameInput)) {
        nameError.innerHTML = "Please enter a valid name";
        throw Error('Terminate');
    }

    if (!lNamePattern.test(lNameInput)) {
        lnameError.innerHTML = "Please enter a valid name";
        throw Error('Terminate');
    }

    if (!emailPatttern.test(emailInput)) {
        emailError.innerHTML = "Please enter a valid email";
        throw Error('Terminate');
    }

    if (!passwordPattern.test(passwordInput)) {
        passwordError.innerHTML = "Password must contain 8 characters, one uppercase letter,lowercase, a number,and a special character";
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
