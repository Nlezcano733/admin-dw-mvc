import { LeanDocument, HydratedDocument, Document, Callback, CallbackError, CallbackWithoutResult } from "mongoose";


export interface crud<T> {
  list(): Promise<T extends Document ? LeanDocument<HydratedDocument<T>>[] : T[]>;
  listPaginated(page: number, limit: number): Promise<T extends Document ? LeanDocument<HydratedDocument<T>>[] : T[]>;
  save(data: T): Promise<T | Document>;
  update(data: T, id: string): Promise<T>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<T | null>;
  getData(key: string, value: any): Promise<T[]>;
}


/**
 * @deprecated
 */
export interface I_read<T> {
  list(callback: Callback): void;
  listPaginated(page: number, limit: number, callback: (error: CallbackError, result: T[]) => void): void;
  getById(id: string, callback: Callback): void;
  getData(key: string, value: any, callback: Callback): void;
}


/**
 * @deprecated
 */
export interface I_write<T> {
  save(data: T, callback: Callback): void;
  update(data: T, id: string, callback: Callback): void;
  delete(id: string, callback: CallbackWithoutResult): void;
}