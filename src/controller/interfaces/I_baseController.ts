import { _business } from '../../model/interfaces/_business';
import { I_writeController, I_readController } from "./common";

export interface I_baseController<T extends _business<Object>> extends I_writeController, I_readController {

}