document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    let isValid = true;

    let email = document.querySelector("input[placeholder='Email Address']").value.trim();
    let password = document.querySelector("input[placeholder='Password']").value.trim();
    let checkBox = document.getElementById("myCheck");

    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    if (!validateEmail(email)) {
      showError("Invalid email format", "input[placeholder='Email Address']");
      isValid = false;
    }
    if (password.length < 6) {
      showError("Password must be at least 6 characters long", "input[placeholder='Password']");
      isValid = false;
    }
    if (!checkBox.checked) {
      alert("You must agree to the terms.");
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault();
    }
  });

  function showError(message, selector) {
    let inputField = document.querySelector(selector);
    let errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorDiv.classList.add("error");
    errorDiv.style.color = "red";
    inputField.parentNode.appendChild(errorDiv);
  }

  function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
