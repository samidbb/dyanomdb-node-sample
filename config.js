const AWS = require('aws-sdk');

AWS.config.update({
    region: 'eu-central-1', // REGION
    endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports = {
    dynamodb,
};