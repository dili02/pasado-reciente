# PLAN COMPLETO DE AUDITORÍA Y MEJORAS

## Proyecto: Pasado Reciente (Next.js + cPanel Static Export)

---

# FASE 1: EXPORT ESTÁTICO (CRÍTICO)

## Objetivo: Habilitar despliegue en cPanel

## Problema Central

El proyecto **no puede desplegarse en cPanel** porque el export estático está deshabilitado actualmente.

## Archivos a Modificar

| Archivo           | Línea | Problema                  | Cambio Requerido                  |
| ----------------- | ----- | ------------------------- | --------------------------------- |
| `next.config.mjs` | 5     | `// output: "export",`    | Descomentar (quitar `//`)         |
| `next.config.mjs` | 6     | `// trailingSlash: true,` | Descomentar (quitar `//`)         |
| `package.json`    | 8     | Script incorrecto         | Cambiar a `"build": "next build"` |

## Cambios Detallados

### 1.1 next.config.mjs

```javascript
// LÍNEAS 5-6 - CAMBIAR DE:
const nextConfig =
  process.env.NODE_ENV === "production"
    ? {
        // output: "export",           // ← QUITAR //
        // trailingSlash: true,       // ← QUITAR //
        images: {
          unoptimized: true,
        },
      }

// A:
const nextConfig =
  process.env.NODE_ENV === "production"
    ? {
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
```

### 1.2 package.json

```json
// LÍNEA 8 - CAMBIAR DE:
"build:static": "set NODE_ENV=production && npm run build"

// A:
"build:static": "next build"
```

## Verificación Post-Cambio

```bash
npm run build:static
```

Debería generar carpeta `out/` con archivos estáticos.

## ¿Por qué esta fase?

### Propósito

Habilitar el despliegue del proyecto en cPanel mediante la generación de archivos estáticos, ya que cPanel no soporta aplicaciones Next.js que requieren un servidor Node.js en ejecución.

### Importancia

**CRÍTICA**: Sin este cambio, el proyecto NO puede desplegarse en el entorno de producción (cPanel). Es el bloqueo principal que impide que el sitio esté disponible para los usuarios.

### Razonamiento Técnico

- **output: "export"**: Configura Next.js para generar archivos HTML/CSS/JS estáticos en lugar de una aplicación server-side. Esto es necesario porque cPanel solo puede servir archivos estáticos, no procesos de Node.js.
- **trailingSlash: true**: Asegura que todas las URLs terminen con `/`, lo cual es importante para el routing estático y evita problemas de navegación en servidores tradicionales.
- **images.unoptimized: true**: Desactiva la optimización de imágenes de Next.js (que requiere un servidor), ya que en export estático las imágenes se sirven directamente.
- **build script simplificado**: El script original era innecesariamente complejo; `next build` con `output: "export"` ya genera los archivos estáticos correctamente.

### Impacto

- **Positivo**: El sitio podrá desplegarse en cPanel y estará accesible para todos los usuarios.
- **Negativo**: Se pierden capacidades server-side (API routes, ISR, SSR), pero el proyecto está diseñado para funcionar completamente estático.

---

# FASE 2: ACCESIBILIDAD (WCAG 2.1 AA)

## Objetivo: Cumplir estándares de accesibilidad web

## 2.1 Skip Link (CRÍTICA)

### Archivo: `app/layout.tsx`

### Cambio 1: Agregar link oculto antes del Header

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:font-bold focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
>
  Saltar al contenido principal
</a>
```

### Cambio 2: Agregar id al main

```tsx
<main id="main-content" className="min-h-screen">
```

---

## 2.2 Contraste de Colores

### Archivo: `app/globals.css`

### Cambios en `:root`:

| Variable             | Valor Actual | Nuevo Valor  |
| -------------------- | ------------ | ------------ |
| `--primary`          | `24 95% 50%` | `24 85% 45%` |
| `--muted-foreground` | `40 10% 40%` | `40 15% 35%` |

```css
--primary: 24 85% 45%;
--muted-foreground: 40 15% 35%;
```

---

## 2.3 Roles ARIA y Landmarks

### Archivo: `components/header.tsx`

### Cambio 1: Nav Desktop (línea 91)

```tsx
<nav aria-label="Navegación principal" className="...">
```

### Cambio 2: Nav Mobile (línea 148)

```tsx
<nav aria-label="Menú móvil" className="...">
```

### Cambio 3: Contenedor Mobile Menu (línea 145)

```tsx
<div
  id="mobile-menu"
  aria-hidden={!isNavOpen}
  className="..."
