import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createIconBucket } from './s3';
import {createLambdaExecutionRole} from './iam';
import { createLambdaApiGateway } from './lambda-api';
import { create } from 'domain';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class IconCropStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { iconSource, iconDest } = createIconBucket(this);
    const lambdaRole = createLambdaExecutionRole(this, iconSource.bucketName, iconDest.bucketName);
    const apiGatewayToLambda = createLambdaApiGateway(this, iconDest.bucketName, iconDest.bucketName);
  }
}
cd 