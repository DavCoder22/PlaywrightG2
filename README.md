# TaskFlow QA - Playwright Testing Project

Proyecto de QA automation con Playwright para auditar la aplicación TaskFlow desplegada en Vercel.

## Cómo funciona

Este proyecto ejecuta tests automatizados contra la aplicación desplegada en **https://taskflow-sooty-pi.vercel.app** usando el navegador Firefox.

### Flujo de ejecución

1. **GitHub Actions** dispara los tests automáticamente al hacer push a `main`
2. **Playwright** abre Firefox, navega a la URL de la app y ejecuta las verificaciones
3. Los resultados se suben como **artifacts** con screenshots y videos si fallan

## Estructura del proyecto

```
├── tests/                    # Tests automatizados de Playwright
│   ├── auth.spec.js         # Tests de autenticación (login/register)
│   ├── login.spec.js        # Tests específicos de la página de login
│   ├── register.spec.js     # Tests específicos de la página de registro
│   ├── smoke.spec.js        # Tests de smoke (verificaciones básicas)
│   └── todos.spec.js        # Tests de la página de tareas
├── playwright.config.js     # Configuración de Playwright
├── .github/workflows/       # Workflows de CI/CD
├── Dockerfile              # Imagen Docker para ejecutar tests
├── docker-compose.yml       # Orquestación de servicios
└── package.json            # Dependencias y scripts
```

## Comandos locales

### Instalación

```bash
# Instalar dependencias del proyecto QA
npm install
```

### Ejecución de tests

```bash
# Ejecutar todos los tests (usa Firefox)
npm test

# Ejecutar con UI interactiva (可视化)
npm run test:ui

# Ejecutar tests en modo headed (ver el navegador)
npm run test:headed

# Ver reporte de tests anterior
npm run test:report
```

### Docker (opcional)

```bash
# Levantar servicios
npm run docker:up

# Ejecutar tests en Docker
npm run docker:test

# Bajar servicios
npm run docker:down
```

## Tests incluidos

| Archivo | Descripción |
|---------|-------------|
| `smoke.spec.js` | Verifica que la app carga, muestra el formulario y navega |
| `auth.spec.js` | Pruebas de autenticación: login, registro, validaciones |
| `login.spec.js` | Validaciones específicas del formulario de login |
| `register.spec.js` | Validaciones del formulario de registro |
| `todos.spec.js` | Verificaciones de la página de tareas |

## Configuración

- **Navegador**: Firefox (configurado en `playwright.config.js`)
- **URL base**: `https://taskflow-sooty-pi.vercel.app`
- **CI**: GitHub Actions ejecuta los tests automáticamente

### Cambiar la URL objetivo

Editar `playwright.config.js`:

```javascript
use: {
  baseURL: 'https://tu-otra-url.vercel.app',
}
```

## GitHub Actions

El workflow se ejecuta automáticamente en:
- Push a la rama `main`
- Pull requests a `main`

### Ver resultados

1. Ir a **https://github.com/DavCoder22/PlaywriteQA/actions**
2. Descargar el artifact **test-results** para ver screenshots si fallan

## Notas

- Los tests de autenticación real requieren credenciales válidas de Supabase
- Los tests actuales validan UI/UX sin necesidad de backend
- Si la app desplegada no responde, los tests fallarán correctamente