## Create steps

## Setup existing

- `git clone git clone git@github.com:rudijs/amplify-notetaker.git`
- `cd amplify-notetaker`
- `amplify env add`
- `amplify push` (recreats aws-exports.js - todo: check if another way to do this)
- `npm install`
- `npm start`

## Step up new ampllify and configure it with aws credentials

- `npm install -g @aws-amplify/cli`
- `amplify configure`
- follow the prompts, create and administrator level profile

## Create the react app and init amplify

- `npx create-react-app amplify-notetaker`
- `cd amplify-notetaker`
- `amplify init`
- follow the prompts, choose vscode and react
- Creates these 4 cloud resources in 3 service types (cloudformation, iam roles, s3 buckets):
- amplify-notetaker-20190407105118 AWS::CloudFormation::Stack
- DeploymentBucket AWS::S3::Bucket
- UnauthRole AWS::IAM::Role
- AuthRole AWS::IAM::Role

Note: removing the app does not remove the S3 deployment bucket

## Add amplify apis

- `amplify add api`

- choose the defaults, graphql, cognito auth
- creates the backend/auth and backend/api folders w/ files
- Select Yes to edit the schema which will pop up the IDE with the schema.graphql file opened
- Update the schema.graphql to be this simple Note type:

```
type Note @model {
  id: ID!
  note: String!
}
```

- In the cli press enter to continue.

- `amplify push`
- follow the default prompts selecting yes for javacript setup

## Configure Amplify with React

- We now have src/aws-exports.js and src/graphql folder in our react app.
- `npm i -S aws-amplify aws-amplify-react`
- Update src/index.js

```
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);
```

## Configure Auth

- Update App.js
- `import { withAuthenticator } from "aws-amplify-react";`
- `export default withAuthenticator(App, { includeGreetings: true });`
