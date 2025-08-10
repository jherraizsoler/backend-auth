
-----

# Backend de PersonalHubServidor funcion Autenticación con Node.js y MongoDB

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

---

## 📍 Ejemplos de Endpoints de la API con Postman

A continuación se muestran ejemplos de cómo interactuar con los endpoints utilizando la herramienta **Postman**.

### `POST /api/register`

Registra un nuevo usuario con `username`, `email` y `password`.

**Configuración en Postman:**

* **Método:** `POST`
* **URL:** `http://localhost:3000/api/register`
* **Encabezados (Headers):**
    * `Content-Type: application/json`
* **Cuerpo (Body):**
    * Selecciona `raw` y el formato `JSON`.
    * Pega el siguiente JSON:

```json
{
    "username": "ejemplo-usuario",
    "email": "usuario@example.com",
    "password": "mi-contraseña-segura"
}
```

---

### `POST /api/login`

Autentica a un usuario y devuelve un **JSON Web Token (JWT)**. Este token es necesario para acceder a las rutas protegidas.

**Configuración en Postman:**

* **Método:** `POST`
* **URL:** `http://localhost:3000/api/login`
* **Encabezados (Headers):**
    * `Content-Type: application/json`
* **Cuerpo (Body):**
    * Selecciona `raw` y el formato `JSON`.
    * Pega el siguiente JSON:

```json
{
    "email": "usuario@example.com",
    "password": "mi-contraseña-segura"
}
```

**Respuesta de ejemplo:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzM1M2U5ZmE0YzgxMjMzYzU0N2UzNyIsImlhdCI6MTYyODk3NDMzOH0.tu-token-jwt-super-largo"
}
```

---

### `GET /api/profile`

Ruta protegida que devuelve la información del usuario autenticado. **Requiere** que el token JWT se envíe en el encabezado `Authorization`.

**Configuración en Postman:**

* **Método:** `GET`
* **URL:** `http://localhost:3000/api/profile`
* **Encabezados (Headers):**
    * **Clave:** `Authorization`
    * **Valor:** `Bearer tu-token-jwt-super-largo`

**Nota:** Reemplaza `tu-token-jwt-super-largo` con el token real obtenido al iniciar sesión.

---


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
