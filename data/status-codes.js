export const statusCodesData = {
  title: "HTTP Status Codes",
  description: "Understanding HTTP status codes and their meanings in API responses.",
  sections: [
    {
      title: "Success Codes (2xx)",
      badge: "Success",
      items: [
        {
          code: "200",
          title: "OK",
          description: "Request succeeded. Response body contains the requested data.",
          example: "GET request returns user data",
        },
        {
          code: "201",
          title: "Created",
          description: "Resource successfully created. Often used with POST requests.",
          example: "POST request creates new user",
        },
        {
          code: "204",
          title: "No Content",
          description: "Request succeeded but no content to return.",
          example: "DELETE request removes resource",
        },
      ],
    },
    {
      title: "Client Error Codes (4xx)",
      badge: "Client Error",
      items: [
        {
          code: "400",
          title: "Bad Request",
          description: "Request is malformed or contains invalid data.",
          example: "Missing required fields in POST body",
        },
        {
          code: "401",
          title: "Unauthorized",
          description: "Authentication is required or has failed.",
          example: "Missing or invalid API key",
        },
        {
          code: "403",
          title: "Forbidden",
          description: "Server understood request but refuses to authorize it.",
          example: "User lacks permission for resource",
        },
        {
          code: "404",
          title: "Not Found",
          description: "Requested resource could not be found.",
          example: "User ID doesn't exist",
        },
        {
          code: "429",
          title: "Too Many Requests",
          description: "Rate limit exceeded.",
          example: "API calls exceed allowed limit",
        },
      ],
    },
    {
      title: "Server Error Codes (5xx)",
      badge: "Server Error",
      items: [
        {
          code: "500",
          title: "Internal Server Error",
          description: "Generic server error occurred.",
          example: "Database connection failed",
        },
        {
          code: "502",
          title: "Bad Gateway",
          description: "Server received invalid response from upstream server.",
          example: "Proxy server error",
        },
        {
          code: "503",
          title: "Service Unavailable",
          description: "Server temporarily unavailable.",
          example: "Server maintenance mode",
        },
      ],
    },
  ],
}
