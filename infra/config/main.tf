terraform {
  backend "s3" {
    bucket = "bitchange-infra-bucket"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}

module "budgets" {
  source = "./budgets"

  subscriber_email_addresses = var.subscriber_email_addresses
}

module "iam" {
  source = "./iam"
}

module "cognito" {
  source = "./cognito"
}

module "s3" {
  source = "./s3"
}

module "sqs" {
  source = "./sqs"

  queue_user_arn = module.iam.queue_user_arn
}
