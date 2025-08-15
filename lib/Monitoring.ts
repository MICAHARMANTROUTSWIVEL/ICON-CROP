import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as logs from 'aws-cdk-lib/aws-logs'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export function setupMonitoring(scope: Construct, iconCrop: lambda.Function): void {

    const logGroup = new logs.LogGroup(scope, 'ExistingLogGroup', {
        logGroupName: `/aws/lambda/${iconCrop.functionName}`,
        retention: logs.RetentionDays.ONE_WEEK,
      });

    //   new cloudwatch.Alarm(scope, 'ErrorAlarm', {
    //     metric: iconCrop.metricErrors(),
    //     threshold: 1,
    //     evaluationPeriods: 1,
    //     datapointsToAlarm: 1
    //   });


// new cloudwatch.Dashboard(scope, 'IconCropDashBoard', {
//   widgets: [
//     [new cloudwatch.GraphWidget({
//       title: 'Icon Crop Function Invocations',
//       left: [iconCrop.metricErrors()],
//     }),
//     new cloudwatch.GraphWidget({
//       title: 'Icon Crop Function Errors',
//       right: [iconCrop.metricErrors()]
//     })
//   ]]
// });
}
