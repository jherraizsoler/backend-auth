const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Conexión a MongoDB
const mongoUri = 'mongodb://localhost:27017/todolistdb';
// Define la clave secreta para JWT
const jwtSecret = 'ZAx^aTaP?$rm,g-g=ujkaFBX';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor de autenticación en funcionamiento.');
});

// Enlazar las rutas de autenticación
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Enlazar las rutas protegidas
const protectedRoutes = require('./routes/protected');
app.use('/api/protected', protectedRoutes);


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});