# Sistema de Diseño - Pasado Reciente

## Escala Tipográfica

### Tamaños de Fuente
- **xs**: 0.75rem (12px) - Line height: 1rem, Letter spacing: 0.05em
- **sm**: 0.875rem (14px) - Line height: 1.25rem, Letter spacing: 0.025em
- **base**: 1rem (16px) - Line height: 1.5rem, Letter spacing: 0
- **lg**: 1.125rem (18px) - Line height: 1.75rem, Letter spacing: -0.025em
- **xl**: 1.25rem (20px) - Line height: 1.75rem, Letter spacing: -0.025em
- **2xl**: 1.5rem (24px) - Line height: 2rem, Letter spacing: -0.025em
- **3xl**: 1.875rem (30px) - Line height: 2.25rem, Letter spacing: -0.025em
- **4xl**: 2.25rem (36px) - Line height: 2.5rem, Letter spacing: -0.025em
- **5xl**: 3rem (48px) - Line height: 1, Letter spacing: -0.025em

### Patrones Responsive
- xs: text-xs lg:text-xs
- sm: text-sm lg:text-sm
- base: text-base lg:text-base
- lg: text-lg lg:text-lg
- xl: text-xl lg:text-xl
- 2xl: text-2xl lg:text-2xl
- 3xl: text-3xl lg:text-3xl
- 4xl: text-4xl lg:text-4xl
- 5xl: text-5xl lg:text-5xl

### Tracking (Letter Spacing)
- **tight**: -0.025em
- **normal**: 0
- **wide**: 0.025em
- **wider**: 0.05em
- **widest**: 0.1em

## Espaciado

### Tokens de Espaciado
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Sistema de Espaciado por Jerarquía
- **Section**: spacing-3xl (py-12, my-12)
- **Subsection**: spacing-2xl (py-8, my-8)
- **Element**: spacing-xl (py-4, my-4)
- **Small**: spacing-lg (py-2, my-2)

## Border Radius

### Tokens
- **sm**: 0.125rem (2px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **full**: 9999px

### Uso
- **rounded-sm**: elementos pequeños
- **rounded-md**: elementos medianos
- **rounded-lg**: elementos grandes
- **rounded-full**: círculos/badges

## Border Thickness

### Tokens
- **thin**: 1px
- **default**: 2px
- **thick**: 4px

## Shadows

### Escala de Shadow
- **sm**: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- **default**: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
- **md**: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- **lg**: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- **xl**: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)

## Opacidades Semánticas

- **disabled**: opacity-50
- **muted**: opacity-60
- **subtle**: opacity-40
- **light**: opacity-30

## Hover States

### Sistema de Hover States
- **text**: hover:text-primary
- **background**: hover:bg-primary/10
- **transform**: hover:scale-105
- Combinar según el caso de uso

## Breakpoints

### Estrategia de Breakpoints
- **Mobile**: default (< 640px)
- **Tablet**: md (640px - 1024px)
- **Desktop**: lg (1024px - 1280px)
- **Wide**: xl (> 1280px)
- **Extra Wide**: 2xl (> 1536px)

## Colores

### Variables CSS (Light Mode)
- **background**: 40 30% 95% (#f5f3ef - Pergamino muy claro y suave)
- **foreground**: 222 47% 11% (Carboncillo profundo)
- **primary**: 24 85% 45% (Naranja Original)
- **secondary**: 35 30% 45% (Bronce envejecido)
- **accent**: 24 95% 60%
- **paper**: 40 25% 85% (Color de papel/crema para elementos)

### Variables CSS (Dark Mode)
- **background**: 222 47% 5%
- **foreground**: 40 30% 90%
- **primary**: 15 65% 55%
- **secondary**: 35 30% 45%
- **accent**: 24 95% 60%
- **paper**: 40 25% 75%

## Fuentes

### Newsreader
- **Uso**: Headings y texto destacado
- **Subsets**: latin
- **Weights**: 400, 800
- **Styles**: normal, italic
- **Variable**: --font-newsreader

### Inter
- **Uso**: Texto general del cuerpo
- **Subsets**: latin

## Componentes

### Button
- Usar siempre el componente Button para botones
- Variantes: default, outline, ghost, link
- Tamaños: default, sm, lg, icon

## Accesibilidad

### Contraste WCAG AA
- Ratio mínimo de 4.5:1 para texto normal
- Ratio mínimo de 3:1 para texto grande
