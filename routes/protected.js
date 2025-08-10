// routes/protected.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// @route   GET /api/protected
// @desc    Obtener datos de una ruta protegida
// @access  Privado (requiere token)
router.get('/', auth, (req, res) => {
    res.json({ msg: '¡Has accedido a una ruta protegida!', user: req.user });
});

module.exports = router;