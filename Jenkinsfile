pipeline {
    agent {
        docker { 
            image 'node:20-alpine'  // Uses Node.js 20 in a lightweight Alpine container
        }
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Checking out code..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing npm dependencies..."
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "⚡ Building the project..."
                // Add any build steps here if needed
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploy placeholder..."
                sh 'node -v'
            }
        }
    }

    post {
        success {
            echo "✅ Build and deploy successful!"
        }
        failure {
            echo "❌ Build or deploy failed!"
        }
    }
}

