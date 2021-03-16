output "queue_user_arn" {
  value     = aws_iam_user.queue_user.arn
  sensitive = true
}

output "queue_user_id" {
  value     = aws_iam_access_key.queue_user_access_key.id
  sensitive = true
}

output "queue_user_secret" {
  value     = aws_iam_access_key.queue_user_access_key.secret
  sensitive = true
}
