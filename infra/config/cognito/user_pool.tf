resource "aws_cognito_user_pool" "pool" {
  name = "bitchange-user-pool"

  auto_verified_attributes = ["email"]
  username_attributes      = ["email"]

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  verification_message_template {
    default_email_option  = "CONFIRM_WITH_LINK"
    email_subject_by_link = "BitChange: Your confirmation link"
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name = "bitchange-frontend-client"

  user_pool_id                         = aws_cognito_user_pool.pool.id
  allowed_oauth_flows                  = ["implicit"]
  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_scopes                 = ["email", "openid"]
  callback_urls                        = ["http://localhost:3000/"]
  explicit_auth_flows                  = ["ALLOW_REFRESH_TOKEN_AUTH", "ALLOW_USER_SRP_AUTH"]
  supported_identity_providers         = ["COGNITO"]
}

resource "aws_cognito_user_pool_domain" "main" {
  domain       = "bitchange"
  user_pool_id = aws_cognito_user_pool.pool.id
}
