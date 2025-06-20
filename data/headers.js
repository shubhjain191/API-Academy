export const headersData = {
  title: "HTTP Headers",
  description: "Essential HTTP headers for API requests and responses.",
  sections: [
    {
      title: "Request Headers",
      description: "Headers sent by the client to the server.",
      items: [
        {
          name: "Content-Type",
          description: "Specifies the media type of the request body.",
          example: "Content-Type: application/json",
        },
        {
          name: "Authorization",
          description: "Contains credentials for authenticating the client.",
          example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIs...",
        },
        {
          name: "Accept",
          description: "Specifies the media types the client can handle.",
          example: "Accept: application/json, text/plain",
        },
        {
          name: "User-Agent",
          description: "Identifies the client application making the request.",
          example: "User-Agent: MyApp/1.0",
        },
      ],
    },
    {
      title: "Response Headers",
      description: "Headers sent by the server to the client.",
      items: [
        {
          name: "Content-Type",
          description: "Specifies the media type of the response body.",
          example: "Content-Type: application/json; charset=utf-8",
        },
        {
          name: "Cache-Control",
          description: "Directives for caching mechanisms.",
          example: "Cache-Control: no-cache, no-store",
        },
        {
          name: "Location",
          description: "Used in redirects or when a resource is created.",
          example: "Location: /api/users/123",
        },
        {
          name: "X-Rate-Limit-Remaining",
          description: "Number of requests remaining in the current window.",
          example: "X-Rate-Limit-Remaining: 95",
        },
      ],
    },
  ],
}
