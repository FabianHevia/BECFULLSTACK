const { Registro } = require('../models/registroModelo.cjs');

const registrosQueryResolver = async () => {
    try {
      const registros = await Registro.find({}, 'email, password');
      return registros;
    } catch (error) {
      throw new Error('Error al obtener los registros');
    }
  };
  
  const agregarRegistroMutationResolver = async (_, args) => {
    try {
      const nuevoRegistro = new Registro({
        email: args.email,
        password: args.password,
      });
  
      const registroGuardado = await nuevoRegistro.save();
      return registroGuardado;
    } catch (error) {
      throw new Error('Error al guardar el registro');
    }
  };
  
module.exports = { 
  registrosQueryResolver, 
  agregarRegistroMutationResolver 
};