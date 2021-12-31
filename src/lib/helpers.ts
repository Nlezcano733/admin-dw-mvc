class Helpers {

  static toLowerCase(value: string) {
    return value.toLowerCase();
  }

  static prepareImg(img: string) {
    return img || ""; // insertar ruta de imagen predeterminada
  }
}

export default Helpers;



