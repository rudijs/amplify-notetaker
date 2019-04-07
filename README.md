## Create steps

## Step up ampllify and configure it with aws credentials

npm install -g @aws-amplify/cli
amplify configure
(follow the prompts, create and administrator level profile)

## Create the react app

npx create-react-app amplify-notetaker
cd amplify-notetaker
amplify init
(follow the prompts, choose vscode and react)

- Creates these 4 cloud resources in 3 service types (cloudformation, iam roles, s3 buckets):
- amplify-notetaker-20190407105118 AWS::CloudFormation::Stack
- DeploymentBucket AWS::S3::Bucket
- UnauthRole AWS::IAM::Role
- AuthRole AWS::IAM::Role

Note: removing the app does not remove the S3 deployment bucket
