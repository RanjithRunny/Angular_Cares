pipeline {
    agent any

    tools {
        nodejs 'node-18' // Make sure this Node.js version is set in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular application...'
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- --watch=false --browsers=ChromeHeadless'
            }
        }
    }
}
