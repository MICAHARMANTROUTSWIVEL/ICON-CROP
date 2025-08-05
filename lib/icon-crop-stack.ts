import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createIconBucket } from './s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class IconCropStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { iconSource, iconDest } = createIconBucket(this);

  }
}
