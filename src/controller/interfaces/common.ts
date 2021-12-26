import { RequestHandler } from "express";

export interface I_writeController {
  save: RequestHandler;
  update: RequestHandler;
  delete: RequestHandler;
}

export interface I_readController {
  list: RequestHandler;
  listPaginated: RequestHandler;
  getById: RequestHandler;
  getData: RequestHandler;
}