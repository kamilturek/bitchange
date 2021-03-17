resource "aws_sqs_queue" "queue" {
  name = "bitchange-queue"

  max_message_size          = 2048
  receive_wait_time_seconds = 20
}

resource "aws_sqs_queue_policy" "queue_policy" {
  queue_url = aws_sqs_queue.queue.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__user_statement",
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "${var.queue_user_arn}"
        ]
      },
      "Action": [
        "SQS:ChangeMessageVisibility",
        "SQS:DeleteMessage",
        "SQS:GetQueueAttributes",
        "SQS:ReceiveMessage",
        "SQS:SendMessage"
      ],
      "Resource": "${aws_sqs_queue.queue.arn}"
    }
  ]
}
POLICY
}
