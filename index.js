const aws = require("aws-sdk");
const sns = new aws.SNS({ region: "us-east-1" });

exports.handler = event => {
  const messageToSend = event.Records[0].Sns.Message;
  sns.publish(
    {
      Message: messageToSend,
      //   PhoneNumber: "+910000000000",
      TopicArn: "SNS-topic-ARN",
      Subject: event.Records[0].Sns.Subject
    },
    (err, data) => {
      if (err) {
        console.log("Err:", err);
      }
      console.log("data:", data);
    }
  );
};
