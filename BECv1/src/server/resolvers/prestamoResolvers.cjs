const { Prestamo } = require('../models/prestamoModelo.cjs');

const prestamoQueryResolver = async () => {
    try {
        const prestamos = await Prestamo.find({}, 'id, usuario, fecha, plazo,')
        return prestamos;
    } catch (error) {
        throw new Error('Error al obtener el prestamo')
    }
};

const agregarPrestamoMutationResolver = async (_, args) => {
    try{
        const SolicitudPrestamo = new Solicitud ({
            id: args.id,
            usuario: args.usuario,
            fecha: args.fecha,
            plazo: args.plazo,
        });
        const SolicitudSaved = await SolicitudPrestamo.save();
        return SolicitudSaved;
      } catch (error) {
        throw new Error('Error al guardar la noticia');
      }
  };

module.exports = {
    prestamoQueryResolver,
    agregarPrestamoMutationResolver
}