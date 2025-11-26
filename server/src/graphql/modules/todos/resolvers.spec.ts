import { todosResolvers } from './resolvers';
import type { GraphQLContext } from '../../../graphql/context';
import type { Db } from 'mongodb';

const createMockContext = (): GraphQLContext => {
  const mockDb = {
    collection: () => ({
      find: () => ({
        toArray: async () => [
          {
            _id: { toHexString: () => '1' },
            text: 'Test todo',
            completed: false,
          },
        ],
      }),
      insertOne: async () => ({
        insertedId: { toHexString: () => '1' },
      }),
      findOne: async () => ({
        _id: { toHexString: () => '1' },
        text: 'Test todo',
        completed: false,
      }),
      updateOne: async () => ({}),
    }),
  } as unknown as Db;

  return {
    db: mockDb,
  };
};

describe('todos resolvers', () => {
  it('returns todos list', async () => {
    const ctx = createMockContext();

    const result = await todosResolvers.Query.todos({}, {}, ctx);

    expect(result).toEqual([{ id: '1', text: 'Test todo', completed: false }]);
  });

  it('adds a todo', async () => {
    const ctx = createMockContext();

    const result = await todosResolvers.Mutation.addTodo({}, { text: 'New todo' }, ctx);

    expect(result).toEqual({
      id: '1',
      text: 'New todo',
      completed: false,
    });
  });
});
