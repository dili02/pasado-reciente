# Pasado Reciente

Hemeroteca fue confeccionada exclusivamente con noticias periodísticas de las décadas del 60 y 70 escaneadas de las páginas originales de los diarios. De esta manera se podrá acceder al relato cronológico documentado exento de opiniones y/o relatos alejados en el tiempo y contexto en que sucedieron los hechos. En virtud del tiempo transcurrido, es necesario precisar que el inicio de los hechos se dieron en el marco de un gobierno democrático surgido de elecciones libres, el cual, al igual que la sociedad de la época, se vieron sorprendidos ante los embates de una situación ajena a los hábitos de convivencia, como lo demuestran estas publicaciones.

## 🚀 Características

- Interfaz moderna construida con Next.js 14 y React
- Diseño responsivo con Tailwind CSS
- Línea de tiempo histórica interactiva
- Integración de contenido multimedia
- Optimizado para SEO

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm (recomendado) o npm
- Git

## 💻 Configuración de Desarrollo

1. Clonar el repositorio:

```bash
git clone https://github.com/dili02/pasado-reciente.git
cd pasado-reciente
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm dev
```

Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🏗️ Opciones de Compilación y Despliegue

### Compilación para Producción

Crear una compilación optimizada para producción:

```bash
npm build
npm start
```

### Exportación Estática

Generar una exportación estática de la aplicación:

```bash
npm build
npm export
```

Los archivos estáticos se generarán en el directorio `out`.

### Despliegue con Docker

1. Construir la imagen de Docker:

```bash
docker build -t pasado-reciente .
```

2. Ejecutar el contenedor:

```bash
docker run -p 3000:3000 pasado-reciente
```

### Despliegue en Servidor Node.js

1. Instalar PM2 globalmente:

```bash
npm install -g pm2
```

2. Iniciar la aplicación con PM2:

```bash
pm2 start npm --name "pasado-reciente" -- start
```

## 📁 Estructura del Proyecto

```
├── app/           # Directorio de la aplicación Next.js
├── components/    # Componentes de React
├── public/        # Archivos estáticos
├── lib/           # Funciones de utilidad
└── db/            # Configuraciones de base de datos
```

## 🛠️ Construido Con

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [TypeScript](https://www.typescriptlang.org/) - Seguridad de tipos

## 🤝 Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/caracteristica-asombrosa`)
3. Haz commit de tus cambios (`git commit -m 'Agregar característica asombrosa'`)
4. Haz push a la rama (`git push origin feature/caracteristica-asombrosa`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
