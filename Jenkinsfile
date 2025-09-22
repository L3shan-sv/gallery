pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

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

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                script {
                    try {
                        sh 'npm test'
                    } catch (err) {
                        currentBuild.result = 'FAILURE'
                        error "Tests failed! See console output for details."
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo '⚡ Building the project...'
                // Add any build steps if needed
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
            echo '✅ Build, tests, and deploy successful!'
        }
        failure {
            echo '❌ Build, test, or deploy failed. Sending email...'
            mail to: 'your_email@example.com',
                 subject: "Jenkins Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The build has failed. Please check Jenkins for details: ${env.BUILD_URL}"
        }
    }
}