>
```

### Cambio 4: Botón Menú Mobile (línea 134)

```tsx
<button
  aria-expanded={isNavOpen}
  aria-controls="mobile-menu"
  aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
  className="p-3 min-w-[44px] min-h-[44px]..."
>
```

---

## 2.4 Touch Targets Mínimos

### Archivo: `components/header.tsx`

### Cambio: Botón búsqueda móvil (línea 82)

```tsx
<button
  className="p-3 min-w-[44px] min-h-[44px]..."
  aria-label="Buscar"
>
```

---

## 2.5 Labels en Búsqueda

### Archivo: `components/search-modal.tsx`

### Cambio: Agregar aria-label al input

```tsx
<input
  type="search"
  aria-label="Buscar acciones terroristas"
  placeholder="..."
/>
```

---

## 2.6 Descripciones de Links

### Archivo: `components/terrorist-action-list-item.tsx`

### Cambio: Línea 86

```tsx
<span>Ver detalles de {action.title}</span>
```

---

## 2.7 Enlaces Rotos "Volver Arriba"

### Archivos Afectados:

- `app/asesinatos/[slug]/page.tsx` - línea 119
- `app/secuestros/[slug]/page.tsx` - línea 115
- `app/atentados/[slug]/page.tsx` - línea 115
- `app/robo-dinero/[slug]/page.tsx` - línea 99
- `app/robo-armamento-explosivos/[slug]/page.tsx` - línea 115
- `app/otras-acciones/[slug]/page.tsx` - línea 115

### Cambio:

```tsx
href = "#main-content";
```

---

## 2.8 Focus States Globales

### Archivo: `app/globals.css`

### Cambio: Agregar al final de @layer base

```css
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

---

## ¿Por qué esta fase?

### Propósito

Cumplir con los estándares WCAG 2.1 AA de accesibilidad web, garantizando que el sitio sea utilizable por personas con discapacidades visuales, motoras y cognitivas.

### Importancia

**ALTA**: La accesibilidad no es opcional - es un requisito legal en muchos países y una responsabilidad ética. Además, mejora la experiencia para TODOS los usuarios, no solo para personas con discapacidades.

### Razonamiento Técnico por Sub-fase

#### 2.1 Skip Link

- **¿Qué es?**: Un enlace oculto que solo aparece al recibir foco, permitiendo saltar directamente al contenido principal.
- **¿Por qué?**: Usuarios de lectores de pantalla y navegación por teclado no deberían tener que navegar por todo el header/menú en cada página. Este enlace les ahorra tiempo y frustración.
- **Impacto**: Mejora significativamente la experiencia de usuarios que navegan con teclado o lectores de pantalla.

#### 2.2 Contraste de Colores

- **¿Qué es?**: Ajustar los colores para cumplir con la ratio de contraste mínima de 4.5:1 para texto normal (WCAG AA).
- **¿Por qué?**: El contraste actual es demasiado bajo, dificultando la lectura para personas con baja visión o daltonismo.
- **Impacto**: Texto más legible para todos, especialmente en condiciones de mala iluminación.

#### 2.3 Roles ARIA y Landmarks

- **¿Qué es?**: Agregar etiquetas semánticas que ayudan a los lectores de pantalla a entender la estructura del sitio.
- **¿Por qué?**: Los lectores de pantalla necesitan saber qué es cada elemento (navegación, menú móvil, etc.) para navegar eficientemente.
- **Impacto**: Navegación más eficiente para usuarios de lectores de pantalla.

#### 2.4 Touch Targets Mínimos

- **¿Qué es?**: Asegurar que los botones tengan al menos 44x44px (requisito WCAG).
- **¿Por qué?**: Botones pequeños son difíciles de activar en dispositivos táctiles, especialmente para personas con problemas motores.
- **Impacto**: Mejora usabilidad en móviles y tablets.

#### 2.5 Labels en Búsqueda

