export const securityData = {
  title: "API Security",
  description: "Best practices and techniques for securing your APIs.",
  sections: [
    {
      title: "Input Validation",
      description: "Validate all incoming data to prevent attacks.",
      items: [
        {
          name: "Schema Validation",
          description: "Validate request structure against predefined schema.",
          example: "Use JSON Schema or similar validation libraries",
        },
        {
          name: "Sanitization",
          description: "Clean input data to prevent injection attacks.",
          example: "Remove or escape special characters",
        },
      ],
    },
    {
      title: "HTTPS & Encryption",
      description: "Secure data transmission.",
      items: [
        {
          name: "TLS/SSL",
          description: "Always use HTTPS for API endpoints.",
          example: "https://api.example.com/v1/users",
        },
        {
          name: "Data Encryption",
          description: "Encrypt sensitive data at rest and in transit.",
          example: "Use AES-256 for data encryption",
        },
      ],
    },
    {
      title: "Security Headers",
      description: "HTTP headers that enhance security.",
      items: [
        {
          name: "CORS",
          description: "Control cross-origin requests.",
          example: "Access-Control-Allow-Origin: https://myapp.com",
        },
        {
          name: "Content Security Policy",
          description: "Prevent XSS attacks.",
          example: "Content-Security-Policy: default-src 'self'",
        },
      ],
    },
  ],
}
