pipeline {
    agent any

    tools {
        nodejs 'node-18' // Make sure this Node.js version is set in Jenkins
    }

    parameters {
        booleanParam(name: 'SKIP_TESTS', defaultValue: false, description: 'Skip running unit tests')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                echo 'Building Angular application...'
                bat 'npm run build'
            }
        }

        stage('Run Tests') {
            when {
                expression { return !params.SKIP_TESTS }
            }
            steps {
                echo 'Running unit tests...'
                bat 'npm test -- --watch=false --browsers=ChromeHeadless'
            }
        }
    }
}
