export const apiDesignPatternsData = {
  title: "API Design Patterns",
  description: "Common patterns and best practices for designing robust and maintainable APIs.",
  overview:
    "API design patterns are proven solutions to common problems in API development. They provide standardized approaches for handling authentication, data pagination, versioning, error handling, and other common API concerns.",
  keyConcepts: [
    {
      term: "Design Pattern",
      definition: "A reusable solution to a commonly occurring problem in API design",
    },
    {
      term: "Resource Modeling",
      definition: "How to structure and represent data entities in your API",
    },
    {
      term: "Request/Response Patterns",
      definition: "Standard ways to structure API requests and responses",
    },
    {
      term: "Cross-Cutting Concerns",
      definition: "Common functionality needed across multiple API endpoints",
    },
  ],
  sections: [
    {
      title: "Resource Patterns",
      description: "Patterns for modeling and organizing API resources effectively.",
      items: [
        {
          name: "Collection + Resource",
          title: "Standard REST Pattern",
          description: "Organize endpoints around collections of resources and individual resources.",
          example:
            "GET /api/users - collection\nGET /api/users/123 - individual resource\nPOST /api/users - create in collection",
          useCase: "CRUD operations, resource management, standard REST APIs",
        },
        {
          name: "Nested Resources",
          title: "Hierarchical Relationships",
          description: "Model parent-child relationships through nested URL structures.",
          example:
            "GET /api/users/123/posts - user's posts\nPOST /api/users/123/posts - create post for user\nGET /api/posts/456/comments - post's comments",
          useCase: "Related data, hierarchical structures, ownership relationships",
        },
        {
          name: "Composite Resources",
          title: "Aggregated Data",
          description: "Combine multiple related resources into a single response.",
          example: "GET /api/users/123/profile\n# Returns user + posts + followers in one response",
          useCase: "Reducing API calls, mobile optimization, dashboard data",
        },
      ],
    },
    {
      title: "Pagination Patterns",
      description: "Patterns for handling large datasets and improving performance.",
      items: [
        {
          name: "Offset-Based",
          title: "Page Number Pagination",
          description: "Use offset and limit parameters to paginate through results.",
          example: "GET /api/users?offset=20&limit=10\n# Skip 20, return next 10",
          useCase: "Simple pagination, known dataset size, page numbers",
        },
        {
          name: "Cursor-Based",
          title: "Stable Pagination",
          description: "Use cursors to paginate through results, more stable for real-time data.",
          example: "GET /api/users?cursor=eyJpZCI6MTIzfQ&limit=10\n# Continue from cursor position",
          useCase: "Real-time data, large datasets, social media feeds",
        },
        {
          name: "Link Header",
          title: "Hypermedia Pagination",
          description: "Provide pagination links in response headers following web standards.",
          example:
            'Link: <https://api.example.com/users?page=2>; rel="next",\n      <https://api.example.com/users?page=5>; rel="last"',
          useCase: "RESTful APIs, standard compliance, client simplicity",
        },
      ],
    },
    {
      title: "Authentication Patterns",
      description: "Common patterns for securing API access and managing user identity.",
      items: [
        {
          name: "Bearer Token",
          title: "Token-Based Auth",
          description: "Use bearer tokens in Authorization header for stateless authentication.",
          example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          useCase: "Stateless APIs, mobile apps, microservices",
        },
        {
          name: "API Key",
          title: "Simple Authentication",
          description: "Use API keys for simple application-level authentication.",
          example: "X-API-Key: your-api-key-here\n# or\nGET /api/data?api_key=your-key",
          useCase: "Simple APIs, internal services, third-party integrations",
        },
        {
          name: "OAuth 2.0",
          title: "Delegated Authorization",
          description: "Use OAuth 2.0 for secure third-party access and user consent.",
          example: "Authorization: Bearer <oauth-access-token>\n# Token obtained through OAuth flow",
          useCase: "Third-party integrations, user consent, social login",
        },
      ],
    },
    {
      title: "Error Handling Patterns",
      description: "Standardized approaches for communicating errors to API clients.",
      items: [
        {
          name: "Problem Details",
          title: "RFC 7807 Standard",
          description: "Use standardized problem details format for error responses.",
          example:
            '{\n  "type": "https://example.com/probs/validation",\n  "title": "Validation Error",\n  "status": 400,\n  "detail": "Email is required"\n}',
          useCase: "Standardized errors, debugging, client error handling",
        },
        {
          name: "Error Codes",
          title: "Machine-Readable Errors",
          description: "Use consistent error codes that clients can programmatically handle.",
          example:
            '{\n  "error": {\n    "code": "VALIDATION_ERROR",\n    "message": "Invalid input data",\n    "fields": ["email", "password"]\n  }\n}',
          useCase: "Client error handling, internationalization, debugging",
        },
      ],
    },
    {
      title: "Caching Patterns",
      description: "Patterns for implementing effective caching strategies in APIs.",
      items: [
        {
          name: "ETags",
          title: "Conditional Requests",
          description: "Use ETags for cache validation and conditional requests.",
          example: 'Response: ETag: "abc123"\nNext request: If-None-Match: "abc123"\nResponse: 304 Not Modified',
          useCase: "Cache validation, bandwidth optimization, conditional updates",
        },
        {
          name: "Cache-Control",
          title: "Cache Directives",
          description: "Use Cache-Control headers to specify caching behavior.",
          example:
            "Cache-Control: public, max-age=3600\n# Cache for 1 hour\nCache-Control: no-cache, no-store\n# Don't cache",
          useCase: "Performance optimization, CDN configuration, cache management",
        },
      ],
    },
  ],
  bestPractices: [
    "Use consistent patterns across your entire API for predictability",
    "Choose pagination patterns based on your data characteristics and use cases",
    "Implement proper error handling with consistent error response formats",
    "Use appropriate authentication patterns based on security requirements",
    "Design URLs that are intuitive and follow REST conventions",
    "Implement caching strategies to improve performance and reduce server load",
    "Version your APIs to maintain backward compatibility",
    "Document your design patterns for team consistency",
  ],
}
