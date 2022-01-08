import { I_game } from "../model/interfaces/I_game";
import { gameSchema } from '../dataAccess/schemas/gameSchema';
import baseRepository from "./_baseRepository";

class GameRepository extends baseRepository<I_game>{

  constructor() {
    super(gameSchema);
  }

}
Object.seal(GameRepository);
export = GameRepository;