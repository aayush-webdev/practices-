const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const resultMessage = document.querySelector(".resultMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Invalid Email";
        emailError.style.color = "red";
        isValid = false;
    }

    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = "Invalid Password";
        passwordError.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        emailError.textContent = "Email is correct";
        emailError.style.color = "green";

        passwordError.textContent = "Password is correct";
        passwordError.style.color = "green";
        resultMessage.textContent = "Login Successful"
    }
});