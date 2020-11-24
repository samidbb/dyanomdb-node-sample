# dyanomdb-node-sample

Dynamodb nodejs for local Dynamodb instance

start local instance:
docker-compose up

then:

access local dynamodb using AWS CLI:
aws dynamodb list-tables --endpoint-url http://localhost:8000


sources:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples-using-tables.html

code examples: 
    https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/dynamodb
