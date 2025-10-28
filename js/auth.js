// Header Authentication State Management
(function() {
    'use strict';

    // Check if user is logged in
    function isLoggedIn() {
        const user = localStorage.getItem('kg-user');
        return user !== null;
    }

    // Get user data
    function getUser() {
        const userData = localStorage.getItem('kg-user');
        return userData ? JSON.parse(userData) : null;
    }

    // Update header navigation based on auth state
    function updateHeaderNav() {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        const user = getUser();
        const isAdmin = user && user.role === 'admin';

        // Remove existing auth links
        const existingAuthLinks = nav.querySelectorAll('.auth-link');
        existingAuthLinks.forEach(link => link.remove());

        if (isLoggedIn()) {
            // User is logged in
            const accountLink = document.createElement('a');
            accountLink.href = 'account.html';
            accountLink.textContent = 'Account';
            accountLink.className = 'auth-link';

            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.textContent = 'Logout';
            logoutLink.className = 'auth-link';
            logoutLink.onclick = (e) => {
                e.preventDefault();
                handleLogout();
            };

            // Add admin link if user is admin
            if (isAdmin) {
                const adminLink = document.createElement('a');
                adminLink.href = 'admin.html';
                adminLink.textContent = 'Admin';
                adminLink.className = 'auth-link';
                nav.appendChild(adminLink);
            }

            nav.appendChild(accountLink);
            nav.appendChild(logoutLink);
        } else {
            // User is not logged in
            const loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.textContent = 'Login';
            loginLink.className = 'auth-link';

            const registerLink = document.createElement('a');
            registerLink.href = 'register.html';
            registerLink.textContent = 'Register';
            registerLink.className = 'auth-link';

            nav.appendChild(loginLink);
            nav.appendChild(registerLink);
        }
    }

    // Handle logout
    async function handleLogout() {
        try {
            // Import Firebase auth
            const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
            const { getAuth, signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');

            const firebaseConfig = {
                apiKey: "AIzaSyD9FwYhcC5loYVUB0xRrkHfNw8WLj2Ttbs",
                authDomain: "khavhogroups2.firebaseapp.com",
                projectId: "khavhogroups2",
                storageBucket: "khavhogroups2.firebasestorage.app",
                messagingSenderId: "610556272278",
                appId: "1:610556272278:web:0dcbb969e6a64a7c6a3af4"
            };

            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);

            await signOut(auth);
            localStorage.removeItem('kg-user');
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Error signing out:', error);
            // Fallback: just clear local storage
            localStorage.removeItem('kg-user');
            window.location.href = 'index.html';
        }
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateHeaderNav);
    } else {
        updateHeaderNav();
    }

    // Expose functions globally if needed
    window.KGAuth = {
        isLoggedIn,
        getUser,
        updateHeaderNav,
        logout: handleLogout
    };
})();
