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

// pipeline {
//     agent any
//     environment {
//     DOCKERHUB_CREDENTIALS = credentials('docker-login')
//     }
//     stages { 
//         stage('SCM Checkout') {
//             steps{
//             git 'https://github.com/AsadIqbal6019/react-demo-app.git'
//             }
//         }

//         stage('enviroment-setup') {
//             steps {
//               script {  
//             // if( "${env.DEPLOY_BRANCH}" == "develop" ) {
//             //     DEPLOY_SRV = "ubuntu@ec2-100-26-239-182.compute-1.amazonaws.com"
//             //     echo "Target Server will be : ${DEPLOY_SRV}"
//             //     echo "Target Branch will be : ${env.DEPLOY_BRANCH}"
//             // } 
//             // else if( "${env.DEPLOY_BRANCH}" == "master" ) {
//             //     DEPLOY_SRV = "ubuntu@ec2-44-211-130-172.compute-1.amazonaws.com"
//             //     echo "Target Server will be : ${DEPLOY_SRV}"
//             //     echo "Target Branch will be : ${env.DEPLOY_BRANCH}"
//             // }
//             GIT_COMMIT_HASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
//                 echo "**************************************************"
//                 echo "Commit Hash to be Deployed: ${GIT_COMMIT_HASH}"
//                 echo "**************************************************"
//           } 
//         }
//     }

//         stage('Build docker image') {
//             steps {  
//                 sh 'docker build -t asadiqbal6019/react-demo-app:$BUILD_NUMBER.0 .'
//             }
//         }
//         stage('login to dockerhub') {
//             steps{
//                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
//             }
//         }
//         stage('push image') {
//             steps{
//                 sh 'docker push asadiqbal6019/react-demo-app:$BUILD_NUMBER.0'
//             }
//         }

//         // stage('pull image') {
//         //     steps{
//         //         sh 'docker pull asadiqbal6019/react-demo-app:$BUILD_NUMBER.0'
//         //         // sh 'docker run -p 3000:3000 --name react-demo-app asadiqbal6019/react-demo-app:$BUILD_NUMBER'

//         //     }
//         // }
// }
// post {
//         always {
//             sh 'docker logout'
//         }
//     }
// }


pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    parameters {
        choice(name:'VERSION', choices:['1.0', '1.1', '1.2'], description:'Choose the version of the project')

        booleanParam(name :'executeTests', description:'Execute the tests', defaultValue:false)
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                // sh 'npm run build'
                echo "Install Packages...."
            }
        }
        stage('Test') {
            steps {
                // sh 'npm run test'
                echo "Test"

            }
        }
        stage('Build Image') {
            steps {
                // withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                //     sh 'docker build -t jennykibiri/sample-react-app .'
                //     sh "echo $PASS | docker login -u $USER --password-stdin"
                //     sh 'docker push jennykibiri/sample-react-app'
                // }
                echo "Build Image"

            }
        }
        stage ('Deploy') {
            steps {
                script {
                    // def dockerCmd = 'docker run  -p 3000:3000 -d jennykibiri/sample-react-app:latest'
                    // sshagent(['ec2-server-key']) {
                    //     sh "ssh -o StrictHostKeyChecking=no ec2-user@3.92.144.96 ${dockerCmd}"
                    // }
                }
                echo "Deploy Image"

            }
        }
    }
}