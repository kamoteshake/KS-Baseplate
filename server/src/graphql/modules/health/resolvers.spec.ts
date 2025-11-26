import { healthResolvers } from './resolvers';

describe('health resolvers', () => {
  it('returns health object', () => {
    const result = healthResolvers.Query.health();
    expect(result).toEqual({
      ok: true,
      message: 'Server is up 🚀',
    });
  });
});
