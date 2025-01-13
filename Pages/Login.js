document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-up-form");

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Check if fields are not empty
        if (fullName && email && password) {
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if the email already exists
            const existingUserIndex = users.findIndex(user => user.email === email);

            if (existingUserIndex !== -1) {
                // If the email exists, update the user's name and password
                users[existingUserIndex].fullName = fullName;
                users[existingUserIndex].password = password;

                // Show success message for updating
                alert("Contul a fost actualizat cu succes!");
            } else {
                // If the email doesn't exist, create a new user
                const userData = {
                    fullName,
                    email,
                    password
                };
                users.push(userData);

                // Show success message for account creation
                alert("Contul a fost creat cu succes!");
            }

            // Save the updated users array to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Redirect to the login page
            window.location.href = "LoginAlready.html"; // Redirect to login page after account creation or update
        } else {
            alert("Te rog completează toate câmpurile.");
        }
    });
});
