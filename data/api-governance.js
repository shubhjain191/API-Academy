export const apiGovernanceData = {
  title: "API Governance",
  description: "Establishing policies, processes, and standards for managing APIs across an organization.",
  overview:
    "API governance involves creating and enforcing policies, standards, and processes to ensure APIs are developed, deployed, and maintained consistently across an organization. It includes lifecycle management, security policies, and compliance requirements.",
  keyConcepts: [
    {
      term: "API Lifecycle",
      definition: "The stages an API goes through from conception to retirement",
    },
    {
      term: "Policy Enforcement",
      definition: "Mechanisms to ensure compliance with established API standards and rules",
    },
    {
      term: "API Registry",
      definition: "Centralized catalog of all APIs within an organization",
    },
    {
      term: "Compliance",
      definition: "Adherence to internal policies and external regulatory requirements",
    },
  ],
  sections: [
    {
      title: "API Lifecycle Management",
      description: "Managing APIs through their entire lifecycle from design to retirement.",
      items: [
        {
          name: "Design Phase",
          title: "API Design Governance",
          description: "Establish design standards and review processes for new APIs.",
          example:
            "Design review checklist:\n- RESTful principles\n- Naming conventions\n- Error handling standards\n- Security requirements",
          useCase: "Consistent API design, quality assurance, team alignment",
        },
        {
          name: "Development Phase",
          title: "Development Standards",
          description: "Enforce coding standards, testing requirements, and documentation practices.",
          example:
            "Development gates:\n- Code review approval\n- Unit test coverage > 80%\n- API documentation complete\n- Security scan passed",
          useCase: "Quality control, security compliance, maintainability",
        },
        {
          name: "Deployment Phase",
          title: "Release Management",
          description: "Control API deployments and version management.",
          example:
            "Deployment pipeline:\n- Staging environment testing\n- Performance validation\n- Security approval\n- Production deployment",
          useCase: "Risk management, quality assurance, controlled releases",
        },
        {
          name: "Retirement Phase",
          title: "API Deprecation",
          description: "Manage the sunset process for outdated APIs.",
          example:
            "Deprecation process:\n- 6-month notice to consumers\n- Migration guide provided\n- Support period defined\n- Final shutdown date",
          useCase: "Consumer communication, smooth transitions, technical debt management",
        },
      ],
    },
    {
      title: "Policy Framework",
      description: "Establishing comprehensive policies for API management.",
      items: [
        {
          name: "Security Policies",
          title: "API Security Standards",
          description: "Define security requirements and standards for all APIs.",
          example:
            "Security requirements:\n- HTTPS only\n- Authentication required\n- Rate limiting implemented\n- Input validation enforced",
          useCase: "Risk mitigation, compliance, data protection",
        },
        {
          name: "Data Governance",
          title: "Data Handling Policies",
          description: "Establish rules for data access, privacy, and compliance.",
          example:
            "Data policies:\n- PII handling procedures\n- Data retention rules\n- Access control requirements\n- Audit logging mandatory",
          useCase: "Privacy compliance, data protection, regulatory adherence",
        },
        {
          name: "Performance Standards",
          title: "SLA Requirements",
          description: "Define performance expectations and service level agreements.",
          example:
            "Performance SLAs:\n- Response time < 200ms\n- 99.9% uptime\n- Throughput > 1000 RPS\n- Error rate < 0.1%",
          useCase: "Service quality, user experience, operational excellence",
        },
      ],
    },
    {
      title: "Governance Tools",
      description: "Tools and platforms for implementing API governance.",
      items: [
        {
          name: "API Gateway",
          title: "Centralized Management",
          description: "Use API gateways to enforce policies and monitor usage.",
          example:
            "Gateway features:\n- Authentication/authorization\n- Rate limiting\n- Request/response transformation\n- Analytics and monitoring",
          useCase: "Policy enforcement, centralized control, monitoring",
        },
        {
          name: "API Registry",
          title: "API Catalog",
          description: "Maintain a centralized registry of all organizational APIs.",
          example:
            "Registry contents:\n- API specifications\n- Version information\n- Consumer details\n- Usage metrics",
          useCase: "API discovery, inventory management, impact analysis",
        },
        {
          name: "Monitoring Tools",
          title: "Compliance Monitoring",
          description: "Monitor API usage and compliance with governance policies.",
          example:
            "Monitoring metrics:\n- Policy violations\n- Usage patterns\n- Performance metrics\n- Security incidents",
          useCase: "Compliance tracking, issue detection, performance optimization",
        },
      ],
    },
  ],
  bestPractices: [
    "Establish clear API design standards and enforce them consistently",
    "Implement automated policy enforcement where possible",
    "Maintain a comprehensive API registry and documentation",
    "Define clear API lifecycle processes and gates",
    "Establish security policies and ensure compliance",
    "Monitor API usage and performance continuously",
    "Provide clear guidelines and training for development teams",
    "Implement proper versioning and deprecation strategies",
    "Ensure data governance policies are well-defined and followed",
    "Regular review and update of governance policies",
  ],
}
