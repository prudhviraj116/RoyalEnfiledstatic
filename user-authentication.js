document.addEventListener("DOMContentLoaded", function() {
    // Sample in-memory user store (for simplicity)
    const users = [
        { username: "admin", password: "admin123" },
        { username: "user1", password: "password1" },
        // Add more users dynamically as needed
    ];

    // Get the form element
    const form = document.querySelector("form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the username and password entered by the user
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the entered username and password match any stored user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // If credentials are correct, redirect to the main page
            window.location.href = "royalenfield.html";
        } else {
            // If credentials are incorrect, display an error message
            alert("Invalid username or password. Please try again.");
        }
    });

    // Function to simulate adding a new user dynamically
    function addUser(username, password) {
        users.push({ username, password });
    }

    // Example usage of addUser to add a new user dynamically
    // addUser("newuser", "newpassword");
});
