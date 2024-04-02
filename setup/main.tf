resource "aws_iam_role" "app_deploy_role" {
  name = var.deployRoleName
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_lambda_function" "app_lambda" {
  s3_key        = aws_s3_object.lambda_function.key
  s3_bucket     = aws_s3_bucket.lambda_bucket.id
  role          = aws_iam_role.app_deploy_role.arn
  handler       = "Lambda_Function.handler"
  runtime       = var.awsLambdaRuntime
  function_name = var.lambdaName
}
