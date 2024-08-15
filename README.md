# Prueba Técnica

Este proyecto es una prueba técnica que utiliza **NestJS** en el backend y **React** en el frontend. El propósito es demostrar las habilidades en la creación de una aplicación completa que incluye un API backend y una interfaz de usuario frontend.

## Descripción del Proyecto

- **Backend**: Implementado con NestJS, utiliza MongoDB como base de datos a través de MongoDB Atlas. La API incluye endpoints para la gestión de alumnos.
- **Frontend**: Desarrollado en React, utilizando TypeScript y SCSS Modules. La interfaz permite añadir, visualizar y filtrar alumnos por grado. El frontend consume la API creada en el backend.

## Tabla de Contenidos

- [Prueba Técnica](#prueba-técnica)
  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
    - [Instalación del Backend](#instalación-del-backend)
    - [Instalación del Frontend](#instalación-del-frontend)
  - [Uso](#uso)
    - [Ejecución del Backend](#ejecución-del-backend)
    - [Ejecución del Frontend](#ejecución-del-frontend)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- MongoDB Atlas (para la base de datos)
- Git

## Instalación

### Instalación del Backend

1. Clona el repositorio en tu máquina local e instala dependencias:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Prueba_Tecnica/back-end
   npm install
   crea un archivo .env y agrega las siguientes lineas para la configuracion de variables de entorno
   MONGODB_URI=mongodb+srv://<danielbf151100>:<q1fQNFGdq5NqWfEb>@cluster0.pocmd.mongodb.net/Cluster0?retryWrites=true&w=majority

    MONGODB_USER=danielbf151100
    MONGODB_PASSWORD=q1fQNFGdq5NqWfEb
    MONGODB_CLUSTER=cluster0.pocmd.mongodb.net
    MONGODB_DATABASE=Cluster0
    MY_API_KEY=DanielBarrera
    ejecuta la aplicacion
    npm run start


 

  
 



 
 ### Instalación del Frontend
  
    ```bash
    cd ../front-end
    npm install
    ejecuta la aplcacion
    npm run dev


 ### Tecnologias utilizadas
 #### Backend:
        - NestJS
        - MongoDB Atlas
        - Mongoose
        - rest client (extension de vs studio code)
#### frontend:
        - React
        - TypeScript
        - SCSS Modules
        - Framer Motion