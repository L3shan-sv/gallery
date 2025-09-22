pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        SLACK_WEBHOOK = credentials('SLACK_WEBHOOK')  // secure reference
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
            echo '✅ Build, tests, and deploy successful! Sending Slack notification...'
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{"text":"✅ Build #${env.BUILD_NUMBER} succeeded! Visit your site at: <https://your-render-link>"}' \
            $SLACK_WEBHOOK
            """
        }
        failure {
            echo '❌ Build, test, or deploy failed. Sending email...'
            mail to: 'your_email@example.com',
                 subject: "Jenkins Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "The build has failed. Please check Jenkins for details: ${env.BUILD_URL}"
        }
    }
}
