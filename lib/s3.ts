import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs'; 
import * as iam from 'aws-cdk-lib/aws-iam';

export function createIconBucket(scope: Construct): {iconSource: s3.Bucket, iconDest: s3.Bucket} {

    const iconSource = new s3.Bucket(scope, 'iconSource' )

    const iconDest = new s3.Bucket(scope, 'iconDest', { 
        blockPublicAccess:  new s3.BlockPublicAccess({ 
        blockPublicAcls: false, 
        ignorePublicAcls: false, 
        blockPublicPolicy: false }), 
        publicReadAccess: false } )

        iconDest.addToResourcePolicy(
          new iam.PolicyStatement({
            actions: ['s3:GetObject'],
            effect: iam.Effect.ALLOW,
            resources: [iconDest.arnForObjects(`${iconDest.bucketArn}/*`)],
            principals: [new iam.AnyPrincipal()],
        }),
    );

    return { iconSource, iconDest };

}
