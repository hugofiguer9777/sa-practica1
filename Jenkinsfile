pipeline {
    agent any
    stages {
        stage('Checkout-git') {
            steps {
                git poll: true, url: 'https://github.com/hugofiguer9777/sa-practica1.git'
            }
        }
    }
}