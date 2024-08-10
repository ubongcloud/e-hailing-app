document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const requestRideForm = document.getElementById('request-ride-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('rider-name').value;
            const email = document.getElementById('rider-email').value;
            const password = document.getElementById('rider-password').value;

            fetch('http://localhost:5000/riders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: Date.now(), name, email, password })
            })
            .then(response => response.json())
            .then(() => {
                window.location.href = 'login.html';
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            fetch('http://localhost:5000/riders/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(() => {
                window.location.href = 'request-ride.html';
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (requestRideForm) {
        requestRideForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const riderId = document.getElementById('rider-id').value;
            const pickupLocation = document.getElementById('pickup-location').value;
            const dropoffLocation = document.getElementById('dropoff-location').value;

            fetch('http://localhost:5001/rides', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: Date.now(), riderId, pickupLocation, dropoffLocation })
            })
            .then(response => response.json())
            .then(() => {
                alert('Ride requested successfully');
            })
            .catch(error => console.error('Error:', error));
        });
    }
});