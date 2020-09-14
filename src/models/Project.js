import BaseModel from './BaseModel';
import { Model } from 'objection';
import List from './List';
import User from './User';
export default class Project extends BaseModel {
  static get tableName() {
    return 'project';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','colorName'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 20 },
        colorName: {type:'string', minLength: 1, maxLength: 20}
      },
    };
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'project.userId',
          to: 'users.id',
        },
      },
      list: {
        relation: Model.HasManyRelation,
        modelClass: List,
        join: {
          from: 'project.id',
          to: 'list.projectId',
        },
      },
    };
  }
}
