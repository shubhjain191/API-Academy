export const restPrinciplesData = {
  title: "REST Principles",
  description: "Understanding RESTful API design principles and best practices.",
  sections: [
    {
      title: "Core REST Principles",
      description: "The fundamental principles that define REST architecture.",
      items: [
        {
          name: "Stateless",
          description: "Each request contains all information needed to process it.",
          example: "No server-side session storage required",
        },
        {
          name: "Client-Server",
          description: "Clear separation between client and server concerns.",
          example: "UI and data storage are independent",
        },
        {
          name: "Cacheable",
          description: "Responses should be cacheable when appropriate.",
          example: "Use Cache-Control headers",
        },
        {
          name: "Uniform Interface",
          description: "Consistent interface across all resources.",
          example: "Standard HTTP methods and status codes",
        },
      ],
    },
    {
      title: "Resource Design",
      description: "How to design and structure REST resources.",
      items: [
        {
          name: "Resource Naming",
          description: "Use nouns, not verbs, for resource names.",
          example: "/users instead of /getUsers",
        },
        {
          name: "Hierarchical URLs",
          description: "Represent relationships in URL structure.",
          example: "/users/123/posts/456",
        },
        {
          name: "Plural Nouns",
          description: "Use plural nouns for collections.",
          example: "/users, /posts, /comments",
        },
      ],
    },
  ],
}
