variable "subscriber_email_addresses" {
  description = "Email addresses of subscribers to be notified by budget alarm"
  type        = list(string)

  validation {
    condition     = length(var.subscriber_email_addresses) > 0
    error_message = "At least one subscriber is required."
  }
}
