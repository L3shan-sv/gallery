const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Load config file
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database (Atlas URI from _config.js)
mongoose.connect(config.mongoURI.development, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('✅ Database connected successfully'))
.catch(err => console.error('❌ Database connection error:', err));

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});
