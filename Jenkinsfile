pipeline {
    agent any

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
                sh 'node -v'
                echo '🚀 Deployment placeholder'
            }
        }
    }

    post {
        success { echo '✅ Build and deploy successful!' }
        failure { echo '❌ Build or deploy failed!' }
    }
}
