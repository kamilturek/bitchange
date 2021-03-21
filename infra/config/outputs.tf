output "queue_id" {
  value     = module.sqs.queue_id
  sensitive = true
}

output "queue_user_id" {
  value     = module.iam.queue_user_id
  sensitive = true
}

output "queue_user_secret" {
  value     = module.iam.queue_user_secret
  sensitive = true
}

output "user_pool_id" {
  value     = module.cognito.user_pool_id
  sensitive = true
}
