export const quickRevisionData = {
  title: "Quick Revision",
  description: "Concise summaries of key API concepts for quick review and revision.",
  overview:
    "Quick revision notes covering essential API concepts, patterns, and best practices. Perfect for last-minute review before interviews or refreshing knowledge.",
  sections: [
    {
      title: "HTTP Fundamentals",
      items: [
        {
          topic: "HTTP Methods",
          summary:
            "GET (retrieve), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove), HEAD (headers only), OPTIONS (allowed methods)",
        },
        {
          topic: "Status Codes",
          summary:
            "2xx Success (200 OK, 201 Created), 3xx Redirection (301 Moved), 4xx Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found), 5xx Server Error (500 Internal Error)",
        },
        {
          topic: "Headers",
          summary:
            "Content-Type (data format), Authorization (credentials), Accept (preferred format), Cache-Control (caching), CORS headers (cross-origin)",
        },
      ],
    },
    {
      title: "API Design",
      items: [
        {
          topic: "REST Principles",
          summary: "Stateless, Client-Server, Cacheable, Uniform Interface, Layered System, Code on Demand (optional)",
        },
        {
          topic: "Resource Naming",
          summary:
            "Use nouns not verbs, plural for collections (/users), hierarchical (/users/123/posts), consistent naming conventions",
        },
        {
          topic: "URL Structure",
          summary:
            "Collection: GET /users, Resource: GET /users/123, Nested: GET /users/123/posts, Query params for filtering: ?status=active",
        },
      ],
    },
    {
      title: "Authentication & Security",
      items: [
        {
          topic: "Auth Methods",
          summary: "API Keys (simple), OAuth 2.0 (delegated), JWT (stateless tokens), Basic Auth (username/password)",
        },
        {
          topic: "Security Best Practices",
          summary: "HTTPS only, input validation, rate limiting, CORS configuration, security headers, regular audits",
        },
        {
          topic: "OAuth 2.0 Flows",
          summary:
            "Authorization Code (web apps), Client Credentials (server-to-server), Implicit (deprecated), Resource Owner Password (legacy)",
        },
      ],
    },
    {
      title: "Performance & Scalability",
      items: [
        {
          topic: "Caching",
          summary:
            "HTTP caching (Cache-Control, ETags), Application caching (Redis), Database caching, CDN for static content",
        },
        {
          topic: "Pagination",
          summary:
            "Offset-based (?offset=20&limit=10), Cursor-based (?cursor=abc&limit=10), Page-based (?page=2&size=10)",
        },
        {
          topic: "Rate Limiting",
          summary:
            "Token bucket, Fixed window, Sliding window, Leaky bucket algorithms. Headers: X-RateLimit-Limit, X-RateLimit-Remaining",
        },
      ],
    },
    {
      title: "Error Handling",
      items: [
        {
          topic: "Error Response Format",
          summary: 'Consistent structure: {"error": {"code": "ERROR_CODE", "message": "Description", "details": []}}',
        },
        {
          topic: "Error Types",
          summary:
            "Validation errors (400), Authentication (401), Authorization (403), Not found (404), Server errors (500)",
        },
        {
          topic: "Best Practices",
          summary:
            "Use appropriate status codes, provide helpful messages, include error codes, log errors, don't expose sensitive info",
        },
      ],
    },
    {
      title: "API Versioning",
      items: [
        {
          topic: "Versioning Strategies",
          summary:
            "URL versioning (/v1/users), Header versioning (Accept: application/vnd.api+json;version=1), Query param (?version=1)",
        },
        {
          topic: "Best Practices",
          summary: "Semantic versioning, support multiple versions, provide migration guides, deprecation notices",
        },
      ],
    },
    {
      title: "Testing",
      items: [
        {
          topic: "Testing Types",
          summary:
            "Unit tests (individual functions), Integration tests (component interaction), Contract tests (API agreements), E2E tests (full workflow)",
        },
        {
          topic: "Testing Tools",
          summary: "Postman (manual/automated), Jest/Mocha (JavaScript), REST Assured (Java), Artillery (load testing)",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          topic: "Documentation Types",
          summary: "Getting started guide, API reference, tutorials, code examples, error reference",
        },
        {
          topic: "Tools",
          summary:
            "OpenAPI/Swagger (specification), Postman (collections), GitBook (wiki-style), custom sites (Docusaurus)",
        },
      ],
    },
    {
      title: "Monitoring",
      items: [
        {
          topic: "Key Metrics",
          summary: "Response time, error rate, throughput (RPS), availability (uptime %), resource utilization",
        },
        {
          topic: "Monitoring Tools",
          summary:
            "APM (New Relic, Datadog), Uptime monitoring (Pingdom), Custom (Prometheus + Grafana), Log aggregation (ELK stack)",
        },
      ],
    },
    {
      title: "Architecture Patterns",
      items: [
        {
          topic: "Microservices",
          summary:
            "Small independent services, API Gateway, service discovery, circuit breakers, event-driven communication",
        },
        {
          topic: "API Gateway",
          summary:
            "Single entry point, request routing, authentication, rate limiting, request transformation, monitoring",
        },
        {
          topic: "Event-Driven",
          summary: "Asynchronous communication, event streaming, webhooks, message queues, eventual consistency",
        },
      ],
    },
  ],
}