- **¿Qué es?**: Agregar `aria-label` descriptivo al input de búsqueda.
- **¿Por qué?**: Los lectores de pantalla necesitan saber qué hace el campo; el placeholder no es suficiente.
- **Impacto**: Usuarios de lectores de pantalla pueden entender el propósito del campo.

#### 2.6 Descripciones de Links

- **¿Qué es?**: Agregar texto descriptivo a los enlaces "Ver detalles".
- **¿Por qué?**: Enlaces como "Ver detalles" no son informativos fuera de contexto; los usuarios de lectores de pantalla necesitan saber qué van a ver.
- **Impacto**: Navegación más clara y menos confusa.

#### 2.7 Enlaces Rotos "Volver Arriba"

- **¿Qué es?**: Corregir los enlaces que apuntan a `#` para que apunten a `#main-content`.
- **¿Por qué?**: Enlaces a `#` no hacen nada y confunden a los usuarios; deben apuntar a un destino válido.
- **Impacto**: Navegación funcional y menos confusión.

#### 2.8 Focus States Globales

- **¿Qué es?**: Agregar estilos visuales claros cuando un elemento recibe foco.
- **¿Por qué?**: Usuarios que navegan con teclado necesitan ver claramente qué elemento está activo.
- **Impacto**: Navegación por teclado más clara y usable.

### Impacto General

- **Positivo**: Sitio accesible para millones de personas con discapacidades, mejor experiencia para todos, cumplimiento legal, mejor SEO (Google favorece sitios accesibles).
- **Negativo**: Cambios cosméticos menores en colores y espaciados.

---

# FASE 3: SEO (SEARCH ENGINE OPTIMIZATION)

## Objetivo: Mejorar posicionamiento en buscadores

## 3.1 Open Graph Tags

### Archivo: `app/layout.tsx`

### Cambio: Agregar en metadata ✅

```typescript
openGraph: {
  type: "website",
  locale: "es_UY",
  url: "https://www.pasadoreciente.com/",
  siteName: "Pasado Reciente",
  title: "Pasado Reciente - Museo de la Memoria",
  description: "Hemeroteca digital con noticias escaneadas de prensa de los años 60 y 70...",
  images: [{
    url: "https://www.pasadoreciente.com/opengraph-image.png",
    width: 1200,
    height: 630,
  }],
},
twitter: {
  card: "summary_large_image",
  title: "Pasado Reciente",
  description: "Museo de la Memoria del Pasado Reciente",
},
themeColor: "#f5f3ef",
```

---

## 3.2 Schema.org JSON-LD ✅

### Archivo: `app/layout.tsx`

### Opción A: Implementación básica (sin TypeScript types)

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Pasado Reciente",
      description: "Museo de la Memoria del Pasado Reciente",
      url: "https://www.pasadoreciente.com/",
      publisher: { "@type": "Organization", name: "Pasado Reciente" },
      inLanguage: "es-UY",
    }),
  }}
/>
```

### Opción B: Con TypeScript types (recomendado)

#### Instalar paquete:

```bash
npm install schema-dts
```

#### Agregar import y usar tipos:

```tsx
import { WebSite, WithContext } from "schema-dts";

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pasado Reciente",
  description: "Museo de la Memoria del Pasado Reciente",
  url: "https://www.pasadoreciente.com/",
  publisher: { "@type": "Organization", name: "Pasado Reciente" },
  inLanguage: "es-UY",
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>;
```

### Validación:

- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/

---

## 3.3 Canonical URLs ✅

### Archivo: `app/layout.tsx`

```typescript
alternates: {
  canonical: "https://www.pasadoreciente.com/",
  languages: { "es-UY": "https://www.pasadoreciente.com/" },
},
```

---

## 3.4 Robots Meta ✅

### Archivo: `app/layout.tsx`

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
```

---

## 3.5 Favicon

### Estado: ✅ YA EXISTE

- `app/favicon.ico` existe

---

## 3.6 Open Graph Image

### Estado: ✅ YA EXISTE

- `app/opengraph-image.png` existe

---

## ¿Por qué esta fase?

### Propósito

Mejorar el posicionamiento del sitio en los motores de búsqueda (Google, Bing, etc.) para aumentar la visibilidad y el tráfico orgánico.

### Importancia

