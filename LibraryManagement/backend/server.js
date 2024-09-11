require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 4500;

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.error(`Error starting server on port ${port}: ${err.message}`);
    }
});
