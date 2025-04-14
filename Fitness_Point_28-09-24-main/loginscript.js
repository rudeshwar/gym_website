function showLogin() {
    document.getElementById('login-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('signup-popup').style.display = 'none';
    setTimeout(() => document.getElementById('login-popup').classList.add('show'), 10);
}

// Show signup form
function showSignup() {
    document.getElementById('signup-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('login-popup').style.display = 'none';
    setTimeout(() => document.getElementById('signup-popup').classList.add('show'), 10);
}

// Close pop-up form
function closePopup() {
    document.getElementById('login-popup').classList.remove('show');
    document.getElementById('signup-popup').classList.remove('show');
    setTimeout(() => {
        document.getElementById('login-popup').style.display = 'none';
        document.getElementById('signup-popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }, 1000); // wait for the transition to complete
}

// Show login form after 2-3 seconds
setTimeout(function() {
    showLogin();
}, 3000);