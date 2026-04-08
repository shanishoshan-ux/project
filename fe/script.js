<<<<<<< HEAD
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
=======
console.log("hello");
>>>>>>> b2742e69d0bc15d7f0bf494f2497f38334e68837
