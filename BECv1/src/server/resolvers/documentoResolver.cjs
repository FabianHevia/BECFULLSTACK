const { Documento } = require('../models/documentoModelo.cjs');

const documentosQueryResolver = async () => {
  try {
    const documentos = await Documento.find({},'title, author, type, category, img');
    return documentos;
  } catch (error) {
    throw new Error('Error al obtener los documentos');
  }
};

const agregarDocumentoMutationResolver = async (_, args) => {
  try {
    const nuevoDocumento = new Documento({
      title: args.title,
      author: args.author,
      type: args.fecha,
      category: args.category,
      img: args.img,
    });

    const documentoGuardado = await nuevoDocumento.save();
    return documentoGuardado;
  } catch (error) {
    throw new Error('Error al agregar el documento');
  }
};

module.exports = {
  documentosQueryResolver,
  agregarDocumentoMutationResolver,
};
