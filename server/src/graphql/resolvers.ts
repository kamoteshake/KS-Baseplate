import { helloResolvers } from './modules/hello/resolvers';
import { healthResolvers } from './modules/health/resolvers';
import { todosResolvers } from './modules/todos/resolvers';
import { authResolvers } from './modules/auth/resolvers';

export const resolvers = {
  Query: {
    ...helloResolvers.Query,
    ...healthResolvers.Query,
    ...todosResolvers.Query,
    ...authResolvers.Query,
  },
  Mutation: {
    ...todosResolvers.Mutation,
  },
};
