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
                    bash -c "npm i"
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''bash -c "npm run build"'''
                sh '''bash -c "CI=true npm test"'''
            }
        }
        stage('Produccion') {
            steps {
                sh '''bash -c "sudo cp -r ./build/ /var/www/"'''
                sh '''bash -c "sudo rm -R /var/www/html"'''
                sh '''bash -c "sudo mv /var/www/build/ /var/www/html"'''
            }
        }
    }
}
