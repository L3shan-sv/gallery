pipeline {
    agent any  // Use the Jenkins node where Node.js is installed

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/L3shan-sv/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '⚡ Building the project...'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying...'
                sh 'node -v'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deploy successful!'
        }
        failure {
            echo '❌ Build or deploy failed!'
        }
    }
}
