# Portfolio Personal

Portfolio personal desarrollado para mostrar mis proyectos, conocimientos y evolución como desarrollador web.

El proyecto combina un frontend construido con tecnologías web estándar y una API REST propia que permite gestionar dinámicamente la información de los proyectos y las tecnologías utilizadas.

**Demo:** [ismartin.com](https://ismartin.com/)

## Objetivo

- Mostrar mis proyectos de forma clara y organizada.
- Presentar las tecnologías y conocimientos adquiridos.
- Servir como carta de presentación profesional.
- Aplicar conocimientos de frontend, backend, APIs REST y bases de datos en un proyecto real.

## Tecnologías

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap

### Backend

- Node.js
- Express
- JavaScript (ES Modules)
- Prisma ORM
- PostgreSQL
- Zod
- Helmet
- express-rate-limit

### Servicios externos

- **Web3Forms:** gestión del formulario de contacto.

## Características

- Diseño responsive.
- Modo oscuro.
- Formulario de contacto mediante Web3Forms.
- API REST propia para consultar proyectos y tecnologías.
- Persistencia de datos mediante PostgreSQL.
- Gestión de la base de datos con Prisma ORM.
- Validación de datos en los endpoints de escritura.
- Protección de las rutas de escritura mediante una clave de autorización.
- Limitación de peticiones y cabeceras HTTP de seguridad.

## Arquitectura

El proyecto se organiza en tres componentes principales:

```text
Portfolio/
├── frontend/
├── backend/
```

El frontend consume la API del backend para obtener los proyectos y las tecnologías asociadas.

El backend utiliza Express para exponer los endpoints y Prisma ORM para acceder a PostgreSQL.

## API REST

| Método | Endpoint           | Descripción                                 |
| ------ | ------------------ | ------------------------------------------- |
| `GET`  | `/api/proyectos`   | Consulta los proyectos.                     |
| `GET`  | `/api/tecnologias` | Consulta las tecnologías.                   |
| `POST` | `/api/proyectos`   | Crea un proyecto. Requiere autorización.    |
| `POST` | `/api/tecnologias` | Crea una tecnología. Requiere autorización. |

Las rutas de escritura requieren una clave de autorización y validan los datos recibidos antes de guardarlos en la base de datos.

## Desarrollo local

### Requisitos

- Node.js
- pnpm
- PostgreSQL

### Backend

1. Accede al directorio del backend.
2. Instala las dependencias con `pnpm install`.
3. Configura las variables de entorno necesarias en un archivo `.env`, siguiendo el ejemplo proporcionado en el proyecto.
4. Genera el cliente de Prisma y aplica las migraciones según la configuración del proyecto.
5. Ejecuta el backend utilizando el script de desarrollo definido en `package.json`.

> No publiques archivos `.env`, credenciales ni claves de autorización.

### Frontend

Consulta la configuración y los archivos del directorio `frontend/` para conocer cómo ejecutar la aplicación localmente.

## Estado del proyecto

**En desarrollo activo.**

El portfolio está desplegado y continúa evolucionando mediante la incorporación de nuevos proyectos, mejoras técnicas y actualizaciones de diseño.

## Sobre mí

Soy estudiante de desarrollo de software interesado en el desarrollo web y en la creación de soluciones tecnológicas.

Actualmente estoy ampliando mis conocimientos en frontend, backend, APIs REST y bases de datos, aplicándolos en proyectos personales y prácticos.

## Contacto

Puedes conocer más sobre mí, consultar mis proyectos y encontrar las diferentes formas de contacto en mi portfolio:

[ismartin.com](https://ismartin.com/)
