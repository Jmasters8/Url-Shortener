const express = require('express');
const connectDB = require('./config/db');

const path = require('path');

const app = express();

// Connect to database
connectDB();


app.use(express.json({ extended: false }));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));


// app.get('/', (req, res) => {
//   app.use(express.static('frontend/build'));
//   res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
// })