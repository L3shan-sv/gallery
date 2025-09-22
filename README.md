Darkroom Gallery

A web app for uploading and viewing images, built with Node.js, Express, MongoDB, and EJS. This project has been developed with multiple milestones, integrating tests, CI/CD with Jenkins, and Slack notifications.

Table of Contents

Features

Milestones

Setup

Running the App

Testing

Deployment & CI/CD

Technologies

Features

Upload images and view them in a gallery

Dynamic routing for individual images

MongoDB integration for storing image metadata

Milestone banners clearly visible on the landing page

CI/CD pipeline with Jenkins for automated testing and deployment

Slack notifications on successful deployment

Milestones

Milestone 2: Basic image upload and gallery functionality

Milestone 3: Added automated tests with Mocha; tests are run before deployment

Milestone 4: Jenkins pipeline integrated with Slack; notifications sent on successful deploy

Setup

Clone the repository:

git clone https://github.com/L3shan-sv/gallery.git
cd gallery


Install dependencies:

npm install


Configure environment variables in _config.js:

var config = {};
const DB_USER = 'your_mongo_user';
const DB_PASS = 'your_mongo_password';

config.mongoURI = {
    production: `mongodb://${DB_USER}:${DB_PASS}@your-cluster.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb://${DB_USER}:${DB_PASS}@your-cluster.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb://${DB_USER}:${DB_PASS}@your-cluster.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
};

module.exports = config;


Ensure MongoDB Atlas cluster is active and accessible.

Running the App

Start the server locally:

npm start


Open your browser and go to:

http://localhost:5000

Testing

Run automated tests with:

NODE_ENV=test npm test


You should see output confirming the database connection and passing tests.

Deployment & CI/CD

The project uses Jenkins for automated builds, tests, and deployment.

Slack integration sends a message to the configured channel on successful deployment.

Deployment can be triggered by pushing changes to the master branch.

Technologies

Node.js & Express

MongoDB & Mongoose

EJS templating

Materialize CSS

Mocha for testing

Jenkins for CI/CD

Slack for deployment notifications
