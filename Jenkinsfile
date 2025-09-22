pipeline {
    agent {
        docker { image 'node:20-alpine' }  // Runs all stages inside a Node.js container
    }

    environment {
        REPO_URL = 'https://github.com/L3shan-sv/gallery.git'
        BRANCH = 'master'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '🔄 Checking out code...'
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '⚡ Building the project...'
                // Add any build steps here if needed
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying project...'
                // Example: you can start your server locally (for testing)
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deploy successful!'
        }
        failure {
            echo '❌ Build or deploy failed. Check the logs!'
        }
    }
}
