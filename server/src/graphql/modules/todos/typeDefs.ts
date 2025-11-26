export const todosTypeDefs = /* GraphQL */ `
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  extend type Query {
    todos: [Todo!]!
  }

  extend type Mutation {
    addTodo(text: String!): Todo!
    toggleTodo(id: ID!): Todo!
  }
`;
