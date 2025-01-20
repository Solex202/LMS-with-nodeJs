const express = require('express'); // Import express
const app = express();             // Create an instance of express

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!'); // Send a response to the client
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
