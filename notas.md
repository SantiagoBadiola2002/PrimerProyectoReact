- 1) Crear la carpeta del proyecto (no puede tener mayusula).
- 2) Instalar modulos: "npx create-react-app ." .
- 3) Inicializar el proyecto: "npm start".

**node_modules/**: Esta carpeta contiene todas las dependencias y módulos que React y otros paquetes necesitan para funcionar. Es gestionada automáticamente por npm o 
yarn cuando instalas paquetes.

**public/**: Aquí se guardan los archivos públicos, como el index.html, que es la plantilla base que React usa para insertar la aplicación. También puede incluir otros
recursos estáticos como imágenes, íconos y archivos.

**src/**: Esta es la carpeta principal donde se almacena el código fuente de la aplicación React. Aquí encontrarás los componentes de React (como App.js), hojas de 
estilos (CSS), y cualquier otro archivo relacionado con la lógica de la aplicación.

**.gitignore**: Archivo que indica qué archivos o carpetas deben ser ignorados por Git, como node_modules/ y otros archivos generados automáticamente.

**package-lock.json**: Este archivo asegura que todas las dependencias del proyecto se instalen exactamente en la versión que se especificó en el momento de la 
instalación. Ayuda a garantizar que la aplicación funcione de manera consistente en diferentes entornos.

**package.json**: Archivo principal de configuración del proyecto. Define las dependencias (librerías necesarias), scripts, nombre del proyecto y otra información 
importante.

**README.md**: Documento donde se incluye información sobre el proyecto, como cómo instalarlo, ejecutarlo, o cualquier otra información útil para otros desarrolladores 
o usuarios.

**Utilizar rutas para navegar estre componentes**: 
    - npm install react-router-dom
    - Importar los componentes en App.js
    - Router y Routes: Se envolvió la aplicación en Router para habilitar el enrutamiento y se agregó el componente Routes para definir las rutas.
    - Ej: Ruta a "Hola Mundo": Se agregó la ruta /hola-mundo para que cuando accedas a esa URL, el componente Saludo se renderice.

**Crear un componente**: components/nombreComponente: compontnt.css y component.ts