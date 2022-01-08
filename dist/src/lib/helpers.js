"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    static log(value) {
        console.log(value);
        return;
    }
    static parseString(value) {
        if (value) {
            return value.toString();
        }
    }
    static slice(value, slice) {
        return value.slice(0, slice);
    }
    static toLowerCase(value) {
        if (value) {
            return value.toLowerCase();
        }
    }
    static prepareImg(img) {
        return img || ""; // insertar ruta de imagen predeterminada
    }
    static posibleUndefined(value) {
        return (value === null || value === void 0 ? void 0 : value.trim()) || "";
    }
    static modal(options) {
        return `
    <div id="modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
      <div class="relative px-4 w-full max-w-lg h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          ${options.fn(this)}
        </div>
      </div>
    </div>
    `;
    }
}
exports.default = Helpers;
//# sourceMappingURL=helpers.js.map