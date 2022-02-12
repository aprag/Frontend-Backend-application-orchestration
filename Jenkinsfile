pipeline {
    agent any
    stages {
        stage('Cloning git') {
            steps {
                git([url:'https://github.com/aprag/Frontend-Backend-application-orchestration',branch:'master'])
		bat "git pull origin dev"
            }
        }
    stages{
        stage('Building'){
            steps{
                bat "docker-compose up --build"
            }
        }
    }
}
