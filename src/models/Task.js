import BaseModel from './BaseModel';
import { Model } from 'objection';
import List from './List';
export default class Task extends BaseModel {
  static get tableName() {
    return 'task';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['listId', 'name', 'description', 'priority', 'completed'],
      properties: {
        listId: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 50 },
        description: {type: 'string', minLength:1, maxLength: 255},
        completed: {type:'boolean'}
      },
    };
  }

  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'task.projectId',
          to: 'project.id',
        },
      },
    };
  }
}
