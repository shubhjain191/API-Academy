export const rateLimitingData = {
  title: "Rate Limiting",
  description: "Controlling API usage to prevent abuse and ensure fair access.",
  sections: [
    {
      title: "Rate Limiting Strategies",
      description: "Different approaches to implement rate limiting.",
      items: [
        {
          name: "Fixed Window",
          description: "Allow N requests per fixed time window.",
          example: "100 requests per hour",
        },
        {
          name: "Sliding Window",
          description: "More flexible window that slides with time.",
          example: "100 requests in any 60-minute period",
        },
        {
          name: "Token Bucket",
          description: "Tokens are added at fixed rate, consumed per request.",
          example: "Bucket size: 100, refill rate: 10/minute",
        },
        {
          name: "Leaky Bucket",
          description: "Requests processed at steady rate regardless of input.",
          example: "Process 1 request per second",
        },
      ],
    },
    {
      title: "Rate Limit Headers",
      description: "Standard headers to communicate rate limit status.",
      items: [
        {
          name: "X-RateLimit-Limit",
          description: "Maximum number of requests allowed.",
          example: "X-RateLimit-Limit: 1000",
        },
        {
          name: "X-RateLimit-Remaining",
          description: "Number of requests remaining in current window.",
          example: "X-RateLimit-Remaining: 999",
        },
        {
          name: "X-RateLimit-Reset",
          description: "Time when the rate limit window resets.",
          example: "X-RateLimit-Reset: 1640995200",
        },
        {
          name: "Retry-After",
          description: "How long to wait before making another request.",
          example: "Retry-After: 3600",
        },
      ],
    },
  ],
}
