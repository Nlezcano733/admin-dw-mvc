import { Model } from 'mongoose';
import { skipPartiallyEmittedExpressions } from 'typescript';
import { crud } from "../interfaces/crud";
class baseRepository<T> implements crud<T>{

  private _model: Model<T>;

  constructor(schemaModel: Model<T>) {
    this._model = schemaModel;
  }

  public async list() {
    return await this._model.find({}).lean();
  };

  public async listPaginated(page: number, limit: number) {
    return await this._model.find({}).skip((page - 1) + limit).limit(page * limit).lean();
  }

  public async save(data: T) {
    const newData = new this._model({ ...data });
    return await newData.save();
  }

  public async update(data: T, id: string) {
    return await this._model.replaceOne({ _id: id }, data);
  }

  public async delete(id: string) {
    await this._model.deleteOne({ _id: id });
  }

  public async getById(id: string) {
    return await this._model.findOne({ _id: id });
  }

  public async getData(key: string, value: any) {
    return await this._model.find({});
  }

}

export = baseRepository;