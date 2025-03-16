document.addEventListener("DOMContentLoaded", function () {
    const loginScreen = document.getElementById("login-screen");
    const accountScreen = document.getElementById("account-screen");
    const hubSelection = document.getElementById("hub-selection");
    const successMessage = document.getElementById("success-message");
    const hubsContainer = document.getElementById("hubs");
    const helpPopup = document.getElementById("help-popup");

    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    document.getElementById("help-btn").addEventListener("click", () => {
        helpPopup.classList.toggle("hidden");
    });

    document.getElementById("close-help-btn").addEventListener("click", () => {
        helpPopup.classList.add("hidden");
    });

    document.getElementById("toggle-password").addEventListener("click", function() {
        const passwordField = document.getElementById("password");
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    });

    document.getElementById("toggle-new-password").addEventListener("click", function() {
        const passwordField = document.getElementById("new-password");
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    });

    window.showLogin = function () {
        accountScreen.classList.add("hidden");
        loginScreen.classList.remove("hidden");
    };

    window.createAccount = function () {
        const username = document.getElementById("new-username").value;
        const password = document.getElementById("new-password").value;

        if (!username || !password) {
            alert("Enter valid details!");
            return;
        }

        if (localStorage.getItem(username)) {
            alert("Username already taken!");
            return;
        }

        localStorage.setItem(username, password);
        alert("Account created! Now login.");
        showLogin();
    };

    window.login = function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (localStorage.getItem(username) !== password) {
            alert("Incorrect username or password!");
            return;
        }

        alert("Login successful!");
        loginScreen.classList.add("hidden");
        hubSelection.classList.remove("hidden");

        hubsContainer.innerHTML = `
            <button onclick='connectToInternet()'>🏫 School Hub</button>
            <button onclick='connectToInternet()'>🏥 Hospital Hub</button>
            <button onclick='connectToInternet()'>📚 Library Hub</button>
            <button onclick='connectToInternet()'>🌳 Park Hub</button>
            <button onclick='connectToInternet()'>🏪 Market Hub</button>
        `;
    };

    window.connectToInternet = function () {
        hubSelection.classList.add("hidden");
        successMessage.classList.remove("hidden");
        refreshSpeed();
    };

    // Fixed Refresh Speed Button
    window.refreshSpeed = function () {
        document.getElementById("network-speed").innerText = "Speed: " + (Math.random() * 50 + 10).toFixed(2) + " Mbps";
        document.getElementById("bandwidth").innerText = "Bandwidth: " + (Math.random() * 200 + 50).toFixed(2) + " GB/month";
    };
});
