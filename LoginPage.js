// JavaScript for toggling between login and register forms
document.addEventListener("DOMContentLoaded", () => {
    const loginPopupBtn = document.getElementById("login-popup-btn");
    const closeBtn = document.getElementById("close-btn");
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const loginForm = document.querySelector(".form-box.login");
    const registerForm = document.querySelector(".form-box.register");

    // Show the login form popup
    loginPopupBtn.addEventListener("click", () => {
        wrapper.classList.add("active-popup");
    });

    // Close the form popup
    closeBtn.addEventListener("click", () => {
        wrapper.classList.remove("active-popup");
    });

    // Switch to register form
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add("active");
        loginForm.style.transform = "translateX(-400px)";
        registerForm.style.transform = "translateX(0)";
    });

    // Switch to login form
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove("active");
        loginForm.style.transform = "translateX(0)";
        registerForm.style.transform = "translateX(400px)";
    });

    // Handle form submissions
    document.querySelector("#login-button").addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.querySelector(".login input[type='email']").value;
        const password = document.querySelector(".login input[type='password']").value;
        console.log("Login Form Submitted");
        console.log("Email:", email);
        console.log("Password:", password);
    });

    document.querySelector("#register-button").addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.querySelector(".register input[type='text']").value;
        const email = document.querySelector(".register input[type='email']").value;
        const password = document.querySelector(".register input[type='password']").value;
        console.log("Registration Form Submitted");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
    });
});
