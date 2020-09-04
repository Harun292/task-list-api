import BaseModel from './BaseModel';
import { Model } from 'objection';
import Expense from './Expense';

export default class Category extends BaseModel {
  static get tableName() {
    return 'categories';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 20 },
      },
    };
  }
  static get relationMappings() {
    return {
      expenses: {
        relation: Model.HasManyRelation,
        modelClass: Expense,
        join: {
          from: 'categories.id',
          to: 'expenses.category_id',
        },
      },
    };
  }
}
