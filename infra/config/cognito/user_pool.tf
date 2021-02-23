resource "aws_cognito_user_pool" "user_pool" {
  name                     = "bitchange-user-pool"
  auto_verified_attributes = ["email"]
  username_attributes      = ["email"]

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }
}

output "user_pool_id" {
  value = aws_cognito_user_pool.user_pool.id
}
