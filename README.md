# 🛒 Derenvio Challenge - Frontend

Este proyecto es parte de la prueba técnica para evaluar habilidades en **React.js**.  
El frontend consume la API del backend para gestionar **productos** y **precios especiales** asociados a usuarios.  

## 🚀 **Tecnologías utilizadas**
- **React.js** para la interfaz de usuario.
- **TypeScript** para una mejor tipificación y mantenimiento del código.
- **Vite** para una configuración rápida y optimizada del proyecto.
- **React Router** para la navegación entre páginas.

---

## 📌 **Estructura del proyecto**
```bash
DERENVIO-FRONT/
│── src/
│   ├── components/      # Componentes reutilizables
│   ├── features/        # Páginas principales
│   ├── context/         # Context API para manejo global del estado
│   ├── hooks/           # Custom hooks para lógica reutilizable
│   ├── App.tsx          # Componente principal de la aplicación
│   ├── main.tsx         # Punto de entrada de la aplicación
│── public/              # Archivos estáticos
│── .env.example         # Variables de entorno (renombrar a .env)
│── package.json         # Dependencias y configuración de NPM
│── vite.config.ts       # Configuración de Vite
│── README.md            # Documentación del proyecto
```

## Instalacion

1. Clona el repositorio
```bash
 git clone [https://github.com/jsdiaz19/DERENVIO-BACK.git](https://github.com/jsdiaz19/DERENVIO-FRONT.git)
```
2. Navega a la carpeta del proyecto:
```bash
 cd store
```
3. Instala las dependencias:
```bash
 npm install
```
4. Ejecuta el proyecto:
```bash
 npm run dev
```

## 📡 **Rutas y Páginas del Frontend**
| Página          | Ruta              | Descripción |
|----------------|------------------|-------------|
| **Inicio**    | `/`               | Página principal con listado de productos |
| **Productos** | `/article`        | Gestión de productos disponibles |
| **Precios**   | `/price`          | Administración de precios especiales |

---

## 🎯 **Justificación de elecciones técnicas**
### 🔹 **React.js**
Se utilizó **React** por su flexibilidad y modularidad en la creación de interfaces dinámicas.

### 🔹 **TypeScript**
Permite mejor mantenimiento del código y detección temprana de errores.

### 🔹 **Vite**
Se eligió **Vite** en lugar de `create-react-app` por su rapidez en desarrollo y menor tiempo de carga.

### 🔹 **React Router**
Se usó **React Router** para manejar la navegación entre páginas sin necesidad de recargar la aplicación.

