export const healthTypeDefs = /* GraphQL */ `
  type Health {
    ok: Boolean!
    message: String!
  }

  extend type Query {
    health: Health!
  }
`;
