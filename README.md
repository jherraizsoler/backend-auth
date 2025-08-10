
-----

# Backend de Autenticación con Node.js y MongoDB

Este proyecto es un backend de autenticación RESTful. Utiliza Node.js y Express para el servidor, y MongoDB con Mongoose para la base de datos. La autenticación se gestiona con JSON Web Tokens (JWT).

-----

## 🛠️ Tecnologías

  * **Node.js**: Entorno de ejecución
  * **Express**: Framework web
  * **MongoDB**: Base de datos NoSQL
  * **Mongoose**: ODM (Object Data Modeling)
  * **JWT**: JSON Web Tokens para autenticación
  * **Bcrypt**: Hashing de contraseñas
  * **Visual Studio Code**: IDE

-----

## ✨ Características

  * Registro de nuevos usuarios
  * Inicio de sesión seguro
  * Generación de tokens JWT
  * Protección de rutas (middleware de autenticación)
  * Hashing seguro de contraseñas

-----

## 🚀 Requisitos

  * [Node.js](https://nodejs.org/) (incluye npm)
  * [MongoDB](https://www.mongodb.com/) (local o en la nube)

-----

## ⚙️ Instalación y Configuración

1.  **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/backend-auth.git
    cd backend-auth
    ```

2.  **Instala las dependencias**:

    ```bash
    npm install
    ```

3.  **Configura las variables de entorno**:

      * Crea un archivo `.env` en la raíz del proyecto.
      * Añade la siguiente configuración:
        ```env
        PORT=3000
        MONGO_URI=mongodb://localhost:27017/nombre-de-tu-base-de-datos
        JWT_SECRET=una_clave_secreta_super_segura
        ```

4.  **Inicia el servidor**:

    ```bash
    npm start
    ```

-----

## 📍 Endpoints de la API

  * `POST /api/register` - Registra un nuevo usuario.
  * `POST /api/login` - Inicia sesión y devuelve un token JWT.
  * `GET /api/profile` - Ruta protegida. Requiere un token JWT en el encabezado `Authorization`.

-----

## 📂 Estructura del Proyecto

```
/backend-auth
|-- src/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- app.js
|   |-- server.js
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
```

-----

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

-----

Puedes copiar todo el texto de arriba sin problemas. Simplemente resáltalo y pégalo en tu `README.md`.
