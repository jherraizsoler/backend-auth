// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Obtener el token del encabezado de la solicitud
    const token = req.header('x-auth-token');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }

    // Verificar el token
    try {
        const jwtSecret = 'ZAx^aTaP?$rm,g-g=ujkaFBX'; // Reemplaza con tu clave secreta
        const decoded = jwt.verify(token, jwtSecret);
        
        // Agregar el usuario del token a la solicitud
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'El token no es válido' });
    }
};