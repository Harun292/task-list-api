import Model from '../database';

export default class BaseModel extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate(opt, context) {
    this.updatedAt = new Date().toISOString();
  }
}
