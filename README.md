# Repository Pattern Implementation

Este proyecto demuestra la implementación del **Repository Pattern** en Node.js con Express, proporcionando una arquitectura limpia y desacoplada para el manejo de datos de usuarios.

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Arquitectura](#arquitectura)
3. [Patrones Implementados](#patrones-implementados)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Componentes Principales](#componentes-principales)
6. [Instalación y Configuración](#instalación-y-configuración)
7. [API Endpoints](#api-endpoints)
8. [Ejemplos de Uso](#ejemplos-de-uso)
9. [Beneficios del Repository Pattern](#beneficios-del-repository-pattern)
10. [Testing](#testing)
11. [Patrones Relacionados](#patrones-relacionados)
12. [Tecnologías Utilizadas](#tecnologías-utilizadas)

## 🎯 Descripción del Proyecto

Este proyecto demuestra la implementación del **Repository Pattern** en Node.js con Express, proporcionando una arquitectura limpia y desacoplada para el manejo de datos de usuarios.

## 🏭 Arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Controllers   │───▶│    Services     │───▶│  Repositories   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │   Data Source   │
                                               │  (Fake/DB/API)  │
                                               └─────────────────┘
```

## 🔧 Patrones Implementados

### Repository Pattern

-   **Interface**: [`IUserRepository`](src/repositories/IUser.repository.js) - Define el contrato para operaciones de datos
-   **Implementación**: [`UserFakeRepository`](src/repositories/userFake.repository.js) - Implementación en memoria para testing/desarrollo
-   **Beneficio**: Abstrae la lógica de acceso a datos del resto de la aplicación

### Dependency Injection

-   [`UserController`](src/controllers/user.controller.js) recibe [`UserService`](src/services/user.services.js)
-   [`UserService`](src/services/user.services.js) recibe una implementación de `IUserRepository` (`MysqlUserRepository`, `MongoUserRepository`, etc.)

## 📁 Estructura del Proyecto

```
src/
├── controllers/          # Controladores HTTP
│   └── user.controller.js
├── services/            # Lógica de negocio
│   └── user.services.js
├── repositories/        # Capa de acceso a datos
│   ├── IUser.repository.js      # Interface
│   └── userFake.repository.js   # Implementación fake
├── models/              # Modelos de datos
│   └── user.model.js
├── routes/              # Definición de rutas
│   ├── index.js
│   └── user.router.js
├── config/              # Configuración
│   └── config.js
└── index.js             # Punto de entrada
```

## 🔍 Componentes Principales

### 1. Model Layer

-   **[`User`](src/models/user.model.js)**: Modelo que representa la entidad usuario con propiedades `id`, `name`, `email`

### 2. Repository Layer

-   **[`IUserRepository`](src/repositories/IUser.repository.js)**: Interface que define operaciones CRUD

    -   `getById(id)`: Obtener usuario por ID
    -   `getAll()`: Obtener todos los usuarios
    -   `create(user)`: Crear nuevo usuario
    -   `update(user)`: Actualizar usuario existente
    -   `delete(id)`: Eliminar usuario por ID

-   **[`UserFakeRepository`](src/repositories/userFake.repository.js)**: Implementación en memoria para desarrollo
    -   Extiende `IUserRepository`
    -   Almacena datos en un array
    -   Implementa auto-incremento para IDs

### 3. Service Layer

-   **[`UserService`](src/services/user.services.js)**: Contiene la lógica de negocio
    -   `findOne(id)`: Buscar usuario por ID con validación
    -   `findAll()`: Obtener todos los usuarios
    -   `create(userData)`: Crear usuario con validación
    -   `update(id, userData)`: Actualizar usuario con validación
    -   `delete(id)`: Eliminar usuario con validación

### 4. Controller Layer

-   **[`UserController`](src/controllers/user.controller.js)**: Maneja las peticiones HTTP
    -   Métodos HTTP: `create`, `getById`, `getAll`, `update`, `delete`
    -   Respuestas HTTP apropiadas

### 5. Router Layer

-   **[`userRouter`](src/routes/user.router.js)**: Define los endpoints REST
-   **[`routerApi`](src/routes/index.js)**: Configuración principal de rutas con versionado `/api/v1`

## ⚙️ Instalación y Configuración

### Requisitos

-   Node.js (v14+)
-   npm

### Instalación

```bash
# Clonar el repositorio
git clone git@github.com:fabiantcc1/repository-pattern.git
cd repository-pattern

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Variables de Entorno

Configurar en `.env`:

```env
NODE_ENV=development
PORT=3000
```

### Scripts Disponibles

```bash
npm run dev    # Ejecutar en modo desarrollo con nodemon
```

## 🌐 API Endpoints

| Método | Endpoint            | Descripción                | Body                                      |
| ------ | ------------------- | -------------------------- | ----------------------------------------- |
| POST   | `/api/v1/users`     | Crear usuario              | `{ "name": "string", "email": "string" }` |
| GET    | `/api/v1/users`     | Obtener todos los usuarios | -                                         |
| GET    | `/api/v1/users/:id` | Obtener usuario por ID     | -                                         |
| PUT    | `/api/v1/users/:id` | Actualizar usuario         | `{ "name": "string", "email": "string" }` |
| DELETE | `/api/v1/users/:id` | Eliminar usuario           | -                                         |

## 💡 Ejemplos de Uso

### Crear Usuario

```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Pérez", "email": "juan@example.com"}'
```

**Respuesta:**

```json
{
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com"
}
```

### Obtener Todos los Usuarios

```bash
curl http://localhost:3000/api/v1/users
```

### Obtener Usuario por ID

```bash
curl http://localhost:3000/api/v1/users/1
```

### Actualizar Usuario

```bash
curl -X PUT http://localhost:3000/api/v1/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Carlos", "email": "juan.carlos@example.com"}'
```

### Eliminar Usuario

```bash
curl -X DELETE http://localhost:3000/api/v1/users/1
```

## ✅ Beneficios del Repository Pattern

1. **Separación de Responsabilidades**: La lógica de negocio está separada del acceso a datos
2. **Testabilidad**: Fácil mockeo de repositories para pruebas unitarias
3. **Flexibilidad**: Cambiar fuente de datos sin afectar la lógica de negocio
4. **Reutilización**: Los repositories pueden ser utilizados por múltiples services
5. **Mantenibilidad**: Código más organizado y fácil de mantener
6. **Escalabilidad**: Fácil agregar nuevas fuentes de datos

## 🧪 Testing

El patrón facilita el testing al permitir inyectar repositories falsos:

```javascript
// test/user.service.test.js
const UserService = require('../src/services/user.services.js');
const UserFakeRepository = require('../src/repositories/userFake.repository.js');

describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService(new UserFakeRepository());
    });

    test('should create user', async () => {
        const userData = { name: 'Test', email: 'test@test.com' };
        const user = await userService.create(userData);

        expect(user.id).toBeDefined();
        expect(user.name).toBe('Test');
    });
});
```

## 📚 Patrones Relacionados

-   **Dependency Injection**: Utilizado para inyectar repositories en services
-   **Factory Pattern**: Para crear diferentes tipos de repositories
-   **Unit of Work**: Patrón complementario para transacciones
-   **Command Pattern**: Para operaciones más complejas

## 🛠️ Tecnologías Utilizadas

-   **Node.js**: Runtime de JavaScript
-   **Express.js**: Framework web
-   **Nodemon**: Desarrollo con hot reload
-   **Dotenv**: Manejo de variables de entorno

## 👤 Autor

**Fabian Montaño**

---

Este proyecto demuestra una implementación limpia y escalable del Repository Pattern, proporcionando una base sólida para aplicaciones más complejas y sirviendo como prueba de comprensión del patrón de diseño.
