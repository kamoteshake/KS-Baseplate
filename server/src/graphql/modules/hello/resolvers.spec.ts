import { helloResolvers } from './resolvers';

describe('hello resolvers', () => {
  it('returns hello message', () => {
    const result = helloResolvers.Query.hello();
    expect(result).toBe('Hello from Apollo GraphQL 👋');
  });
});
