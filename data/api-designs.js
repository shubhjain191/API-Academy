export const apiDesignsData = {
  title: "API Designs",
  description: "Comprehensive guide to different API design approaches and architectural styles.",
  overview:
    "API design encompasses the architectural decisions, patterns, and principles used to create effective, maintainable, and scalable application programming interfaces. Different design approaches serve different use cases and requirements.",
  keyConcepts: [
    {
      term: "API Paradigm",
      definition: "The fundamental approach or style used to design and structure an API",
    },
    {
      term: "Interface Contract",
      definition: "The agreed-upon specification that defines how clients interact with the API",
    },
    {
      term: "Data Exchange Format",
      definition: "The format used to structure data in API requests and responses (JSON, XML, etc.)",
    },
    {
      term: "Protocol",
      definition: "The communication protocol used for API interactions (HTTP, WebSocket, gRPC, etc.)",
    },
  ],
  sections: [
    {
      title: "REST (Representational State Transfer)",
      description: "The most popular architectural style for web APIs, based on HTTP and stateless communication.",
      items: [
        {
          name: "Resource-Based",
          title: "Resource-Centric Design",
          description: "APIs are designed around resources (nouns) rather than actions (verbs).",
          example: "GET /api/users/123\nPOST /api/orders\nPUT /api/products/456",
          useCase: "Web APIs, CRUD operations, resource management systems",
        },
        {
          name: "Stateless",
          title: "No Server State",
          description: "Each request contains all information needed to process it. Server doesn't store client state.",
          example: "Authorization: Bearer token123\n# Each request includes auth token",
          useCase: "Scalable web services, microservices, distributed systems",
        },
        {
          name: "HTTP Methods",
          title: "Standard HTTP Verbs",
          description: "Uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations.",
          example:
            "GET /users - List users\nPOST /users - Create user\nPUT /users/123 - Update user\nDELETE /users/123 - Delete user",
          useCase: "Web applications, mobile apps, standard CRUD operations",
        },
      ],
    },
    {
      title: "GraphQL",
      description: "A query language and runtime for APIs that allows clients to request exactly the data they need.",
      items: [
        {
          name: "Single Endpoint",
          title: "Unified API Gateway",
          description: "All operations go through a single endpoint, typically /graphql.",
          example: 'POST /graphql\n{\n  "query": "{ user(id: 123) { name email } }"\n}',
          useCase: "Complex data requirements, mobile apps, flexible queries",
        },
        {
          name: "Type System",
          title: "Strong Schema Definition",
          description: "Uses a strong type system to define the structure of data and available operations.",
          example: "type User {\n  id: ID!\n  name: String!\n  email: String!\n}",
          useCase: "Type safety, API documentation, development tooling",
        },
        {
          name: "Flexible Queries",
          title: "Client-Specified Data",
          description: "Clients can specify exactly what data they need, reducing over-fetching.",
          example: 'query {\n  user(id: "123") {\n    name\n    posts {\n      title\n    }\n  }\n}',
          useCase: "Mobile apps, bandwidth optimization, complex data relationships",
        },
      ],
    },
    {
      title: "RPC (Remote Procedure Call)",
      description: "API design that focuses on calling remote functions or procedures.",
      items: [
        {
          name: "Function-Oriented",
          title: "Procedure Calls",
          description: "APIs are designed around function calls rather than resources.",
          example: "POST /api/calculateTax\nPOST /api/sendEmail\nPOST /api/processPayment",
          useCase: "Action-oriented operations, business logic APIs, internal services",
        },
        {
          name: "gRPC",
          title: "High-Performance RPC",
          description: "Google's RPC framework using Protocol Buffers and HTTP/2.",
          example: "service UserService {\n  rpc GetUser(UserRequest) returns (UserResponse);\n}",
          useCase: "Microservices, high-performance systems, internal APIs",
        },
      ],
    },
  ],
  bestPractices: [
    "Choose the right design approach based on your use case and requirements",
    "Consider your client needs - mobile apps may benefit from GraphQL's flexibility",
    "REST is great for simple CRUD operations and resource management",
    "Use RPC for action-oriented APIs and internal service communication",
    "Consider performance requirements when choosing between designs",
    "Maintain consistency within your chosen design approach",
    "Document your API design decisions and patterns",
  ],
}
