import { helloResolvers } from './modules/hello/resolvers';
import { healthResolvers } from './modules/health/resolvers';
import { todosResolvers } from './modules/todos/resolvers';

export const resolvers = {
  Query: {
    ...helloResolvers.Query,
    ...healthResolvers.Query,
    ...todosResolvers.Query,
  },
  Mutation: {
    ...todosResolvers.Mutation,
  },
};
