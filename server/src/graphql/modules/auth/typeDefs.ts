export const authTypeDefs = /* GraphQL */ `
  type AuthUser {
    id: ID!
    email: String
    name: String
    picture: String
  }

  extend type Query {
    me: AuthUser
  }
`;