**ALTA**: El SEO es fundamental para que el sitio sea encontrado por personas que buscan información sobre el pasado reciente de Uruguay. Sin buen SEO, el sitio será invisible para la mayoría de los usuarios potenciales.

### Razonamiento Técnico por Sub-fase

#### 3.1 Open Graph Tags

- **¿Qué es?**: Metadatos que controlan cómo se muestra el sitio cuando se comparte en redes sociales (Facebook, Twitter, LinkedIn, etc.).
- **¿Por qué?**: Cuando alguien comparte un enlace, las redes sociales usan estos tags para mostrar una imagen atractiva, título y descripción. Sin ellos, el enlace se ve poco profesional.
- **Impacto**: Mejora la apariencia y tasa de clics cuando el sitio se comparte en redes sociales.

#### 3.2 Schema.org JSON-LD

- **¿Qué es?**: Datos estructurados en formato JSON-LD que ayudan a los motores de búsqueda a entender el contenido del sitio.
- **¿Por qué?**: Google y otros buscadores usan estos datos para mostrar rich snippets (resultados enriquecidos) en los resultados de búsqueda, lo que aumenta la visibilidad.
- **Impacto**: Resultados de búsqueda más informativos y atractivos, mayor tasa de clics.

#### 3.3 Canonical URLs

- **¿Qué es?**: Etiqueta que indica la URL canónica (oficial) de una página, evitando contenido duplicado.
- **¿Por qué?**: Sin canonical, Google puede penalizar el sitio por contenido duplicado (por ejemplo, con y sin www, o con y sin trailing slash).
- **Impacto**: Evita penalizaciones por contenido duplicado, consolida el SEO en una sola URL.

#### 3.4 Robots Meta

- **¿Qué es?**: Instrucciones para los crawlers de los motores de búsqueda sobre qué indexar y cómo.
- **¿Por qué?**: Controla qué páginas se indexan y cómo se muestran en los resultados de búsqueda.
- **Impacto**: Mejor control sobre qué aparece en los resultados de búsqueda, evitando indexación de páginas irrelevantes.

#### 3.5 Favicon

- **¿Qué es?**: El icono que aparece en la pestaña del navegador y en los marcadores.
- **¿Por qué?**: Ya existe, pero es importante para el branding y reconocimiento del sitio.
- **Impacto**: Mejora la identidad visual del sitio en el navegador.

#### 3.6 Open Graph Image

- **¿Qué es?**: Imagen que se muestra cuando se comparte el sitio en redes sociales.
- **¿Por qué?**: Ya existe, pero es crítica para que los enlaces compartidos se vean atractivos.
- **Impacto**: Mejora la apariencia del sitio cuando se comparte en redes sociales.

### Impacto General

- **Positivo**: Mayor visibilidad en buscadores, más tráfico orgánico, mejor apariencia en redes sociales, mejor branding.
- **Negativo**: Ninguno significativo; son mejoras puramente positivas.

---

# FASE 4: LEGIBILIDAD

## Objetivo: Mejorar experiencia de lectura

## 4.1 Tipografía Base

### Archivo: `app/globals.css`

### Cambio: Font size y line-height

```css
body {
  font-size: 18px;
  line-height: 1.7;
}

.prose {
  max-width: 65ch;
  line-height: 1.8;
}
```

---

## 4.2 Textos Justificados

### Archivo: `components/home/intro.tsx`

### Cambio: Líneas 36 y 48

```tsx
// Cambiar text-justify por text-left
className = "... text-left";
```

---

## ¿Por qué esta fase?

### Propósito

Mejorar la experiencia de lectura del sitio, haciendo el texto más legible y fácil de consumir para todos los usuarios.

### Importancia

**MEDIA-ALTA**: El contenido del sitio es principalmente textual (noticias históricas, testimonios, etc.). Si el texto es difícil de leer, los usuarios abandonarán el sitio rápidamente.

### Razonamiento Técnico por Sub-fase

#### 4.1 Tipografía Base

- **¿Qué es?**: Aumentar el tamaño de fuente base de 16px a 18px y mejorar el line-height de 1.5 a 1.7-1.8.
- **¿Por qué?**: El tamaño actual (16px) es demasiado pequeño para lectura cómoda, especialmente en pantallas modernas de alta resolución. El line-height mayor mejora la legibilidad al dar más espacio entre líneas.
- **Impacto**: Texto más fácil de leer, menos fatiga visual, mejor experiencia de lectura prolongada.

