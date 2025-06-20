export const versioningData = {
  title: "API Versioning",
  description: "Strategies for managing API versions and backward compatibility.",
  sections: [
    {
      title: "Versioning Strategies",
      description: "Different approaches to version your APIs.",
      items: [
        {
          name: "URL Versioning",
          description: "Include version in the URL path.",
          example: "/api/v1/users, /api/v2/users",
        },
        {
          name: "Header Versioning",
          description: "Specify version in request headers.",
          example: "Accept: application/vnd.api+json;version=1",
        },
        {
          name: "Query Parameter",
          description: "Pass version as query parameter.",
          example: "/api/users?version=1",
        },
        {
          name: "Content Negotiation",
          description: "Use Accept header with custom media types.",
          example: "Accept: application/vnd.myapi.v1+json",
        },
      ],
    },
    {
      title: "Best Practices",
      description: "Guidelines for effective API versioning.",
      items: [
        {
          name: "Semantic Versioning",
          description: "Use MAJOR.MINOR.PATCH format.",
          example: "v1.2.3 - breaking.feature.bugfix",
        },
        {
          name: "Deprecation Policy",
          description: "Clearly communicate when versions will be retired.",
          example: "Sunset: Sat, 31 Dec 2024 23:59:59 GMT",
        },
        {
          name: "Backward Compatibility",
          description: "Maintain compatibility within major versions.",
          example: "Add optional fields, don't remove existing ones",
        },
      ],
    },
  ],
}
