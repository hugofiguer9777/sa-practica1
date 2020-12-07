pipeline {
    agent any
    stages {
        stage('Checkout-git') {
            steps {
                git poll: true, url: 'https://github.com/hugofiguer9777/sa-practica1.git'
            }
        }
        stage('InstallRequirements') {
            steps {
                sh '''
                    bash -c "npm --version"
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''bash -c "ls -l"'''
            }
        }
    }
}