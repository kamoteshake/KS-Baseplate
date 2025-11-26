export const healthResolvers = {
  Query: {
    health: () => ({
      ok: true,
      message: 'Server is up 🚀',
    }),
  },
};
