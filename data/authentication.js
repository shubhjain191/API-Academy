export const authenticationData = {
  title: "Authentication Methods",
  description: "Different approaches to authenticate API requests and secure your endpoints.",
  sections: [
    {
      title: "API Key Authentication",
      description: "Simple authentication using API keys.",
      content:
        "API keys are simple tokens that identify the calling application. They're easy to implement but should be kept secure and rotated regularly.",
      items: [
        {
          name: "Header-based",
          description: "API key sent in request header.",
          example: "X-API-Key: your-api-key-here",
        },
        {
          name: "Query Parameter",
          description: "API key sent as URL parameter.",
          example: "GET /api/data?api_key=your-api-key",
        },
      ],
    },
    {
      title: "Bearer Token (JWT)",
      description: "Token-based authentication using JSON Web Tokens.",
      items: [
        {
          name: "JWT Structure",
          description: "Header.Payload.Signature format.",
          example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        },
        {
          name: "Authorization Header",
          description: "Standard way to send JWT tokens.",
          example: "Authorization: Bearer <token>",
        },
      ],
    },
    {
      title: "OAuth 2.0",
      description: "Industry-standard authorization framework.",
      items: [
        {
          name: "Authorization Code",
          description: "Most secure flow for web applications.",
          example: "Redirect to /oauth/authorize",
        },
        {
          name: "Client Credentials",
          description: "For server-to-server communication.",
          example: "POST /oauth/token with client credentials",
        },
      ],
    },
  ],
}