#### 4.2 Textos Justificados

- **¿Qué es?**: Cambiar de `text-justify` a `text-left` en el componente intro.
- **¿Por qué?**: El texto justificado crea "ríos" blancos irregulares entre palabras, lo que dificulta la lectura. El texto alineado a la izquierda es más legible y natural.
- **Impacto**: Lectura más fluida y natural, menos distracciones visuales.

### Impacto General

- **Positivo**: Mejor experiencia de lectura, menor tasa de rebote, mayor tiempo en el sitio, mejor accesibilidad para personas con problemas de visión.
- **Negativo**: El texto ocupará más espacio vertical, pero esto es aceptable para mejorar la legibilidad.

---

# FASE 5: DISEÑO RESPONSIVO

## Objetivo: Adaptación perfecta a todos dispositivos

## 5.1 Header Móvil

### Archivo: `components/header.tsx`

### Cambio 1: py-6 → py-4 (línea 58)

```tsx
<div className="... py-4 md:py-6 ...">
```

### Cambio 2: h-12 → h-14 (línea 78)

```tsx
<div className="flex h-14 md:h-12 ...">
```

---

## 5.2 Grid de Listas

### Archivos: `app/*/page.tsx`

### Cambio: Forzar 1 columna en móvil

```tsx
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
```

### Aplicar a:

- `app/asesinatos/page.tsx` - línea 69
- `app/secuestros/page.tsx`
- `app/atentados/page.tsx`
- `app/robo-dinero/page.tsx`
- `app/robo-armamento-explosivos/page.tsx`
- `app/otras-acciones/page.tsx`

---

## ¿Por qué esta fase?

### Propósito

Garantizar que el sitio se vea y funcione perfectamente en todos los dispositivos (móviles, tablets, desktops), ya que cada vez más usuarios acceden desde dispositivos móviles.

### Importancia

**ALTA**: Actualmente, más del 60% del tráfico web proviene de dispositivos móviles. Si el sitio no funciona bien en móvil, se pierde la mayoría de los usuarios potenciales.

### Razonamiento Técnico por Sub-fase

#### 5.1 Header Móvil

- **¿Qué es?**: Reducir el padding vertical del header en móvil (py-6 → py-4) y ajustar la altura del contenedor (h-12 → h-14 en móvil, h-12 en desktop).
- **¿Por qué?**: El header actual ocupa demasiado espacio vertical en móviles, reduciendo el área visible del contenido. En móviles, el espacio es limitado y cada pixel cuenta.
- **Impacto**: Más espacio visible para el contenido en móviles, mejor experiencia de usuario en pantallas pequeñas.

#### 5.2 Grid de Listas

- **¿Qué es?**: Forzar que las listas de acciones tengan 1 columna en móvil y 2 columnas en pantallas más grandes (sm:grid-cols-2).
- **¿Por qué?**: Actualmente, las listas pueden mostrarse en 2 columnas incluso en móviles pequeños, lo que hace los elementos muy estrechos y difíciles de leer/tocar.
- **Impacto**: Mejor legibilidad y usabilidad en móviles, elementos más fáciles de tocar.

### Impacto General

- **Positivo**: Experiencia consistente y óptima en todos los dispositivos, mayor retención de usuarios móviles, mejor SEO (Google favorece sitios mobile-friendly).
- **Negativo**: Ninguno significativo; son ajustes de diseño responsive.

---

# FASE 6: RENDIMIENTO

## Objetivo: Carga más rápida

## 6.1 Lazy Loading Imágenes ✅

### Pattern de Cambio:

```tsx
// ANTES:
<img src={...} alt="..." />

// DESPUÉS:
<img src={...} alt="..." loading="lazy" decoding="async" />
```

### Imágenes a Actualizar:

