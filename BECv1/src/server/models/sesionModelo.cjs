const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    rut: String,
    contacto: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

usuarioSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
        }
        next();
    } catch (error) {
        next(error);
    }
});

const Inicio = mongoose.model('Inicio', usuarioSchema);

module.exports = Inicio;