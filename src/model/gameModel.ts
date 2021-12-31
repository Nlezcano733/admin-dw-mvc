import { I_game } from "./interfaces/I_game";

class GameModel {

  private _gameModel: I_game;

  constructor(gameModel: I_game) {
    this._gameModel = gameModel;
  }
  get title(): string {
    return this._gameModel.title;
  }
  get developer(): string {
    return this._gameModel.developer;
  }
  get description(): string {
    return this._gameModel.description;
  }
  get price(): number {
    return this._gameModel.price;
  }
  get stock(): number {
    return this._gameModel.stock;
  }
  get picture(): string {
    return this._gameModel.picture;
  }
  get created_at(): Date {
    return this._gameModel.created_at;
  }
}
Object.seal(GameModel);
// export = GameModel;