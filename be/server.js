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