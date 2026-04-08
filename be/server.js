<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());
// POST /contact
app.post('/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log('שם מלא:', name);
    console.log('אימייל:', email);
    console.log('טלפון:', phone);
    console.log('נושא:', subject);
    console.log('תוכן:', message);
    res.json({ message: 'הנתונים התקבלו בהצלחה!' });
});
app.listen(PORT, () => {
   console.log(`http://localhost${PORT}`);
})
=======
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log("📩 New contact form:");
    console.log(name, email, phone, subject, message);
    res.json({ message: "Message sent successfully! ✅" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> b2742e69d0bc15d7f0bf494f2497f38334e68837
