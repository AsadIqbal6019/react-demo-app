// pipeline {
//     agent any

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building..'
//             }
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing the web Application'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying....'
//             }
//         }
//     }
// }

pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-login')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/AsadIqbal6019/react-demo-app.git'
            }
        }

        stage('Build docker image') {
            steps {  
                sh 'docker build -t asadiqbal6019/react-demo-app:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push asadiqbal6019/react-demo-app:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}