| #   | Componente        | Archivo                        | Línea     |
| --- | ----------------- | ------------------------------ | --------- |
| 1   | Avatar víctima    | `victim-info.tsx`              | 53        |
| 2   | Imágenes Criminis | `apology-for-crime-images.tsx` | 52        |
| 3   | Memorial          | `memorial.tsx`                 | 101       |
| 4   | Intro Memorial    | `intro-memorial.tsx`           | 138       |
| 5   | Virtual Memorial  | `virtual-memorial.tsx`         | 38        |
| 6-7 | Detail Pages      | `asesinatos/[slug]/page.tsx`   | 139, 188  |
| 8-9 | Detail Pages      | `secuestros/[slug]/page.tsx`   | similares |

---

## 6.2 Font Preloading

### Archivo: `app/layout.tsx`

### Cambio:

```tsx
const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
```

---

## ¿Por qué esta fase?

### Propósito

Optimizar el rendimiento del sitio para que cargue más rápido, mejorando la experiencia del usuario y el SEO (Google favorece sitios rápidos).

### Importancia

**ALTA**: El rendimiento es crítico para la retención de usuarios. Los estudios muestran que el 53% de los usuarios abandonan un sitio si tarda más de 3 segundos en cargar. Además, Google usa la velocidad como factor de ranking.

### Razonamiento Técnico por Sub-fase

#### 6.1 Lazy Loading Imágenes

- **¿Qué es?**: Agregar `loading="lazy"` y `decoding="async"` a las imágenes que no están en el viewport inicial.
- **¿Por qué?**: Las imágenes son los recursos más pesados de una página. Sin lazy loading, el navegador descarga TODAS las imágenes al cargar la página, incluso las que el usuario no ve. Esto ralentiza significativamente la carga inicial.
- **Impacto**: Carga inicial mucho más rápida, menor consumo de datos (especialmente importante en móviles), mejor Core Web Vitals (LCP, FID, CLS).

#### 6.2 Font Preloading

- **¿Qué es?**: Configurar las fuentes Inter y Newsreader con `display: "swap"` y `preload: true`.
- **¿Por qué?**: Las fuentes personalizadas pueden causar FOIT (Flash of Invisible Text) o FOUT (Flash of Unstyled Text) si no se cargan correctamente. `display: "swap"` muestra el texto de inmediato con una fuente de respaldo, luego la intercambia cuando la fuente personalizada carga. `preload: true` indica al navegador que priorice la descarga de estas fuentes.
- **Impacto**: Texto visible más rápido, mejor percepción de velocidad, menor layout shift (CLS).

### Impacto General

- **Positivo**: Sitio mucho más rápido, mejor experiencia de usuario, mejor SEO (Core Web Vitals), menor tasa de rebote, mejor conversión.
- **Negativo**: Ninguno significativo; son optimizaciones de rendimiento puramente positivas.

---

# FASE 7: LIMPIEZA DE CÓDIGO

## Objetivo: Código mantenible

## 7.1 Código Muerto

### Archivos con comentarios innecesarios:

| Archivo                          | Líneas            | Acción                    |
| -------------------------------- | ----------------- | ------------------------- |
| `app/page.tsx`                   | 132               | Eliminar comentario       |
| `terrorist-action-list-item.tsx` | 98-118            | Eliminar código comentado |
| `asesinatos/[slug]/page.tsx`     | 48-50, 74-78, 116 | Eliminar comentarios      |
| `asesinatos/page.tsx`            | 39-51             | Eliminar comentarios      |
| `notice.tsx`                     | Múltiples         | Limpiar comentarios       |
| `testimonies.tsx`                | 16-30             | Limpiar comentarios       |

---

## 7.2 Funciones Duplicadas

### Crear en `lib/utils.ts`:

```typescript
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(new Date(date));
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    currencyDisplay: "code",
  }).format(amount);
}
```

### Archivos a actualizar:

| Archivo                          | Función Duplicada                        |
| -------------------------------- | ---------------------------------------- |
| `notice.tsx`                     | getFormattedDateToString (líneas 10, 43) |
| `victim-info.tsx`                | getFormattedDateToString (líneas 27, 43) |
| `asesinatos/page.tsx`            | getFormattedDateToString                 |
| `asesinatos/[slug]/page.tsx`     | getFormattedDateToString                 |
| `terrorist-action-list-item.tsx` | getFormattedDateToString, formatCurrency |
| `efemerides.tsx`                 | formatCurrency                           |
| Y otros 10+ archivos             |

---

## 7.3 Imports No Usados ✅

### Archivos a verificar:

