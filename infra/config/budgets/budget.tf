resource "aws_budgets_budget" "budget" {
  name = "bitchange-budget"

  budget_type       = "COST"
  limit_amount      = "1.0"
  limit_unit        = "USD"
  time_period_start = "2021-02-23_00:00"
  time_period_end   = "2050-12-31_23:59"
  time_unit         = "QUARTERLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = var.subscriber_email_addresses
  }
}
