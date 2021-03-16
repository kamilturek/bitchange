variable "queue_user_arn" {
  description = "User ARN of queue's producer and consumer"
  type        = string

  validation {
    condition     = length(var.queue_user_arn) > 11 && substr(var.queue_user_arn, 0, 11) == "arn:aws:iam"
    error_message = "The queue_user_arn value must be a valid User ARN, starting with \"arn:aws:iam\"."
  }
}
