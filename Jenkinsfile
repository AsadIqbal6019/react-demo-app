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
                sh 'docker build -t asadiqbal6019/react-demo-app:$BUILD_NUMBER.0 .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push asadiqbal6019/react-demo-app:$BUILD_NUMBER.0'
            }
        }


           stage('enviroment-setup') {
        steps {
          script {  
            // if( "${env.DEPLOY_BRANCH}" == "develop" ) {
            //     DEPLOY_SRV = "ubuntu@ec2-100-26-239-182.compute-1.amazonaws.com"
            //     echo "Target Server will be : ${DEPLOY_SRV}"
            //     echo "Target Branch will be : ${env.DEPLOY_BRANCH}"
            // } 
            // else if( "${env.DEPLOY_BRANCH}" == "master" ) {
            //     DEPLOY_SRV = "ubuntu@ec2-44-211-130-172.compute-1.amazonaws.com"
            //     echo "Target Server will be : ${DEPLOY_SRV}"
            //     echo "Target Branch will be : ${env.DEPLOY_BRANCH}"
            // }
            GIT_COMMIT_HASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                echo "**************************************************"
                echo "Commit Hash to be Deployed: ${GIT_COMMIT_HASH}"
                echo "**************************************************"
          } 
        }
    }

        // stage('pull image') {
        //     steps{
        //         sh 'docker pull asadiqbal6019/react-demo-app:$BUILD_NUMBER.0'
        //         // sh 'docker run -p 3000:3000 --name react-demo-app asadiqbal6019/react-demo-app:$BUILD_NUMBER'

        //     }
        // }
}
post {
        always {
            sh 'docker logout'
        }
    }
}