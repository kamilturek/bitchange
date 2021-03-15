resource "aws_iam_user" "queue_user" {
  name          = "bitchange-queue-user"
  force_destroy = true
}

resource "aws_iam_access_key" "queue_user_access_key" {
  user = aws_iam_user.queue_user.name
}
