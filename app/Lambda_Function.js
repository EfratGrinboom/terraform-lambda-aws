exports.handler = async (event, context) => {
    try {
        const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Efrat's Lambda | Terraform</title>
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      height: 100vh;
      width: 100%;
      background-color: #f5e6de;;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-top: 100px;
      align-items: center;
    }
    h2 {
      font-size: 3rem;
      color: rgb(54, 53, 53);
      background-color: #e75480;
      width: 350px;
      border-radius: 20px;
      text-align: center;
    }
  </style>
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
    } catch (error) {
        console.error("Error occurred:", error);
        return {
            statusCode: 500,
            body: "An internal server error occurred.",
        };
    }
};
