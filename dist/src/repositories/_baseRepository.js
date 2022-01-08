"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class baseRepository {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._model.find({}).lean();
        });
    }
    ;
    listPaginated(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._model.find({}).lean();
            const values = data === null || data === void 0 ? void 0 : data.map((d) => (Object.assign(Object.assign({}, d), { id: d._id.toString() })));
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            let next = Number(page) + 1;
            let previous = Number(page) - 1;
            const resultPage = values.slice(startIndex, endIndex);
            const totalPages = Math.ceil(values.length / limit);
            const results = {
                next: next,
                previous: previous,
                limit: limit,
                total_data: data.length,
                total_pages: totalPages,
                results: resultPage
            };
            return results;
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newData = new this._model(Object.assign({}, data));
            return yield newData.save();
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._model.replaceOne({ _id: id }, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.deleteOne({ _id: id });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._model.findOne({ _id: id });
        });
    }
    getData(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._model.find({});
            return data === null || data === void 0 ? void 0 : data.filter((d) => d.name === value);
        });
    }
}
module.exports = baseRepository;
//# sourceMappingURL=_baseRepository.js.map