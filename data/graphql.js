export const graphqlData = {
  title: "GraphQL Basics",
  description: "Introduction to GraphQL as an alternative to REST APIs.",
  sections: [
    {
      title: "GraphQL vs REST",
      description: "Key differences between GraphQL and REST.",
      items: [
        {
          name: "Single Endpoint",
          description: "GraphQL uses one endpoint for all operations.",
          example: "POST /graphql",
        },
        {
          name: "Flexible Queries",
          description: "Clients specify exactly what data they need.",
          example: "query { user(id: 1) { name, email } }",
        },
        {
          name: "Strong Type System",
          description: "Schema defines available operations and data types.",
          example: "type User { id: ID!, name: String!, email: String! }",
        },
      ],
    },
    {
      title: "Core Concepts",
      description: "Essential GraphQL concepts.",
      items: [
        {
          name: "Queries",
          description: "Read operations to fetch data.",
          example: "query GetUser($id: ID!) { user(id: $id) { name } }",
        },
        {
          name: "Mutations",
          description: "Write operations to modify data.",
          example: "mutation CreateUser($input: UserInput!) { createUser(input: $input) { id } }",
        },
        {
          name: "Subscriptions",
          description: "Real-time updates via WebSocket connections.",
          example: "subscription { messageAdded { id, content } }",
        },
      ],
    },
  ],
}
