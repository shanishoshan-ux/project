// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // מונע את שליחת הטופס באופן אוטומטי

    // אוספים את הנתונים מהטופס
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    // שולחים את הנתונים לשרת
    fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // מציגים הודעה למשתמש
    })
    .catch(error => {
        console.error('Error:', error);
    });
});