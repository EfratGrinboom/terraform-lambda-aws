# terraform-lambda-aws
Deploying Terraform project that constructs an infrastructure for a lambda+API gateway+S3 in aws with Jenkins declarative pipeline

# Project Description
This project aims to build an advanced infrastructure on AWS using Jenkins and Terraform tools. The infrastructure will include Lambda function code, creation of an S3 storage bucket, and setting up an API Gateway.

# Setting Up the Environment
Opening an AWS Account
https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=header_signup&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start/otp

Running Jenkins in a Docker Container
by executing the following command:
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11

# Project Build Steps
Writing Lambda Code
Write code for a Lambda function , i did it in  Node.js.

Writing Terraform Code
    **providers.tf:** define the provider configuration for Terraform.\
    **terraform.tfvars:** contains the variable definitions used by Terraform.\
    **variable.tf:** defines the variables used in your Terraform configuration. \
    **main.tf:** Create an S3 storage bucket for uploading the ZIP file.\
    **bucket.tf:** Upload the ZIP file to the bucket created in AWS.\
    **api_gateway.tf:** Create a trigger for the API Gateway\
    **output.tf:** defines the output configuration for Terraform.\
    
# Creating a Jenkins Pipeline
Set up a pipeline in Jenkins to automate the Terraform deployment process.






