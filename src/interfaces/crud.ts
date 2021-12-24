export interface crud<T> {
  list(): Promise<T[]>;
  listPaginated(page: number, limit: number): Promise<T[]>;
  save(data: T): Promise<T>;
  update(data: T, id: string): Promise<T>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<T | null>;
  getData(key: string, value: any): Promise<T[]>;
}