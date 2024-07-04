document.getElementById('presence-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const participantName = document.getElementById('participant-name').value;

    const participantList = document.getElementById('participants-list');
    const newParticipant = document.createElement('li');
    newParticipant.textContent = `Kegiatan: ${eventName}, Peserta: ${participantName}`;
    participantList.appendChild(newParticipant);

    // Reset form
    document.getElementById('presence-form').reset();
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password === confirmPassword) {
        console.log(`User registered with username: ${username}, email: ${email}`);
        // Add further registration logic here (e.g., save to database)
        alert("Registration successful!");
        document.getElementById('register-form').reset();
    } else {
        alert("Passwords do not match!");
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    console.log(`User logged in with email: ${email}`);
    // Add further login logic here (e.g., authentication)
    alert("Login successful!");
    document.getElementById('login-form').reset();
});
