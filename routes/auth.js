// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ... (la ruta de /register no cambia)

// @route   POST /api/auth/login
// @desc    Autentica al usuario y devuelve un token JWT
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Verificar si el usuario existe
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // 2. Comparar la contraseña ingresada con la contraseña hasheada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // 3. Crear el payload del token (los datos que contendrá)
        const payload = {
            user: {
                id: user.id // Usamos el ID del usuario como identificador
            }
        };

        // 4. Firmar el token y enviarlo de vuelta al cliente
        jwt.sign(
            payload,
            // Debes usar una clave secreta segura.
            // En un entorno de producción, esta clave debería estar en una variable de entorno.
            // Por ahora, la usaremos directamente.
            'ZAx^aTaP?$rm,g-g=ujkaFBX', 
            { expiresIn: '1h' }, // El token expirará en 1 hora
            (err, token) => {
                if (err) throw err;
                // Enviamos el token como respuesta
                res.json({ token }); 
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;