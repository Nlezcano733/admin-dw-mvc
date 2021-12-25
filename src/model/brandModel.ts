import { I_brand } from "./interfaces/I_brand";

class BrandModel {

  private _brandModel: I_brand;

  constructor(brandModel: I_brand) {
    this._brandModel = brandModel;
  }
  get name(): string {
    return this._brandModel.name;
  }

  get type(): string {
    return this._brandModel.type;
  }

  get model(): string[] {
    return this._brandModel.model;
  }


}
Object.seal(BrandModel);
export = BrandModel;