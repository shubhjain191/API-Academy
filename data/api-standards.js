export const apiStandardsData = {
  title: "API Standards",
  description: "Industry standards, specifications, and best practices for API design and implementation.",
  overview:
    "API standards provide guidelines and specifications that ensure consistency, interoperability, and quality across different APIs. Following established standards helps create APIs that are easier to understand, integrate, and maintain.",
  keyConcepts: [
    {
      term: "Specification",
      definition: "Formal document that defines the structure and behavior of an API",
    },
    {
      term: "Interoperability",
      definition: "The ability of different systems to work together through standardized interfaces",
    },
    {
      term: "Compliance",
      definition: "Adherence to established standards and specifications",
    },
    {
      term: "Protocol",
      definition: "Set of rules governing the exchange of data between systems",
    },
  ],
  sections: [
    {
      title: "REST Standards",
      description: "Standards and principles for RESTful API design.",
      items: [
        {
          name: "HTTP/1.1 RFC 7231",
          title: "HTTP Protocol Standard",
          description: "Defines HTTP methods, status codes, and headers for web communication.",
          example: "GET /api/users HTTP/1.1\nHost: api.example.com\nAccept: application/json",
          useCase: "Web APIs, RESTful services, HTTP-based communication",
        },
        {
          name: "URI RFC 3986",
          title: "Uniform Resource Identifier",
          description: "Standard for naming and addressing resources on the web.",
          example: "https://api.example.com/v1/users/123/posts?limit=10",
          useCase: "Resource identification, URL structure, web addressing",
        },
        {
          name: "JSON RFC 7159",
          title: "JavaScript Object Notation",
          description: "Lightweight data interchange format standard.",
          example: '{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com"\n}',
          useCase: "Data exchange, API responses, configuration files",
        },
        {
          name: "HTTP/2 RFC 7540",
          title: "HTTP Version 2",
          description: "Enhanced HTTP protocol with multiplexing and server push capabilities.",
          example: "Multiplexed streams\nServer push\nHeader compression\nBinary framing",
          useCase: "Performance optimization, modern web applications, efficient communication",
        },
      ],
    },
    {
      title: "API Documentation Standards",
      description: "Standards for documenting and describing APIs.",
      items: [
        {
          name: "OpenAPI 3.0",
          title: "API Specification Standard",
          description: "Comprehensive standard for describing REST APIs with machine-readable format.",
          example:
            "openapi: 3.0.0\ninfo:\n  title: User API\n  version: 1.0.0\npaths:\n  /users:\n    get:\n      summary: List users",
          useCase: "API documentation, code generation, testing automation",
        },
        {
          name: "JSON Schema",
          title: "Data Validation Standard",
          description: "Standard for describing and validating JSON data structures.",
          example:
            '{\n  "type": "object",\n  "properties": {\n    "name": {"type": "string"},\n    "age": {"type": "integer"}\n  }\n}',
          useCase: "Data validation, API contracts, documentation",
        },
        {
          name: "API Blueprint",
          title: "Markdown-Based Documentation",
          description: "High-level API description language using Markdown syntax.",
          example: "# GET /users\nRetrieve a list of users\n\n+ Response 200 (application/json)",
          useCase: "Human-readable documentation, design-first approach, collaboration",
        },
      ],
    },
    {
      title: "Security Standards",
      description: "Standards for securing APIs and protecting data.",
      items: [
        {
          name: "OAuth 2.0 RFC 6749",
          title: "Authorization Framework",
          description: "Standard for secure authorization and access delegation.",
          example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          useCase: "Third-party access, user authorization, secure delegation",
        },
        {
          name: "JWT RFC 7519",
          title: "JSON Web Tokens",
          description: "Standard for securely transmitting information as JSON objects.",
          example: "Header.Payload.Signature\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.signature",
          useCase: "Stateless authentication, information exchange, claims-based security",
        },
        {
          name: "TLS 1.3 RFC 8446",
          title: "Transport Layer Security",
          description: "Cryptographic protocol for secure communication over networks.",
          example: "https://api.example.com/users\n// All communication encrypted with TLS",
          useCase: "Data encryption, secure communication, privacy protection",
        },
        {
          name: "CORS W3C Standard",
          title: "Cross-Origin Resource Sharing",
          description: "Standard for controlling cross-origin HTTP requests in web browsers.",
          example: "Access-Control-Allow-Origin: https://myapp.com\nAccess-Control-Allow-Methods: GET, POST",
          useCase: "Web security, cross-origin requests, browser protection",
        },
      ],
    },
    {
      title: "Data Format Standards",
      description: "Standards for data representation and exchange.",
      items: [
        {
          name: "ISO 8601",
          title: "Date and Time Format",
          description: "International standard for date and time representation.",
          example: "2023-10-21T14:30:00Z\n2023-10-21T14:30:00+02:00",
          useCase: "Timestamp formatting, international applications, data consistency",
        },
        {
          name: "RFC 5322",
          title: "Email Address Format",
          description: "Standard format for email addresses in internet messages.",
          example: "user@example.com\nfirst.last+tag@domain.co.uk",
          useCase: "Email validation, user registration, contact information",
        },
        {
          name: "ISO 4217",
          title: "Currency Codes",
          description: "International standard for currency code representation.",
          example: "USD (US Dollar)\nEUR (Euro)\nGBP (British Pound)",
          useCase: "Financial APIs, e-commerce, international transactions",
        },
        {
          name: "ISO 3166",
          title: "Country Codes",
          description: "International standard for country and subdivision codes.",
          example: "US (United States)\nGB (United Kingdom)\nDE (Germany)",
          useCase: "Geographic data, localization, international applications",
        },
      ],
    },
  ],
  bestPractices: [
    "Follow established HTTP standards for status codes and methods",
    "Use OpenAPI specification for comprehensive API documentation",
    "Implement proper security standards like OAuth 2.0 and TLS",
    "Follow ISO standards for date, time, and geographic data formats",
    "Use semantic versioning for API version management",
    "Implement CORS properly for web application security",
    "Follow JSON standards for consistent data representation",
    "Use standard error response formats across your APIs",
    "Implement proper content negotiation using Accept headers",
    "Follow REST principles for resource-oriented API design",
  ],
}
