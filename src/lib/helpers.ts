type Helper = {
  name: string,
  fn: any;
};

class Helpers {

  static log(value: string) {
    console.log(value);
    return;
  }

  static parseString(value: any) {
    if (value) {
      return value.toString();
    }
  }

  static slice(value: any, slice: number) {
    return value.slice(0, slice);
  }

  static toLowerCase(value: string) {
    if (value) {
      return value.toLowerCase();
    }
  }

  static prepareImg(img: string) {
    return img || ""; // insertar ruta de imagen predeterminada
  }

  static posibleUndefined(value: string | undefined) {
    return value?.trim() || "";
  }

  static modal(options: Helper) {
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

export default Helpers;



