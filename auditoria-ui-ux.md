# Auditoría UX/UI - Lista de Tareas

## 🚨 Alta Prioridad

### Tipografía & Legibilidad

- [x] Centralizar carga de Newsreader en `layout.tsx` (actualmente cargado 6+ veces en diferentes componentes)
  - Componentes afectados: header.tsx, intro-chronological-summary.tsx, intro-memorial.tsx, action-vindicated.tsx, terrorist-action-list-item.tsx, page.tsx
  - Configurar todos los pesos necesarios: subsets=["latin"], weight=["400", "800"], style=["italic"]

### Sistema de Color

- [x] Remover hardcoded accent color `#00ff99` en `tailwind.config.ts` línea 55
  - Reemplazar con `hsl(var(--accent))` para consistencia con el sistema de variables CSS

### Mantenibilidad CSS

- [x] Remover console.logs de producción
  - `components/data-table/data-table-acciones.tsx` líneas 66-67

- [x] Remover código comentado
  - `components/data-table/data-table-acciones.tsx` (múltiples bloques)
  - `components/home/intro-memorial.tsx` líneas 25-27, 121-123, 126-134
  - `components/home/intro-chronological-summary.tsx` líneas 20-22

### Escala Tipográfica

- [x] Crear escala tipográfica en `tailwind.config.ts`
  ```typescript
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
    'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
    '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
  }
  ```

---

## 🟡 Prioridad Media

### Espaciado & Ritmo

- [x] Definir tokens de espaciado en `tailwind.config.ts`

  ```typescript
  spacing: {
    'xs': '0.25rem',  // 4px
    'sm': '0.5rem',   // 8px
    'md': '1rem',     // 16px
    'lg': '1.5rem',   // 24px
    'xl': '2rem',     // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  }
  ```

- [x] Estandarizar border thickness
  - thin: 1px (border, border-t, border-b, etc.)
  - default: 2px (border-2, border-t-2, etc.)
  - thick: 4px (border-4, border-b-4, etc.)

- [ ] Definir sistema de espaciado por jerarquía
  - Section: spacing-3xl (py-12, my-12)
  - Subsection: spacing-2xl (py-8, my-8)
  - Element: spacing-xl (py-4, my-4)
  - Small: spacing-lg (py-2, my-2)

### Sistema de Color

- [x] Completar variables CSS para modo dark en `globals.css`
  - Agregar: --card, --card-foreground, --popover, --popover-foreground, --secondary, --secondary-foreground, --muted, --muted-foreground, --accent, --accent-foreground, --destructive, --destructive-foreground, --input, --ring

- [x] Convertir colores hardcoded a variables CSS
  - `components/home/intro-chronological-summary.tsx` línea 41: `#e4d8b4` → variable CSS

### Consistencia de Estilos

- [x] Definir tokens de border-radius en `tailwind.config.ts`

  ```typescript
  borderRadius: {
    'sm': '0.125rem',   // 2px
    'md': '0.375rem',   // 6px
    'lg': '0.5rem',     // 8px
    'full': '9999px',
  }
  ```

- [ ] Estandarizar uso de border-radius
  - Usar rounded-sm para elementos pequeños
  - Usar rounded-md para elementos medianos
  - Usar rounded-lg para elementos grandes
  - Usar rounded-full para círculos/badges

- [x] Usar siempre el componente Button para botones
  - Reemplazar estilos inline en:
    - `components/home/intro-memorial.tsx` líneas 103-107, 165-169
    - Otros componentes con botones inline

### Mantenibilidad CSS

- [x] Convertir inline styles a clases Tailwind
  - `components/home/intro-chronological-summary.tsx` líneas 34-46 (estilos inline en CalendarSVG)

---

## 🟢 Prioridad Baja

### Tipografía & Legibilidad

- [x] Estandarizar tracking
  - tight: tracking-tight
  - normal: tracking-normal
  - wide: tracking-wide
  - widest: tracking-widest

- [x] Estandarizar line-height
  - Definir line heights por defecto según tamaño de fuente

- [x] Reemplazar tamaños de fuente arbitrarios con escala tipográfica
  - Buscar y reemplazar: text-[8px], text-[9px], text-[10px], text-[12px], text-[14px]
  - 75 coincidencias en 26 archivos

### Responsive Design

- [x] Definir estrategia de breakpoints
  - Mobile: default (< 640px)
  - Tablet: md (640px - 1024px)
  - Desktop: lg (1024px - 1280px)
  - Wide: xl (> 1280px)
  - Extra Wide: 2xl (> 1536px)

- [x] Corregir icon sizes inconsistentes
  - `components/header.tsx`: w-7 h-7 lg:w-5 lg:h-5 → w-5 h-5 lg:w-7 h-7 (escalar hacia arriba, no hacia abajo)

- [x] Estandarizar text scaling patterns
  - Definir patrones responsive para cada nivel de la escala tipográfica
  - xs: text-xs lg:text-xs (12px)
  - sm: text-sm lg:text-sm (14px)
  - base: text-base lg:text-base (16px)
  - lg: text-lg lg:text-lg (18px)
  - xl: text-xl lg:text-xl (20px)
  - 2xl: text-2xl lg:text-2xl (24px)
  - 3xl: text-3xl lg:text-3xl (30px)
  - 4xl: text-4xl lg:text-4xl (36px)
  - 5xl: text-5xl lg:text-5xl (48px)

### Consistencia de Estilos

- [x] Definir sistema de hover states
  - text: hover:text-primary
  - background: hover:bg-primary/10
  - transform: hover:scale-105
  - Combinar según el caso de uso

- [x] Crear escala de shadow

  ```typescript
  boxShadow: {
    'none': 'none',
    'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  }
  ```

- [x] Definir opacidades semánticas
  - disabled: opacity-50
  - muted: opacity-60
  - subtle: opacity-40
  - light: opacity-30

### Sistema de Color

- [x] Verificar contraste WCAG AA para todas las combinaciones
  - Usar herramienta de verificación de contraste
  - Asegurar ratio mínimo de 4.5:1 para texto normal
  - Asegurar ratio mínimo de 3:1 para texto grande

### Mantenibilidad CSS

- [x] Documentar sistema de diseño
  - Crear archivo `DESIGN-SYSTEM.md` con:
    - Escala tipográfica
    - Sistema de espaciado
    - Sistema de color
    - Componentes reutilizables
    - Patrones responsive

- [ ] Considerar crear archivo de utilidades de estilos
  - Para patrones repetitivos que no encajan en componentes

---

## 📊 Métricas de Progreso

- [ ] Total tareas: 28
- [ ] Completadas: 0
- [ ] En progreso: 0
- [ ] Pendientes: 28

## 📝 Notas

- Revisar cada tarea antes de marcar como completada
- Probar cambios en diferentes breakpoints (mobile, tablet, desktop)
- Verificar que los cambios no rompan el diseño existente
- Considerar crear branches para cada categoría de tareas
- Documentar cualquier decisión de diseño que se tome durante el proceso
