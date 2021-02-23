resource "aws_s3_bucket" "env_bucket" {
  bucket = "bitchange-env-bucket"
}

resource "aws_s3_bucket_public_access_block" "env_bucket" {
  bucket                  = aws_s3_bucket.env_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
