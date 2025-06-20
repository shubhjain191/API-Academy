export const errorHandlingData = {
  title: "Error Handling",
  description: "Best practices for handling and communicating API errors.",
  sections: [
    {
      title: "Error Response Structure",
      description: "Consistent format for error responses.",
      items: [
        {
          name: "Standard Format",
          description: "Use consistent error response structure.",
          example: '{ "error": { "code": "INVALID_INPUT", "message": "Email is required" } }',
        },
        {
          name: "Error Codes",
          description: "Machine-readable error identifiers.",
          example: "USER_NOT_FOUND, INVALID_CREDENTIALS, RATE_LIMIT_EXCEEDED",
        },
        {
          name: "Detailed Messages",
          description: "Human-readable error descriptions.",
          example: "The email address format is invalid. Please provide a valid email.",
        },
        {
          name: "Field-Level Errors",
          description: "Specific errors for form validation.",
          example: '{ "errors": { "email": ["Email is required"], "password": ["Too short"] } }',
        },
      ],
    },
    {
      title: "Error Categories",
      description: "Different types of errors and how to handle them.",
      items: [
        {
          name: "Validation Errors",
          description: "Input data doesn't meet requirements.",
          example: "400 Bad Request with validation details",
        },
        {
          name: "Authentication Errors",
          description: "Issues with user credentials or tokens.",
          example: "401 Unauthorized with authentication challenge",
        },
        {
          name: "Authorization Errors",
          description: "User lacks permission for requested resource.",
          example: "403 Forbidden with permission details",
        },
        {
          name: "Server Errors",
          description: "Internal server issues.",
          example: "500 Internal Server Error with error ID for tracking",
        },
      ],
    },
  ],
}