- `app/asesinatos/[slug]/page.tsx`
- `app/efemerides/page.tsx`
- Varios otros

---

## ¿Por qué esta fase?

### Propósito

Mejorar la mantenibilidad del códigobase eliminando código innecesario, reduciendo duplicación y limpiando imports no usados.

### Importancia

**MEDIA**: Un código limpio y bien organizado es más fácil de mantener, depurar y extender. La duplicación de código es una fuente común de bugs y hace difícil hacer cambios consistentes.

### Razonamiento Técnico por Sub-fase

#### 7.1 Código Muerto

- **¿Qué es?**: Eliminar comentarios innecesarios y código comentado que ya no se usa.
- **¿Por qué?**: El código comentado y los comentarios innecesarios crean "ruido" que dificulta leer y entender el código. Si el código no se usa, debería eliminarse (el git history lo mantiene).
- **Impacto**: Código más limpio y legible, menor confusión para desarrolladores futuros.

#### 7.2 Funciones Duplicadas

- **¿Qué es?**: Crear funciones reutilizables en `lib/utils.ts` (formatDate, formatDateShort, formatCurrency) y reemplazar las duplicaciones en 15+ archivos.
- **¿Por qué?**: La función `getFormattedDateToString` está duplicada en más de 10 archivos. Si necesitamos cambiar el formato de fecha en el futuro, tendríamos que cambiarlo en 10 lugares diferentes, lo cual es propenso a errores. Al centralizarla, solo cambiamos en un lugar.
- **Impacto**: Código más mantenible, menor riesgo de inconsistencias,遵循 el principio DRY (Don't Repeat Yourself).

#### 7.3 Imports No Usados

- **¿Qué es?**: Eliminar imports que se importan pero nunca se usan en el archivo.
- **¿Por qué?**: Los imports no usados aumentan innecesariamente el tamaño del bundle y crean confusión sobre qué dependencias realmente se necesitan.
- **Impacto**: Bundle ligeramente más pequeño, código más claro, mejor para herramientas de análisis estático.

### Impacto General

- **Positivo**: Código más mantenible, menor riesgo de bugs, más fácil de agregar nuevas funcionalidades, mejor experiencia para desarrolladores.
- **Negativo**: Ninguno significativo; son mejoras de calidad de código.

---

# FASE 8: MANEJO DE ERRORES

## Objetivo: Mejor experiencia en errores

## 8.1 Página 404 Mejorada ✅

### Archivo: `app/not-found.tsx`

### Mejoras sugeridas:

- Agregar links a páginas principales
- Agregar búsqueda sugerida
- Agregar sugerencias de navegación

---

## 8.2 Error Boundary ✅

### Crear: `app/error.tsx`

```tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
        <p className="text-muted-foreground mb-4">
          Ha ocurrido un error inesperado.
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
```

---

## ¿Por qué esta fase?

### Propósito

Mejorar la experiencia del usuario cuando ocurren errores (404, errores de servidor, etc.) proporcionando páginas de error útiles y opciones de recuperación.

### Importancia

**MEDIA**: Los errores son inevitables en cualquier aplicación web. Cuando ocurren, es crítico proporcionar una buena experiencia al usuario en lugar de mostrar errores técnicos confusos o páginas en blanco.

### Razonamiento Técnico por Sub-fase

#### 8.1 Página 404 Mejorada

- **¿Qué es?**: Mejorar la página `not-found.tsx` agregando links a páginas principales, búsqueda sugerida y sugerencias de navegación.
- **¿Por qué?**: La página 404 actual probablemente es muy básica. Un usuario que llega a una 404 necesita ayuda para encontrar lo que busca, no solo un mensaje de "página no encontrada".
- **Impacto**: Menor tasa de rebote en errores 404, mejor experiencia de usuario, más probabilidad de que el usuario encuentre el contenido que busca.

#### 8.2 Error Boundary

- **¿Qué es?**: Crear un componente `error.tsx` que capture errores de React y muestre una UI amigable con opción de reintentar.
- **¿Por qué?**: Sin un error boundary, cuando ocurre un error en React, toda la página puede quedar en blanco o mostrar un error técnico confuso. Un error boundary permite mostrar una UI amigable y dar al usuario la opción de recuperar la aplicación.
- **Impacto**: Mejor manejo de errores en tiempo de ejecución, experiencia de usuario más robusta, menos confusión cuando ocurren errores.

### Impacto General

- **Positivo**: Experiencia de usuario más robusta, menor frustración cuando ocurren errores, mejor percepción de calidad del sitio.
- **Negativo**: Ninguno significativo; son mejoras de manejo de errores.

---

# FASE 9: DEPENDENCIAS

## Objetivo: Mantener actualizado

## Actualizar Paquetes:

```bash
npm install next@latest
npm install lucide-react@latest
npm install tailwindcss@latest
```

### Tabla de Versiones:

| Paquete      | Actual  | Nueva (mínima) |
| ------------ | ------- | -------------- |
| next         | 14.2.5  | 14.2.10+       |
| lucide-react | 0.416.0 | 0.460.0+       |
| tailwindcss  | 3.4.1   | 3.4.17+        |

---

## ¿Por qué esta fase?

### Propósito

Mantener las dependencias del proyecto actualizadas para beneficiarse de correcciones de seguridad, mejoras de rendimiento y nuevas características.

### Importancia

**MEDIA-ALTA**: Las dependencias desactualizadas pueden tener vulnerabilidades de seguridad conocidas, bugs que ya fueron corregidos, o missing features que mejorarían el proyecto. Mantenerlas actualizadas es una práctica de mantenimiento esencial.

### Razonamiento Técnico

#### Actualización de Paquetes

- **¿Qué es?**: Actualizar Next.js de 14.2.5 a 14.2.10+, lucide-react de 0.416.0 a 0.460.0+, y tailwindcss de 3.4.1 a 3.4.17+.
- **¿Por qué?**:
  - **Next.js 14.2.5 → 14.2.10+**: Las versiones intermedias incluyen correcciones de bugs importantes, mejoras de rendimiento y parches de seguridad. Next.js tiene actualizaciones frecuentes que resuelven problemas comunes.
  - **lucide-react 0.416.0 → 0.460.0+**: Lucide React es una librería de iconos que se actualiza constantemente con nuevos iconos y mejoras. Versiones más nuevas pueden tener iconos que necesitas o mejoras de rendimiento.
  - **tailwindcss 3.4.1 → 3.4.17+**: Tailwind CSS tiene actualizaciones que incluyen correcciones de bugs, mejoras en el compilador y nuevas utilidades.
- **Impacto**: Menor riesgo de vulnerabilidades de seguridad, acceso a nuevas características y mejoras, mejor rendimiento, menor riesgo de bugs conocidos.

### Impacto General

- **Positivo**: Mejor seguridad, acceso a nuevas características, mejor rendimiento, menor riesgo de bugs, mejor compatibilidad con el ecosistema.
- **Negativo**: Riesgo menor de breaking changes (aunque en versiones menores como estas es raro), necesidad de probar el sitio después de la actualización.

---

# RESUMEN EJECUTIVO

## Archivos a Modificar (por fase):

| Fase | Cantidad | Archivos Principales                                                                                                |
| ---- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| 1    | 2        | `next.config.mjs`, `package.json`                                                                                   |
| 2    | 9        | `layout.tsx`, `globals.css`, `header.tsx`, `terrorist-action-list-item.tsx`, `search-modal.tsx`, 6 páginas `[slug]` |
| 3    | 1        | `layout.tsx`                                                                                                        |
| 4    | 2        | `globals.css`, `intro.tsx`                                                                                          |
| 5    | 7+       | `header.tsx`, 6 páginas de listas                                                                                   |
| 6    | 16+      | Múltiples componentes con imágenes                                                                                  |
| 7    | 15+      | `lib/utils.ts`, múltiples componentes                                                                               |
| 8    | 2        | `not-found.tsx`, crear `error.tsx`                                                                                  |
| 9    | 1        | `package.json`                                                                                                      |

---

## Orden de Implementación Sugerido:

1. **Fase 1** (Crítico) - Export estático para cPanel
2. **Fase 2** - Accesibilidad
3. **Fase 3** - SEO
4. **Fase 4** - Legibilidad
5. **Fase 5** - Responsive
6. **Fase 6** - Rendimiento
7. **Fase 7** - Limpieza código
8. **Fase 8** - Errores
9. **Fase 9** - Dependencias
