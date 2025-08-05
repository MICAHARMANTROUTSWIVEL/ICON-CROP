import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs'; 
import { RemovalPolicy } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';

export function createIconBucket(scope: Construct): {iconSource: s3.Bucket, iconDest: s3.Bucket} {


    const iconSource = new s3.Bucket(scope, 'iconSource', {
        removalPolicy: RemovalPolicy.DESTROY
    });

    const iconDest = new s3.Bucket(scope, 'iconDest', { 
        removalPolicy: RemovalPolicy.DESTROY,
        blockPublicAccess:  new s3.BlockPublicAccess({ 
        blockPublicAcls: false, 
        ignorePublicAcls: false, 
        blockPublicPolicy: false }), 
        publicReadAccess: true } )

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
