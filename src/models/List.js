import BaseModel from './BaseModel';
import { Model } from 'objection';
import Project from './Project';
import Task from './Task'
export default class List extends BaseModel {
  static get tableName() {
    return 'list';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['projectId, name'],
      properties: {
        projectId: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 50 },
      },
    };
  }

  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: 'list.projectId',
          to: 'project.id',
        },
      },

      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'list.id',
          to: 'task.listId',
        },
      },
    };
  }
}
