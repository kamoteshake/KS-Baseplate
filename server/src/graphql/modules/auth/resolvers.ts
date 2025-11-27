import type { GraphQLContext } from '../../context';

export const authResolvers = {
  Query: {
    me: (_parent: unknown, _args: unknown, ctx: GraphQLContext) => {
      if (!ctx.user) {
        // Normally shouldn't happen because /graphql is behind requireAuth,
        // but it's good to guard anyway.
        return null;
      }

      return {
        id: ctx.user.sub as string,
        email: ctx.user.email as string | undefined,
        name: ctx.user.name as string | undefined,
        picture: ctx.user.picture as string | undefined,
      };
    },
  },
};
