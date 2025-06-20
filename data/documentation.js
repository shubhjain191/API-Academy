export const documentationData = {
  title: "API Documentation",
  description: "Best practices for creating comprehensive API documentation.",
  sections: [
    {
      title: "Documentation Standards",
      description: "Industry standards for API documentation.",
      items: [
        {
          name: "OpenAPI (Swagger)",
          description: "Specification for describing REST APIs.",
          example: "swagger: '3.0.0', info: { title: 'My API', version: '1.0.0' }",
        },
        {
          name: "API Blueprint",
          description: "Markdown-based API documentation format.",
          example: "# GET /users/{id}",
        },
        {
          name: "RAML",
          description: "YAML-based modeling language for APIs.",
          example: "title: My API, version: v1",
        },
        {
          name: "GraphQL Schema",
          description: "Self-documenting schema definition.",
          example: "type Query { user(id: ID!): User }",
        },
      ],
    },
    {
      title: "Essential Documentation Elements",
      description: "Key components of good API documentation.",
      items: [
        {
          name: "Getting Started Guide",
          description: "Quick start tutorial for new developers.",
          example: "Authentication setup, first API call, common use cases",
        },
        {
          name: "Endpoint Reference",
          description: "Detailed description of each API endpoint.",
          example: "URL, HTTP method, parameters, request/response examples",
        },
        {
          name: "Code Examples",
          description: "Sample code in multiple programming languages.",
          example: "curl, JavaScript, Python, PHP examples",
        },
        {
          name: "Error Reference",
          description: "Complete list of possible error codes and meanings.",
          example: "Error code, HTTP status, description, resolution steps",
        },
      ],
    },
  ],
}
