const mongoose = require('mongoose');
const config = require('./_config.js'); // note the underscore

mongoose.connect(config.mongoURI.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error connecting:', err);
    process.exit(1);
  });
