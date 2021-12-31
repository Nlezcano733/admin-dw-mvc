import { I_category } from "./interfaces/I_category";

class CategoryModel {

  private _categoryModel: I_category;

  constructor(categoryModel: I_category) {
    this._categoryModel = categoryModel;
  }
  get name(): string {
    return this._categoryModel.name;
  }

  get type(): string {
    return this._categoryModel.type;
  }
}
Object.seal(CategoryModel);
// export = CategoryModel;