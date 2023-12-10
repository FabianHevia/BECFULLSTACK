const { Inicio } = require('../models/sesionModelo.cjs');

const inicioQueryResolver = async () => {
    try {
      const inicio = await Inicio.find({}, 'nombre, rut, contacto, email, password');
      return inicio;
    } catch (error) {
      throw new Error('Error al obtener los registros');
    }
  };
  
  const agregarInicioMutationResolver  = async (_, args) => {
    try {
      const nuevoInicio = new Inicio({
        nombre: args.nombre,
        rut: args.rut,
        contacto: args.contacto,
        email: args.email,
        password: args.password,
      });
  
      const inicioGuardado = await nuevoInicio.save();
      return inicioGuardado;
    } catch (error) {
      throw new Error('Error al guardar el registro');
    }
  };
  
module.exports = { 
  inicioQueryResolver, 
  agregarInicioMutationResolver 
};
