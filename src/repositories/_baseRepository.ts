import { Model, Document, Callback, CallbackError, CallbackWithoutResult } from 'mongoose';
import { I_read, I_write } from "../interfaces/crud";

class baseRepository<T extends Document> implements I_read<T>, I_write<T>{

  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  public list(callback: (error: CallbackError, result: T[]) => void) {
    this._model.find({}, callback);
  };

  public listPaginated(page: number, limit: number, callback: (error: CallbackError, result: T[]) => void) {
    this._model.find({}, callback)
      .skip((page - 1) * limit).limit(limit);
  }

  public save(data: T, callback: Callback) {
    this._model.create(data, callback);
  }

  public update(data: T, id: string, callback: Callback) {
    this._model.replaceOne({ _id: id }, data, undefined, callback);
  }

  public delete(id: string, callback: CallbackWithoutResult) {
    this._model.deleteOne({ _id: id }, undefined, callback);
  }

  public getById(id: string, callback: Callback) {
    this._model.findOne({ _id: id }, null, undefined, callback);
  }

  public getData(key: string, value: any, callback: Callback) {
    this._model.find({ [key]: value }, callback);
  }

}

export = baseRepository;