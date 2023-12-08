const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
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
        if (this.isModified('pass')) {
        }
        next();
    } catch (error) {
        next(error);
    }
});

const Registrar = mongoose.model('Noticia', usuarioSchema);

module.exports = Registrar;