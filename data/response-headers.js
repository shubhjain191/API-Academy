export const responseHeadersData = {
  title: "Response Headers",
  description: "Essential HTTP response headers for API communication and client guidance.",
  overview:
    "HTTP response headers provide metadata about the response, including content information, caching directives, security policies, and server instructions. They are crucial for proper API communication and client behavior.",
  keyConcepts: [
    {
      term: "Content Headers",
      definition: "Headers that describe the response body content (type, length, encoding)",
    },
    {
      term: "Cache Headers",
      definition: "Headers that control how responses are cached by clients and intermediaries",
    },
    {
      term: "Security Headers",
      definition: "Headers that enhance security and protect against various attacks",
    },
    {
      term: "CORS Headers",
      definition: "Headers that control cross-origin resource sharing policies",
    },
  ],
  sections: [
    {
      title: "Content Description Headers",
      description: "Headers that describe the response body and how it should be processed.",
      items: [
        {
          name: "Content-Type",
          title: "Media Type Specification",
          description:
            "Specifies the media type of the response body, helping clients understand how to process the data.",
          example:
            "Content-Type: application/json; charset=utf-8\nContent-Type: text/html; charset=UTF-8\nContent-Type: image/png",
          useCase: "JSON APIs, file downloads, image serving, XML responses",
        },
        {
          name: "Content-Length",
          title: "Response Size",
          description:
            "Indicates the size of the response body in bytes. Helps clients allocate memory and show progress.",
          example: "Content-Length: 1024\nContent-Length: 0",
          useCase: "File downloads, progress indicators, memory allocation",
        },
        {
          name: "Content-Encoding",
          title: "Compression Method",
          description: "Specifies the encoding/compression applied to the response body.",
          example: "Content-Encoding: gzip\nContent-Encoding: br\nContent-Encoding: deflate",
          useCase: "Response compression, bandwidth optimization",
        },
        {
          name: "Content-Disposition",
          title: "Content Handling",
          description: "Indicates how the content should be displayed - inline or as attachment.",
          example: 'Content-Disposition: attachment; filename="report.pdf"\nContent-Disposition: inline',
          useCase: "File downloads, forcing save dialog, inline display",
        },
      ],
    },
    {
      title: "Caching Control Headers",
      description: "Headers that control how responses are cached and when they expire.",
      items: [
        {
          name: "Cache-Control",
          title: "Cache Directives",
          description: "Provides caching directives for both client and intermediate caches.",
          example:
            "Cache-Control: no-cache, no-store, must-revalidate\nCache-Control: public, max-age=3600\nCache-Control: private, max-age=0",
          useCase: "API response caching, static asset caching, preventing sensitive data caching",
        },
        {
          name: "ETag",
          title: "Entity Tag",
          description: "Unique identifier for a specific version of a resource, used for cache validation.",
          example: 'ETag: "abc123def456"\nETag: W/"weak-etag-value"',
          useCase: "Conditional requests, cache validation, optimistic locking",
        },
        {
          name: "Last-Modified",
          title: "Modification Date",
          description: "Indicates when the resource was last modified, used for cache validation.",
          example: "Last-Modified: Wed, 21 Oct 2023 07:28:00 GMT",
          useCase: "Cache validation, conditional requests, resource versioning",
        },
        {
          name: "Expires",
          title: "Expiration Date",
          description: "Specifies when the response expires and should be considered stale.",
          example: "Expires: Thu, 01 Dec 2023 16:00:00 GMT",
          useCase: "Cache expiration, static content caching",
        },
      ],
    },
    {
      title: "Security Headers",
      description: "Headers that enhance security and protect against various attacks.",
      items: [
        {
          name: "X-Content-Type-Options",
          title: "MIME Sniffing Protection",
          description: "Prevents browsers from MIME-sniffing responses, reducing XSS risks.",
          example: "X-Content-Type-Options: nosniff",
          useCase: "XSS prevention, MIME type security, file upload security",
        },
        {
          name: "X-Frame-Options",
          title: "Clickjacking Protection",
          description: "Controls whether the response can be embedded in frames/iframes.",
          example:
            "X-Frame-Options: DENY\nX-Frame-Options: SAMEORIGIN\nX-Frame-Options: ALLOW-FROM https://example.com",
          useCase: "Clickjacking prevention, iframe embedding control",
        },
        {
          name: "X-XSS-Protection",
          title: "XSS Filter Control",
          description: "Controls the browser's built-in XSS protection mechanism.",
          example: "X-XSS-Protection: 1; mode=block\nX-XSS-Protection: 0",
          useCase: "XSS attack prevention, browser security features",
        },
        {
          name: "Strict-Transport-Security",
          title: "HTTPS Enforcement",
          description: "Forces browsers to use HTTPS for all future requests to the domain.",
          example:
            "Strict-Transport-Security: max-age=31536000; includeSubDomains\nStrict-Transport-Security: max-age=31536000; preload",
          useCase: "HTTPS enforcement, man-in-the-middle attack prevention",
        },
      ],
    },
    {
      title: "CORS Headers",
      description: "Headers that control cross-origin resource sharing policies.",
      items: [
        {
          name: "Access-Control-Allow-Origin",
          title: "Origin Permission",
          description: "Specifies which origins are allowed to access the resource.",
          example:
            "Access-Control-Allow-Origin: *\nAccess-Control-Allow-Origin: https://myapp.com\nAccess-Control-Allow-Origin: https://app1.com, https://app2.com",
          useCase: "Cross-origin API access, web application integration",
        },
        {
          name: "Access-Control-Allow-Methods",
          title: "Method Permission",
          description: "Specifies which HTTP methods are allowed for cross-origin requests.",
          example: "Access-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Methods: *",
          useCase: "CORS preflight responses, method restrictions",
        },
        {
          name: "Access-Control-Allow-Headers",
          title: "Header Permission",
          description: "Specifies which headers can be used in cross-origin requests.",
          example:
            "Access-Control-Allow-Headers: Content-Type, Authorization\nAccess-Control-Allow-Headers: X-Custom-Header, Accept",
          useCase: "Custom header support, authentication headers",
        },
        {
          name: "Access-Control-Max-Age",
          title: "Preflight Cache Duration",
          description: "Specifies how long preflight request results can be cached.",
          example: "Access-Control-Max-Age: 86400\nAccess-Control-Max-Age: 3600",
          useCase: "Preflight optimization, reducing CORS overhead",
        },
      ],
    },
    {
      title: "API-Specific Headers",
      description: "Headers commonly used in API responses for rate limiting and pagination.",
      items: [
        {
          name: "X-Rate-Limit-Limit",
          title: "Rate Limit Maximum",
          description: "Maximum number of requests allowed in the current time window.",
          example: "X-Rate-Limit-Limit: 1000\nX-Rate-Limit-Limit: 100",
          useCase: "Rate limiting information, API quota communication",
        },
        {
          name: "X-Rate-Limit-Remaining",
          title: "Remaining Requests",
          description: "Number of requests remaining in the current time window.",
          example: "X-Rate-Limit-Remaining: 999\nX-Rate-Limit-Remaining: 0",
          useCase: "Client rate limiting, request throttling",
        },
        {
          name: "X-Rate-Limit-Reset",
          title: "Reset Time",
          description: "Time when the rate limit window resets (Unix timestamp or seconds).",
          example: "X-Rate-Limit-Reset: 1640995200\nX-Rate-Limit-Reset: 3600",
          useCase: "Rate limit recovery time, client retry logic",
        },
        {
          name: "Link",
          title: "Pagination Links",
          description: "Provides pagination links for navigating through large result sets.",
          example:
            'Link: <https://api.example.com/users?page=2>; rel="next", <https://api.example.com/users?page=10>; rel="last"',
          useCase: "API pagination, result set navigation",
        },
      ],
    },
  ],
  bestPractices: [
    "Always include appropriate Content-Type headers for your response format",
    "Use caching headers to improve performance and reduce server load",
    "Implement security headers to protect against common web vulnerabilities",
    "Configure CORS headers properly for cross-origin API access",
    "Include rate limiting headers to help clients manage their request frequency",
    "Use ETags for efficient cache validation and conditional requests",
    "Set appropriate cache directives based on data sensitivity and update frequency",
    "Include pagination headers for large result sets to improve user experience",
  ],
}
