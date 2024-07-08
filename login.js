function authenticate(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'omar' && password === '123456789') {
        // Authentication successful, redirect to main page
        window.location.href = 'index.html';
    } else {
        // Authentication failed, alert the user
        alert('Invalid username or password');
    }
}
