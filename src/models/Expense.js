import BaseModel from './BaseModel';
import { Model } from 'objection';
import User from './User';
import Category from './Category';

export default class Expense extends BaseModel {
  static get tableName() {
    return 'expenses';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'user_id', 'category_id', 'amount'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 50 },
        user_id: { type: 'integer' },
        category_id: { type: 'integer' },
        amount: { type: 'float' },
        description: { type: 'text', minLength: 0, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'expenses.user_id',
          to: 'users.id',
        },
      },

      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'expenses.category_id',
          to: 'categories.id',
        },
      },
    };
  }
}
