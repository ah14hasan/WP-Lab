const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (for serving CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.send(`<h1>Form Submitted</h1><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
