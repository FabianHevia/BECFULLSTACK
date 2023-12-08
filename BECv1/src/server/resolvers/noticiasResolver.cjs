const { Noticia } = require('../models/noticiasModelo.cjs');

const noticiasQueryResolver = async () => {
  try {
    const noticias = await Noticia.find({}, 'titulo resumen fecha');
    return noticias;
  } catch (error) {
    throw new Error('Error al obtener las noticias');
  }
};

const agregarNoticiaMutationResolver = async (_, args) => {
  try {
    const nuevaNoticia = new Noticia({
      titulo: args.titulo,
      resumen: args.resumen,
      fecha: args.fecha,
    });

    const noticiaGuardada = await nuevaNoticia.save();
    return noticiaGuardada;
  } catch (error) {
    throw new Error('Error al guardar la noticia');
  }
};

module.exports = {
  noticiasQueryResolver,
  agregarNoticiaMutationResolver,
};