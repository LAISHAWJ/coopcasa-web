# COOPCASA Web

Sitio web institucional de COOPCASA (cooperativa de ahorro y crédito), migrado desde el
prototipo HTML aprobado por el cliente a un proyecto de producción con **Astro**,
**TypeScript** y **Tailwind CSS**.

> Este README se completa de forma incremental a medida que se migra el proyecto.
> La documentación final (arquitectura, guía de contenido editable, integración de
> backend, etc.) se agrega al cierre de la migración.

## Stack

- [Astro](https://astro.build) 7 (TypeScript en modo `strict`)
- [Tailwind CSS](https://tailwindcss.com) 4
- `@astrojs/sitemap`

## Comandos

| Comando           | Acción                                          |
| ------------------ | ------------------------------------------------ |
| `npm install`       | Instala las dependencias                          |
| `npm run dev`       | Inicia el servidor de desarrollo                  |
| `npm run build`     | Genera el sitio de producción en `./dist/`        |
| `npm run preview`   | Previsualiza el build de producción localmente    |
