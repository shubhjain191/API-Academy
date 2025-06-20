export const interviewPrepData = {
  title: "Interview Prep",
  description: "Comprehensive collection of API-related interview questions categorized by difficulty level.",
  overview:
    "API interview questions covering fundamental concepts, design principles, security, performance, and real-world scenarios. Questions are categorized by difficulty to help candidates prepare effectively.",
  categories: {
    basic: {
      title: "Basic Level",
      description: "Fundamental API concepts and basic understanding",
      questions: [
        {
          question: "What is an API and why is it important?",
          answer:
            "An API (Application Programming Interface) is a set of protocols, routines, and tools that allows different software applications to communicate with each other. APIs are important because they enable integration between systems, promote code reusability, and allow developers to build on existing services.",
          topics: ["API Fundamentals", "Software Architecture"],
        },
        {
          question: "What is the difference between REST and SOAP?",
          answer:
            "REST is an architectural style that uses HTTP methods and is stateless, lightweight, and uses JSON/XML. SOAP is a protocol that uses XML messaging, has built-in error handling, and supports transactions. REST is simpler and more popular for web APIs, while SOAP is more suitable for enterprise applications requiring security and transactions.",
          topics: ["REST", "SOAP", "API Protocols"],
        },
        {
          question: "What are the main HTTP methods used in REST APIs?",
          answer:
            "The main HTTP methods are: GET (retrieve data), POST (create new resources), PUT (update/replace entire resource), PATCH (partial update), DELETE (remove resource), HEAD (get headers only), and OPTIONS (get allowed methods).",
          topics: ["HTTP Methods", "REST"],
        },
        {
          question: "What is the difference between PUT and PATCH?",
          answer:
            "PUT is used to update or replace an entire resource, while PATCH is used for partial updates. PUT is idempotent (multiple calls have the same effect), while PATCH may or may not be idempotent depending on implementation.",
          topics: ["HTTP Methods", "REST"],
        },
        {
          question: "What are HTTP status codes and give examples?",
          answer:
            "HTTP status codes indicate the result of an HTTP request. Examples: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Server Error). They're grouped into 1xx (informational), 2xx (success), 3xx (redirection), 4xx (client error), 5xx (server error).",
          topics: ["HTTP Status Codes", "Error Handling"],
        },
        {
          question: "What is JSON and why is it popular for APIs?",
          answer:
            "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It's popular for APIs because it's human-readable, language-independent, has a simple syntax, smaller payload than XML, and is natively supported by JavaScript.",
          topics: ["Data Formats", "JSON"],
        },
        {
          question: "What is API authentication?",
          answer:
            "API authentication is the process of verifying the identity of users or applications accessing an API. Common methods include API keys, OAuth, JWT tokens, and basic authentication. It ensures only authorized users can access protected resources.",
          topics: ["Authentication", "Security"],
        },
        {
          question: "What is the difference between authentication and authorization?",
          answer:
            "Authentication verifies 'who you are' (identity verification), while authorization determines 'what you can do' (permission verification). Authentication comes first, then authorization checks if the authenticated user has permission to access specific resources.",
          topics: ["Authentication", "Authorization", "Security"],
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level",
      description: "Design patterns, best practices, and practical implementation",
      questions: [
        {
          question: "How would you design a RESTful API for a blog system?",
          answer:
            "Design would include: GET /posts (list posts), POST /posts (create post), GET /posts/{id} (get specific post), PUT /posts/{id} (update post), DELETE /posts/{id} (delete post), GET /posts/{id}/comments (get comments), POST /posts/{id}/comments (add comment). Include pagination, filtering, and proper status codes.",
          topics: ["API Design", "REST", "Resource Modeling"],
        },
        {
          question: "What is API versioning and what are different strategies?",
          answer:
            "API versioning manages changes to APIs over time. Strategies include: URL versioning (/v1/users), header versioning (Accept: application/vnd.api+json;version=1), query parameter (?version=1), and content negotiation. Each has trade-offs in terms of caching, simplicity, and client implementation.",
          topics: ["API Versioning", "API Evolution"],
        },
        {
          question: "How do you handle errors in APIs?",
          answer:
            'Error handling should include: appropriate HTTP status codes, consistent error response format, descriptive error messages, error codes for programmatic handling, logging for debugging, and documentation of all possible errors. Example format: {"error": {"code": "VALIDATION_ERROR", "message": "Email is required"}}',
          topics: ["Error Handling", "API Design"],
        },
        {
          question: "What is pagination and how do you implement it?",
          answer:
            "Pagination divides large datasets into smaller chunks. Implementation methods: offset-based (?offset=20&limit=10), cursor-based (?cursor=abc123&limit=10), and page-based (?page=2&size=10). Include metadata like total count, next/previous links, and use Link headers for navigation.",
          topics: ["Pagination", "Performance", "Data Management"],
        },
        {
          question: "What is rate limiting and why is it important?",
          answer:
            "Rate limiting controls the number of requests a client can make in a given time period. It's important for preventing abuse, ensuring fair usage, protecting server resources, and maintaining service quality. Implement using algorithms like token bucket, sliding window, or fixed window.",
          topics: ["Rate Limiting", "Security", "Performance"],
        },
        {
          question: "Explain CORS and why it's needed?",
          answer:
            "CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web pages to access resources from different domains. It's needed because browsers enforce same-origin policy. CORS headers like Access-Control-Allow-Origin control which domains can access the API.",
          topics: ["CORS", "Security", "Web APIs"],
        },
        {
          question: "What are webhooks and when would you use them?",
          answer:
            "Webhooks are HTTP callbacks that notify applications when events occur. Use them for real-time notifications, event-driven architectures, and reducing polling. Examples: payment confirmations, user registrations, or data updates. Implement with retry logic, signature verification, and idempotency.",
          topics: ["Webhooks", "Event-Driven Architecture", "Real-time"],
        },
        {
          question: "How do you secure an API?",
          answer:
            "API security involves: HTTPS for encryption, authentication (OAuth, JWT), authorization (RBAC), input validation, rate limiting, CORS configuration, security headers, regular security audits, and monitoring for suspicious activity. Follow OWASP API security guidelines.",
          topics: ["API Security", "Authentication", "Best Practices"],
        },
      ],
    },
    advanced: {
      title: "Advanced Level",
      description: "Architecture, scalability, and complex scenarios",
      questions: [
        {
          question: "How would you design a microservices API architecture?",
          answer:
            "Design includes: API Gateway for routing and cross-cutting concerns, service discovery for dynamic routing, circuit breakers for fault tolerance, distributed tracing for monitoring, event-driven communication, database per service, and proper service boundaries based on business domains.",
          topics: ["Microservices", "Architecture", "Scalability"],
        },
        {
          question: "What is GraphQL and how does it compare to REST?",
          answer:
            "GraphQL is a query language that allows clients to request specific data. Compared to REST: single endpoint vs multiple endpoints, client-specified queries vs fixed responses, strong type system, real-time subscriptions, but more complex caching and learning curve.",
          topics: ["GraphQL", "API Design", "Query Languages"],
        },
        {
          question: "How do you handle distributed transactions in microservices?",
          answer:
            "Use patterns like Saga pattern (choreography or orchestration), Two-Phase Commit (2PC), or eventual consistency. Implement compensation actions for rollbacks, use event sourcing for audit trails, and design for idempotency. Avoid distributed transactions when possible by proper service boundaries.",
          topics: ["Distributed Systems", "Transactions", "Microservices"],
        },
        {
          question: "How would you implement API caching strategy?",
          answer:
            "Multi-level caching: HTTP caching (Cache-Control, ETags), CDN caching for static content, application-level caching (Redis/Memcached), database query caching. Consider cache invalidation strategies, cache warming, and cache-aside vs write-through patterns.",
          topics: ["Caching", "Performance", "Scalability"],
        },
        {
          question: "What is API Gateway and what problems does it solve?",
          answer:
            "API Gateway is a server that acts as an entry point for microservices. It solves: request routing, authentication/authorization, rate limiting, request/response transformation, monitoring, load balancing, and protocol translation. Examples: Kong, AWS API Gateway, Zuul.",
          topics: ["API Gateway", "Microservices", "Architecture"],
        },
        {
          question: "How do you monitor and observe APIs in production?",
          answer:
            "Implement: metrics collection (response time, throughput, error rates), distributed tracing, structured logging, health checks, alerting, dashboards, and SLA monitoring. Use tools like Prometheus, Grafana, Jaeger, and implement the four golden signals of monitoring.",
          topics: ["Monitoring", "Observability", "Production"],
        },
        {
          question: "How would you handle API backward compatibility?",
          answer:
            "Strategies include: additive changes only, optional fields, default values, deprecation warnings, multiple API versions, feature flags, and proper communication. Use semantic versioning, provide migration guides, and maintain old versions for reasonable periods.",
          topics: ["Backward Compatibility", "API Evolution", "Versioning"],
        },
        {
          question: "Design a real-time notification system using APIs?",
          answer:
            "Architecture: WebSocket connections for real-time delivery, message queue (Redis/RabbitMQ) for reliability, notification service for routing, user preference management, delivery confirmation, fallback mechanisms (email/SMS), and horizontal scaling with connection pooling.",
          topics: ["Real-time Systems", "WebSockets", "System Design"],
        },
      ],
    },
  },
}
