import { ObjectId } from 'mongodb';
import type { GraphQLContext } from '../../../graphql/context';

interface TodoDocument {
  _id?: ObjectId;
  text: string;
  completed: boolean;
}

export const todosResolvers = {
  Query: {
    todos: async (_parent: unknown, _args: unknown, ctx: GraphQLContext) => {
      const collection = ctx.db.collection<TodoDocument>('todos');
      const docs = await collection.find().toArray();

      return docs.map((doc) => ({
        id: doc._id!.toHexString(),
        text: doc.text,
        completed: doc.completed,
      }));
    },
  },

  Mutation: {
    addTodo: async (_parent: unknown, args: { text: string }, ctx: GraphQLContext) => {
      const collection = ctx.db.collection<TodoDocument>('todos');
      const doc: TodoDocument = {
        text: args.text,
        completed: false,
      };

      const result = await collection.insertOne(doc);

      return {
        id: result.insertedId.toHexString(),
        text: doc.text,
        completed: doc.completed,
      };
    },

    toggleTodo: async (_parent: unknown, args: { id: string }, ctx: GraphQLContext) => {
      const collection = ctx.db.collection<TodoDocument>('todos');
      const _id = new ObjectId(args.id);

      const existing = await collection.findOne({ _id });
      if (!existing) {
        throw new Error('Todo not found');
      }

      const updatedCompleted = !existing.completed;

      await collection.updateOne({ _id }, { $set: { completed: updatedCompleted } });

      return {
        id: existing._id!.toHexString(),
        text: existing.text,
        completed: updatedCompleted,
      };
    },
  },
};
