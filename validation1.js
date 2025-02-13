document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
      let isValid = true;
  
      // Get input values
      let firstName = document.querySelector("input[placeholder='First Name']").value.trim();
      let lastName = document.querySelector("input[placeholder='Last Name']").value.trim();
      let email = document.querySelector("input[placeholder='Email Address']").value.trim();
      let password = document.querySelector("input[placeholder='Password']").value.trim();
      let confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value.trim();
      let address = document.getElementById("address").value.trim();
      let checkBox = document.getElementById("myCheck");
  
      // Clear previous error messages
      document.querySelectorAll(".error").forEach(e => e.textContent = "");
  
      // Validate first name and last name
      if (firstName === "") {
        showError("First Name is required", "input[placeholder='First Name']");
        isValid = false;
      }
      if (lastName === "") {
        showError("Last Name is required", "input[placeholder='Last Name']");
        isValid = false;
      }
  
      // Validate email
      if (!validateEmail(email)) {
        showError("Invalid email format", "input[placeholder='Email Address']");
        isValid = false;
      }
  
      // Validate password
      if (password.length < 6) {
        showError("Password must be at least 6 characters long", "input[placeholder='Password']");
        isValid = false;
      }
      if (password !== confirmPassword) {
        showError("Passwords do not match", "input[placeholder='Confirm Password']");
        isValid = false;
      }
  
      // Validate address
      if (address === "") {
        showError("Address is required", "#address");
        isValid = false;
      }
  
      // Validate checkbox
      if (!checkBox.checked) {
        alert("You must agree to the terms.");
        isValid = false;
      }
  
      // Prevent form submission if validation fails
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
  });document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
      let isValid = true;
  
      // Get input values
      let firstName = document.querySelector("input[placeholder='First Name']").value.trim();
      let lastName = document.querySelector("input[placeholder='Last Name']").value.trim();
      let email = document.querySelector("input[placeholder='Email Address']").value.trim();
      let password = document.querySelector("input[placeholder='Password']").value.trim();
      let confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value.trim();
      let address = document.getElementById("address").value.trim();
      let checkBox = document.getElementById("myCheck");
  
      // Clear previous error messages
      document.querySelectorAll(".error").forEach(e => e.textContent = "");
  
      // Validate first name and last name
      if (firstName === "") {
        showError("First Name is required", "input[placeholder='First Name']");
        isValid = false;
      }
      if (lastName === "") {
        showError("Last Name is required", "input[placeholder='Last Name']");
        isValid = false;
      }
  
      // Validate email
      if (!validateEmail(email)) {
        showError("Invalid email format", "input[placeholder='Email Address']");
        isValid = false;
      }
  
      // Validate password
      if (password.length < 6) {
        showError("Password must be at least 6 characters long", "input[placeholder='Password']");
        isValid = false;
      }
      if (password !== confirmPassword) {
        showError("Passwords do not match", "input[placeholder='Confirm Password']");
        isValid = false;
      }
  
      // Validate address
      if (address === "") {
        showError("Address is required", "#address");
        isValid = false;
      }
  
      // Validate checkbox
      if (!checkBox.checked) {
        alert("You must agree to the terms.");
        isValid = false;
      }
  
      // Prevent form submission if validation fails
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
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    let isValid = true;

    // Get input values
    let firstName = document.querySelector("input[placeholder='First Name']").value.trim();
    let lastName = document.querySelector("input[placeholder='Last Name']").value.trim();
    let email = document.querySelector("input[placeholder='Email Address']").value.trim();
    let password = document.querySelector("input[placeholder='Password']").value.trim();
    let confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value.trim();
    let address = document.getElementById("address").value.trim();
    let checkBox = document.getElementById("myCheck");

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Validate first name and last name
    if (firstName === "") {
      showError("First Name is required", "input[placeholder='First Name']");
      isValid = false;
    }
    if (lastName === "") {
      showError("Last Name is required", "input[placeholder='Last Name']");
      isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      showError("Invalid email format", "input[placeholder='Email Address']");
      isValid = false;
    }

    // Validate password
    if (password.length < 6) {
      showError("Password must be at least 6 characters long", "input[placeholder='Password']");
      isValid = false;
    }
    if (password !== confirmPassword) {
      showError("Passwords do not match", "input[placeholder='Confirm Password']");
      isValid = false;
    }

    // Validate address
    if (address === "") {
      showError("Address is required", "#address");
      isValid = false;
    }

    // Validate checkbox
    if (!checkBox.checked) {
      alert("You must agree to the terms.");
      isValid = false;
    }

    // Prevent form submission if validation fails
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
  
  