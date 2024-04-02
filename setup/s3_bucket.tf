#creste a new bucket 
#resource "aws_s3_bucket" "lambda_bucket" {
#  bucket = var.bucketName
#}

#create a zip file from the lambda code
data "archive_file" "lambda_zip" {
  type        = var.zipFile
  source_dir  =var.sourceDir
  output_path =var.outputPath
}

#upload the zip file to the bucket
resource "aws_s3_object" "lambda_function" {
  bucket = "test1lambdabucket"
  key    = var.codeObjectKey
  source = data.archive_file.lambda_zip.output_path
}