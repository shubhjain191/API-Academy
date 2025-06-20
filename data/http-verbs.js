export const httpVerbsData = {
  title: "HTTP Verbs",
  description: "Understanding the different HTTP methods and their purposes in RESTful APIs.",
  overview:
    "HTTP verbs (also called HTTP methods) define the action to be performed on a resource. They are the foundation of RESTful API design and tell the server what operation the client wants to perform.",
  keyConcepts: [
    {
      term: "Idempotent",
      definition: "Multiple identical requests have the same effect as a single request",
    },
    {
      term: "Safe Methods",
      definition: "Methods that don't modify server state (read-only operations)",
    },
    {
      term: "CRUD Operations",
      definition: "Create, Read, Update, Delete - basic operations on data",
    },
    {
      term: "Request Body",
      definition: "Data sent with the request, typically in POST/PUT/PATCH methods",
    },
  ],
  sections: [
    {
      title: "Primary HTTP Methods",
      description: "The most commonly used HTTP verbs in API development.",
      items: [
        {
          code: "GET",
          title: "Retrieve Data",
          description: "Used to retrieve data from a server. Should be safe and idempotent - no side effects.",
          example: "GET /api/users/123\nGET /api/products?category=electronics",
          useCase: "Fetching user profiles, product listings, search results",
        },
        {
          code: "POST",
          title: "Create Resource",
          description:
            "Used to create new resources on the server. Not idempotent - multiple calls create multiple resources.",
          example:
            'POST /api/users\nContent-Type: application/json\n\n{\n  "name": "John Doe",\n  "email": "john@example.com"\n}',
          useCase: "Creating new users, submitting forms, uploading files",
        },
        {
          code: "PUT",
          title: "Update/Replace",
          description: "Used to update or completely replace an entire resource. Idempotent operation.",
          example:
            'PUT /api/users/123\nContent-Type: application/json\n\n{\n  "name": "John Smith",\n  "email": "johnsmith@example.com"\n}',
          useCase: "Updating user profiles, replacing configuration settings",
        },
        {
          code: "PATCH",
          title: "Partial Update",
          description: "Used to partially update a resource with only the changed fields.",
          example: 'PATCH /api/users/123\nContent-Type: application/json\n\n{\n  "email": "newemail@example.com"\n}',
          useCase: "Updating specific fields, toggling status, incremental changes",
        },
        {
          code: "DELETE",
          title: "Remove Resource",
          description: "Used to delete a resource from the server. Idempotent operation.",
          example: "DELETE /api/users/123\nDELETE /api/posts/456",
          useCase: "Removing user accounts, deleting posts, clearing cache",
        },
      ],
    },
    {
      title: "Additional HTTP Methods",
      description: "Less common but useful HTTP methods for specific scenarios.",
      items: [
        {
          code: "HEAD",
          title: "Get Headers Only",
          description:
            "Similar to GET but returns only headers, no response body. Useful for checking resource existence.",
          example: "HEAD /api/users/123\n# Returns headers only, no body",
          useCase: "Checking if resource exists, getting metadata, cache validation",
        },
        {
          code: "OPTIONS",
          title: "Get Allowed Methods",
          description: "Returns the HTTP methods supported by the server for a specific resource.",
          example: "OPTIONS /api/users\n# Response: Allow: GET, POST, PUT, DELETE",
          useCase: "CORS preflight requests, API discovery, method validation",
        },
        {
          code: "CONNECT",
          title: "Establish Tunnel",
          description: "Establishes a tunnel to the server, typically used for HTTPS through proxies.",
          example: "CONNECT example.com:443 HTTP/1.1",
          useCase: "Proxy connections, SSL tunneling",
        },
        {
          code: "TRACE",
          title: "Diagnostic Tool",
          description: "Performs a message loop-back test along the path to the target resource.",
          example: "TRACE /api/users",
          useCase: "Debugging, network diagnostics (rarely used in production)",
        },
      ],
    },
    {
      title: "Method Properties",
      description: "Understanding the characteristics of different HTTP methods.",
      content:
        "HTTP methods have different properties that affect how they should be used. Safe methods (GET, HEAD, OPTIONS) don't modify server state. Idempotent methods (GET, PUT, DELETE, HEAD, OPTIONS) can be called multiple times with the same result. Understanding these properties is crucial for proper API design and client implementation.",
    },
  ],
  bestPractices: [
    "Use GET for retrieving data, never for operations that change server state",
    "Use POST for creating resources and non-idempotent operations",
    "Use PUT for complete resource replacement, PATCH for partial updates",
    "Make sure DELETE operations are idempotent and safe to retry",
    "Use appropriate status codes with each method (201 for POST success, 204 for DELETE success)",
    "Include proper Content-Type headers when sending request bodies",
    "Design URLs as nouns (resources) and use HTTP methods as verbs (actions)",
  ],
}
