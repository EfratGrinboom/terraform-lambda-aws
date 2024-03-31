// const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Efrat's Lambda | Terraform</title>
</head>
<body>
  <h1>This lambda website was deployed by:</h1>
  <h2>Efrat grinboim</h2>
  <p>Using terraform to deploy the aws lambda and s3 bucket</p>
</body>
</html>
`;

  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html',
    },
  };
};
