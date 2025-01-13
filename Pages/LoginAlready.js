document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email && password) {
            // Get users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Find the user by email
            const user = users.find(user => user.email === email);

            if (user) {
                // Check if the password matches
                if (user.password === password) {
                    alert(`Bine ai revenit, ${user.fullName}!`);
                    // Redirect to the main page or dashboard after successful login
                    window.location.href = "../Main.html";
                } else {
                    alert("Parola incorectă!");
                }
            } else {
                alert("Email-ul nu este înregistrat!");
            }
        } else {
            alert("Te rog completează toate câmpurile.");
        }
    });
});
