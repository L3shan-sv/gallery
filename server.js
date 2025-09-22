const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

const index = require('./routes/index');
const image = require('./routes/image');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// MongoDB connection function
const env = process.env.NODE_ENV || 'development';
const MONGODB_URI = config.mongoURI[env];

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`✅ Connected to Database: ${MONGODB_URI}`);
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
    }
}

// Start server only if not in test
if (env !== 'test') {
    connectDB().then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
    });
}

module.exports = { app, connectDB };
