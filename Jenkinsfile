pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code...'
                git url: 'https://github.com/L3shan-sv/gallery.git', branch: 'master'
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
            echo '❌ Build or deploy failed.'
        }
    }
}
