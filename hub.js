/* =====================================================
   LOGIN
===================================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email/phone and password.");
            return;
        }

        window.location.href = "dashboard.html";
    });
}


/* =====================================================
   SIGN UP
===================================================== */

function openDashboard() {
    window.location.href = "dashboard.html";
}


/* =====================================================
   FORGOT PASSWORD
===================================================== */

const forgotLink = document.querySelector(".login-options a");

if (forgotLink) {
    forgotLink.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        if (email === "") {
            alert("Please enter your email so we can send a reset link.");
        } else {
            // For demo purposes
            alert("A password reset link has been sent to " + email);
            // In real use, you would call your backend API here
        }
    });
}


/* =====================================================
   SIDEBAR
===================================================== */

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
}


/* =====================================================
   MENU
===================================================== */

const menuItems = document.querySelectorAll(".menu");

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        menuItems.forEach(function(menu) {
            menu.classList.remove("active");
        });
        this.classList.add("active");
    });
});
const facebookBtn = document.querySelector(".social.facebook");
const googleBtn = document.querySelector(".social.google");

if (facebookBtn) {
    facebookBtn.addEventListener("click", function() {
        // Redirect to Facebook
        window.open("https://www.facebook.com", "_blank");
    });
}

if (googleBtn) {
    googleBtn.addEventListener("click", function() {
        // Redirect to Google
        window.open("https://www.google.com", "_blank");
    });
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        // Redirect to sign-in page
        window.location.href = "hub.html";
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("show");

        // ✅ Close sidebar when any menu item is clicked
        const menuItems = sidebar.querySelectorAll(".menu");
        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                sidebar.classList.remove("show");
            });
        });
    } else {
        sidebar.classList.toggle("collapsed");
    }
}
