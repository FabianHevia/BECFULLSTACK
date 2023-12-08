const { Sesion } = require('../models/sesionModelo.cjs');

const sesionQueryResolver = async () => {
  try {
    const usuarios = await Sesion.find({}, 'email, password');
    return usuarios;
  } catch (error) {
    throw new Error('Error al obtener los usuarios');
  }
};

const agregarSesionMutationResolver = async (_, args) => {
  try {
    const { email, password } = args;
    const nuevoSesion = new Sesion({ email, password });
  
    const usuarioGuardado = await nuevoSesion.save();
    return usuarioGuardado;
  } catch (error) {
    throw new Error('Error al guardar el usuario');
  }
};

module.exports = { 
    sesionQueryResolver, 
    agregarSesionMutationResolver 
};
