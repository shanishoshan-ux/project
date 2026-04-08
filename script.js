document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name.length < 3) {
            alert("Name must be at least 3 characters");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Invalid email");
            return;
        }

        let phonePattern = /^[0-9]{10,}$/;
        if (!phone.match(phonePattern)) {
            alert("Phone must be at least 10 digits");
            return;
        }

        if (subject.length < 5) {
            alert("Subject must be at least 5 characters");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters");
            return;
        }

        fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                subject,
                message
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
        })
        .catch(err => {
            console.log(err);
            alert("Error sending data");
        });

    });

});