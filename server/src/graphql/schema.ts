import { helloTypeDefs } from './modules/hello/typeDefs';
import { healthTypeDefs } from './modules/health/typeDefs';
import { todosTypeDefs } from './modules/todos/typeDefs';

const rootTypeDefs = /* GraphQL */ `
  type Query
  type Mutation
`;

export const typeDefs = [rootTypeDefs, helloTypeDefs, healthTypeDefs, todosTypeDefs];
