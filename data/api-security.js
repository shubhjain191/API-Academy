export const apiSecurityData = {
  title: "API Security",
  description: "Essential security practices and techniques for protecting APIs from threats and vulnerabilities.",
  overview:
    "API security involves implementing measures to protect APIs from unauthorized access, data breaches, and various attack vectors. It encompasses authentication, authorization, data protection, and monitoring to ensure secure API operations.",
  keyConcepts: [
    {
      term: "Authentication",
      definition: "Verifying the identity of users or applications accessing the API",
    },
    {
      term: "Authorization",
      definition: "Determining what authenticated users are allowed to do",
    },
    {
      term: "Encryption",
      definition: "Protecting data in transit and at rest using cryptographic methods",
    },
    {
      term: "Input Validation",
      definition: "Ensuring all incoming data meets expected format and security requirements",
    },
  ],
  sections: [
    {
      title: "Authentication Methods",
      description: "Different approaches to verify user and application identity.",
      items: [
        {
          name: "API Keys",
          title: "Simple Authentication",
          description: "Basic authentication using unique keys to identify applications.",
          example: "X-API-Key: sk_live_abc123def456\nAuthorization: ApiKey your-api-key",
          useCase: "Simple APIs, internal services, basic access control",
        },
        {
          name: "JWT Tokens",
          title: "JSON Web Tokens",
          description: "Self-contained tokens that carry user information and claims.",
          example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          useCase: "Stateless authentication, microservices, mobile apps",
        },
        {
          name: "OAuth 2.0",
          title: "Delegated Authorization",
          description: "Industry standard for secure third-party access without sharing credentials.",
          example: "Authorization: Bearer <access_token>\n# Token obtained through OAuth flow",
          useCase: "Third-party integrations, social login, user consent",
        },
        {
          name: "Basic Auth",
          title: "Username/Password",
          description: "Simple authentication using base64 encoded username and password.",
          example: "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
          useCase: "Internal APIs, development environments, simple systems",
        },
      ],
    },
    {
      title: "Input Validation & Sanitization",
      description: "Protecting against malicious input and injection attacks.",
      items: [
        {
          name: "Schema Validation",
          title: "Structure Validation",
          description: "Validate request structure against predefined schemas.",
          example:
            '{\n  "type": "object",\n  "properties": {\n    "email": {"type": "string", "format": "email"}\n  }\n}',
          useCase: "Data integrity, preventing malformed requests, API contracts",
        },
        {
          name: "SQL Injection Prevention",
          title: "Database Security",
          description: "Use parameterized queries and input sanitization to prevent SQL injection.",
          example: "// Good: Parameterized query\nSELECT * FROM users WHERE id = ?\n// Bad: String concatenation",
          useCase: "Database queries, user input processing, data retrieval",
        },
        {
          name: "XSS Prevention",
          title: "Cross-Site Scripting",
          description: "Sanitize and escape user input to prevent script injection.",
          example: "// Escape HTML entities\n< becomes &lt;\n> becomes &gt;",
          useCase: "User-generated content, HTML output, web applications",
        },
        {
          name: "Rate Limiting",
          title: "Abuse Prevention",
          description: "Limit request frequency to prevent abuse and DoS attacks.",
          example: "X-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 999\nX-RateLimit-Reset: 1640995200",
          useCase: "API protection, resource management, fair usage",
        },
      ],
    },
    {
      title: "Data Protection",
      description: "Securing sensitive data in transit and at rest.",
      items: [
        {
          name: "HTTPS/TLS",
          title: "Transport Security",
          description: "Encrypt all API communication using HTTPS with strong TLS versions.",
          example: "https://api.example.com/v1/users\n# Always use HTTPS, never HTTP",
          useCase: "Data in transit, preventing eavesdropping, compliance",
        },
        {
          name: "Data Encryption",
          title: "At-Rest Protection",
          description: "Encrypt sensitive data stored in databases and file systems.",
          example: "AES-256 encryption for PII data\nHashed passwords with bcrypt",
          useCase: "Database security, file storage, compliance requirements",
        },
        {
          name: "Sensitive Data Masking",
          title: "Information Hiding",
          description: "Mask or redact sensitive information in API responses and logs.",
          example: '{\n  "creditCard": "****-****-****-1234",\n  "ssn": "***-**-1234"\n}',
          useCase: "PII protection, logging security, compliance",
        },
      ],
    },
    {
      title: "Security Headers",
      description: "HTTP headers that enhance API security.",
      items: [
        {
          name: "CORS Headers",
          title: "Cross-Origin Control",
          description: "Control which domains can access your API from browsers.",
          example: "Access-Control-Allow-Origin: https://myapp.com\nAccess-Control-Allow-Methods: GET, POST",
          useCase: "Browser security, cross-origin requests, web applications",
        },
        {
          name: "Content Security Policy",
          title: "XSS Protection",
          description: "Define trusted sources for content to prevent XSS attacks.",
          example: "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'",
          useCase: "Web security, XSS prevention, content control",
        },
        {
          name: "Security Headers",
          title: "Additional Protection",
          description: "Various headers that enhance overall security posture.",
          example: "X-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nX-XSS-Protection: 1; mode=block",
          useCase: "Browser security, clickjacking prevention, MIME sniffing protection",
        },
      ],
    },
  ],
  bestPractices: [
    "Always use HTTPS for all API endpoints, never plain HTTP",
    "Implement proper authentication and authorization for all endpoints",
    "Validate and sanitize all input data to prevent injection attacks",
    "Use rate limiting to prevent abuse and DoS attacks",
    "Keep security libraries and dependencies up to date",
    "Log security events and monitor for suspicious activity",
    "Implement proper error handling without exposing sensitive information",
    "Use security headers to protect against common web vulnerabilities",
    "Regularly conduct security audits and penetration testing",
    "Follow the principle of least privilege for API access",
  ],
}
