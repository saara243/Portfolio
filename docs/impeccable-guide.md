# Guía rápida de Impeccable (en Claude Code)

Impeccable es una skill de diseño frontend con subcomandos: sirve para crear, revisar, refinar y pulir interfaces.

## Instalación en Claude Code

`npx impeccable install` instala la skill para Copilot y otros agentes genéricos (`~/.agents/skills/`, `~/.github/skills/`), pero **no para Claude Code**. Claude Code solo lee las skills de:

- `~/.claude/skills/` (global)
- `.claude/skills/` (por proyecto)

Para que funcione, cópiala a mano:

```bash
cp -r ~/.agents/skills/impeccable ~/.claude/skills/impeccable
```

Después abre una conversación nueva o recarga VS Code (`Developer: Reload Window`), porque las skills se cargan al iniciar la sesión.

> Cada vez que actualices Impeccable con `npx`, vuelve a copiarla.

## Cómo se usa

```
/impeccable <comando> [objetivo]
```

- `objetivo` es opcional. Puede ser un fichero, una ruta o una sección, por ejemplo `src/pages/index.astro` o `"el hero"`.
- `/impeccable` a secas analiza el proyecto y sugiere 2-3 comandos. Nunca ejecuta nada sin confirmación.
- También se activa con lenguaje natural, por ejemplo: "mejora la tipografía de la home".
- En la documentación oficial verás `$impeccable`. Esa es la sintaxis de Codex/Copilot; en Claude Code se usa `/impeccable`.

## Flujo recomendado

1. **`/impeccable init`**: crea `PRODUCT.md` con el contexto del producto (quién eres, público, tono). Conviene hacerlo primero, porque el resto de comandos lo leen.
2. **`/impeccable document`**: genera `DESIGN.md` con el sistema visual actual (colores, tipografías, espaciado).
3. **`/impeccable critique src/pages/index.astro`**: revisión UX con puntuación y problemas por prioridad.
4. **`/impeccable polish`**: corrige lo que detectó la crítica. Usa esa crítica como lista de tareas.
5. **`/impeccable audit`**: revisión técnica final de accesibilidad, rendimiento y responsive.

## Modos

Impeccable elige un modo según el tipo de página:

| Modo | Para qué | Ejemplos |
|---|---|---|
| **Persuade** | Que el visitante decida y actúe | Landings, marketing, pricing |
| **Operate** | Que el usuario complete una tarea | Apps, dashboards, ajustes |
| **Read** | Que el lector entienda algo | Docs, artículos, guías |
| **Experience** | Que el trabajo sea el protagonista | **Portfolios**, galerías, showcases |

Este portfolio usa el modo **Experience**: el contenido manda y la interfaz queda en segundo plano.

## Comandos

### 🏗️ Construir

| Comando | Qué hace |
|---|---|
| `init` (alias `teach`) | Crea `PRODUCT.md` con el contexto del producto |
| `document` | Genera `DESIGN.md` a partir del código existente |
| `shape [feature]` | Planifica la UX/UI antes de escribir código |
| `extract [target]` | Saca tokens y componentes reutilizables a un design system |

### 🔍 Evaluar

| Comando | Qué hace |
|---|---|
| `critique [target]` | Revisión UX con puntuación heurística |
| `audit [target]` | Chequeo técnico: accesibilidad, rendimiento, responsive |

### ✨ Refinar

| Comando | Qué hace |
|---|---|
| `polish [target]` | Última pasada de calidad antes de publicar |
| `bolder [target]` | Hace más atrevido un diseño soso |
| `quieter [target]` | Suaviza un diseño recargado o agresivo |
| `distill [target]` | Simplifica y quita lo que sobra |
| `harden [target]` | Prepara para producción: errores, i18n, casos límite |
| `onboard [target]` | Diseña la primera experiencia de uso y los estados vacíos |

### 🎨 Potenciar

| Comando | Qué hace |
|---|---|
| `animate [target]` | Añade animaciones con propósito |
| `colorize [target]` | Añade color estratégico a una interfaz monocromática |
| `typeset [target]` | Mejora la jerarquía tipográfica y las fuentes |
| `layout [target]` | Arregla espaciado, ritmo y jerarquía visual |
| `delight [target]` | Añade personalidad y detalles memorables |
| `overdrive [target]` | Efectos ambiciosos que van más allá de lo convencional |

### 🛠️ Arreglar

| Comando | Qué hace |
|---|---|
| `clarify [target]` | Mejora textos, etiquetas y mensajes de error |
| `adapt [target]` | Adapta a móvil, tablet y otros tamaños de pantalla |
| `optimize [target]` | Diagnostica y corrige el rendimiento de la UI |

### 🔁 Iterar en vivo

| Comando | Qué hace |
|---|---|
| `live` | Seleccionas elementos en el navegador y genera variantes. Necesita el dev server arrancado (`npm run dev`) |

### ⚙️ Utilidades

| Comando | Qué hace |
|---|---|
| `hooks on\|off\|status` | Activa un detector que revisa el diseño automáticamente tras cada edición de UI |
| `doctor` | Detecta y repara ficheros de Impeccable desactualizados (`PRODUCT.md`, `DESIGN.md`…) |

> `craft` está obsoleto: pide directamente lo que quieres construir.

## Ejemplos

```
/impeccable
/impeccable init
/impeccable critique src/pages/index.astro
/impeccable typeset src/layouts
/impeccable animate "la sección de proyectos"
/impeccable adapt
```

## Consejos

- **Refinar o rediseñar.** `polish`, `layout`, `typeset`… mantienen la identidad visual actual. Para cambiarla por completo, pide un rediseño explícitamente.
- **Las indicaciones concretas se respetan.** Si pides una fuente, una paleta o una estética determinada, las respeta aunque no sean su preferencia.
- **Primero el contexto.** Con `PRODUCT.md` y `DESIGN.md` creados, los resultados encajan mucho mejor con el proyecto.

## Recursos

- Documentación oficial: https://impeccable.style/docs/
- Skill instalada: `~/.claude/skills/impeccable/SKILL.md`
- Guía detallada de cada comando: `~/.claude/skills/impeccable/reference/<comando>.md`
