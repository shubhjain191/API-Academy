export const apiArchitecturesData = {
  title: "API Architectures",
  description: "Different architectural patterns and approaches for building scalable API systems.",
  overview:
    "API architecture refers to the structural design and organization of API systems, including how components interact, data flows, and system boundaries are defined. The right architecture ensures scalability, maintainability, and performance.",
  keyConcepts: [
    {
      term: "Monolithic Architecture",
      definition: "Single deployable unit containing all API functionality",
    },
    {
      term: "Microservices",
      definition: "Distributed architecture with small, independent services",
    },
    {
      term: "Service Mesh",
      definition: "Infrastructure layer for service-to-service communication",
    },
    {
      term: "API Gateway",
      definition: "Single entry point that manages and routes API requests",
    },
  ],
  sections: [
    {
      title: "Monolithic Architecture",
      description: "Traditional approach where all API functionality is contained in a single application.",
      items: [
        {
          name: "Single Deployment",
          title: "Unified Application",
          description: "All API endpoints and business logic are deployed as one unit.",
          example: "Single JAR/WAR file containing all endpoints:\n/api/users\n/api/orders\n/api/products",
          useCase: "Small to medium applications, rapid prototyping, simple deployment",
        },
        {
          name: "Shared Database",
          title: "Centralized Data",
          description: "All API endpoints typically share the same database and data models.",
          example: "All services access the same PostgreSQL database",
          useCase: "ACID transactions, data consistency, simple data management",
        },
        {
          name: "Easy Development",
          title: "Simple Local Setup",
          description: "Easy to develop, test, and debug locally since everything runs together.",
          example: "npm start - runs entire API locally on port 3000",
          useCase: "Small teams, rapid development, learning projects",
        },
      ],
    },
    {
      title: "Microservices Architecture",
      description: "Distributed architecture where functionality is split into small, independent services.",
      items: [
        {
          name: "Service Independence",
          title: "Autonomous Services",
          description: "Each service can be developed, deployed, and scaled independently.",
          example: "User Service: /api/users\nOrder Service: /api/orders\nPayment Service: /api/payments",
          useCase: "Large teams, complex domains, independent scaling",
        },
        {
          name: "Technology Diversity",
          title: "Polyglot Architecture",
          description: "Different services can use different technologies, languages, and databases.",
          example: "User Service: Node.js + MongoDB\nOrder Service: Java + PostgreSQL\nPayment Service: Python + Redis",
          useCase: "Technology optimization, team expertise, specific requirements",
        },
        {
          name: "Fault Isolation",
          title: "Resilient System",
          description: "Failure in one service doesn't necessarily bring down the entire system.",
          example: "If Payment Service fails, User and Order services continue working",
          useCase: "High availability, fault tolerance, system resilience",
        },
      ],
    },
    {
      title: "Serverless Architecture",
      description: "Event-driven architecture using cloud functions without managing servers.",
      items: [
        {
          name: "Function as a Service",
          title: "Event-Driven Functions",
          description: "API endpoints are implemented as individual cloud functions.",
          example: "AWS Lambda functions:\ngetUser.js - handles GET /users/{id}\ncreateOrder.js - handles POST /orders",
          useCase: "Variable workloads, cost optimization, rapid scaling",
        },
        {
          name: "Auto Scaling",
          title: "Automatic Resource Management",
          description: "Functions automatically scale based on demand without manual intervention.",
          example: "Function scales from 0 to 1000 concurrent executions automatically",
          useCase: "Unpredictable traffic, cost efficiency, zero maintenance",
        },
        {
          name: "Pay-per-Use",
          title: "Cost-Effective Pricing",
          description: "You only pay for actual function execution time and resources used.",
          example: "AWS Lambda: $0.20 per 1M requests + compute time",
          useCase: "Startups, variable workloads, cost-sensitive applications",
        },
      ],
    },
    {
      title: "Event-Driven Architecture",
      description: "Architecture based on producing and consuming events for loose coupling.",
      items: [
        {
          name: "Event Streaming",
          title: "Asynchronous Communication",
          description: "Services communicate through events rather than direct API calls.",
          example: "User created → UserCreatedEvent → Email Service sends welcome email",
          useCase: "Real-time systems, loose coupling, scalable processing",
        },
        {
          name: "Event Sourcing",
          title: "Event-Based State",
          description: "System state is derived from a sequence of events rather than current state snapshots.",
          example: "Account balance = sum of all deposit/withdrawal events",
          useCase: "Audit trails, temporal queries, complex business logic",
        },
      ],
    },
  ],
  bestPractices: [
    "Start with monolithic architecture for simple applications and small teams",
    "Consider microservices when you have multiple teams and complex domains",
    "Use API gateways to manage cross-cutting concerns in distributed architectures",
    "Implement proper monitoring and observability across all services",
    "Design for failure - implement circuit breakers and retry mechanisms",
    "Use event-driven patterns for loose coupling and scalability",
    "Consider serverless for variable workloads and cost optimization",
  ],
}
